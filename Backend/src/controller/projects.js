const findProjectsData = async (data) => {
  const url = `${process.env.API1}?api-key=${process.env.API_KEY}&year=${
    data.year + 543
  }&keyword=${data?.keyword}&limit=${data?.limit || 500}&offset=${
    data?.offset || 0
  }&winner_tin=${data?.winnerTin || " "}`;

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

const findDepartmentCode = async () => {
  console.log("finding dept code");
  const url = `https://opend.data.go.th/govspending/egpdepartment&api-key=${process.env.API_KEY}`;

  const options = {
    method: "GET",
  };
  const response = await fetch(url, options);
  const res = await response.json();
  console.log(res);
  if (res?.result[0]?.dept_code) {
    return { status: true, deptCode: res?.result[0]?.dept_code }; // Return the JSON data
  }
  return { status: false, message: "department code not found" };
};

export const getDepartmentData = async (req, res) => {
  try {
    const departmentCode = await findDepartmentCode(req.body);
    const data = { ...req.body };
    data.dept_code = departmentCode;
    data.limit = 20;
    const result = await findProjectsData(data);
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("There seems to be some technical issue while fetching the data");
  }
};
