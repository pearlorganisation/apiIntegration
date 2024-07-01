const findProjectsData = async (data) => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  const url = `${process.env.API1}?api-key=${process.env.API_KEY1}&year=${
    data.year + 543
  }&keyword=${data?.keyword || " "}&limit=${data?.limit || 500}&offset=${
    data?.offset || 0
  }&winner_tin=${data?.winnerTin || " "}&dept_code=${data?.dept_code || ""}`;

  // console.log(url)
  const options = {
    method: "GET",
  };
  const response = await fetch(url, options);
  const res = await response.json(); // Convert response body to JSON
  return res; // Return the JSON data
};

const findCompanyData = async (data) => {
  const result = `https://dataapi.moc.go.th/juristic?juristic_id=${data.winnerTin}`;
  const options = {
    method: "GET",
  };
  const response = await fetch(url, options);
  const res = await response.json(); // Convert response body to JSON
  return res; // Return the JSON data
};

export const getData = async (req, res) => {
  try {
    let data = req.body;
    // console.log(data)
    data.year = Number(data.yearsFrom.value);
    const result = await findProjectsData(data);
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
  }
};

export const getCompanyData = async (req, res) => {
  try {
    const companyData = await findCompanyData(req.body.winnerTin);
    res.status(200).json({
      status: true,
      companyData: companyData,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, message: err });
  }
};

export const getCompanyProjectsData = async (req, res) => {
  try {
    console.log("company data request came");

    const companyProjectsData = [];
    let i = Number(req.body.yearsFrom.value);

    // getting last x year data
    let floorYear = i - 3;
    let totalProjects = 0;

    for (i; i >= floorYear; i--) {
      let data = req.body;
      data.year = i;
      let result = await findProjectsData(data);
      totalProjects += result.result.length;
      companyProjectsData.push(result);
    }
    let totalPotentialEarning = 0;
    companyProjectsData.forEach((item) => {
      item.result.forEach((subItem) => {
        totalPotentialEarning += parseFloat(
          subItem.contract[0].price_agree.replace(/,/g, "")
        );
      });
    });

    res.status(200).json({
      status: true,
      companyProjectsData: companyProjectsData,
      totalProjects: totalProjects,
      totalPotentialEarning: totalPotentialEarning,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, message: err });
  }
};

// get department data

const findDepartmentCode = async (data) => {
  console.log("finding dept code");
  const url = `https://opend.data.go.th/govspending/egpdepartment?api-key=${process.env.API_KEY0}&dept_name=${data?.dept_name}`;
  // console.log(url)
  const options = {
    method: "GET",
  };

  const response = await fetch(url, options);
  const res = await response.json();
  // console.log(res);
  if (res?.result[res?.result?.length - 1]?.dept_code) {
    return {
      status: true,
      dept_code: res?.result[res?.result?.length - 1]?.dept_code,
    }; // Return the JSON data
  }
  return { status: false, message: "department code not found" };
};

const findDepartmentSummary = async (data) => {
  console.log(data);

  const url = `https://opend.data.go.th/govspending/summary_cgdcontract?api-key=${
    process.env.API_KEY0
  }&year=${data?.year + 543}&dept_code=${data?.dept_code}`;

  const options = {
    method: "GET",
  };

  const response = await fetch(url, options);
  const res = await response.json();
  console.log(res);
  if (res?.summary) {
    return { status: true, summary: res?.summary }; // Return the JSON data
  }
  return { status: false, message: "department summary not found" };
};

export const getDepartmentData = async (req, res) => {
  try {
    const departmentCodeRes = await findDepartmentCode(req.body);
    const data = { ...req.body };

    data.dept_code = departmentCodeRes.dept_code;
    let result = [];
    const initialYear = Number(data?.year);
    let year = Number(data?.year);
    while (result.length < 5) {
      const res = await findProjectsData(data);
      result.push(...res?.result);
      year -= 1;
      data.year = year;
    }

    data.year = initialYear;
    let summaryResult = { total_project: "", total_price: "" };
    let summaryYear = Number(data.year);
    let floorYear = summaryYear - 5;
    console.log(summaryResult.length);
    while (summaryResult?.total_project?.length <= 0 && year >= floorYear) {
      const summaryRes = await findDepartmentSummary(data);

      summaryResult = {
        total_project: summaryRes?.summary?.total_project || "",
        total_price: summaryRes?.summary?.total_price || "",
        year: summaryYear
      };

      summaryYear -= 1;
      data.year = summaryYear;
    }

    res.status(200).json({ deptProjects: result, summaryResult });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("There seems to be some technical issue while fetching the data");
  }
};
