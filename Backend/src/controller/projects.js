const findProjectsData = async (data) => {
  const url = `${process.env.API1}?api-key=${process.env.API_KEY}&year=${
    data.year + 543
  }&keyword=${data?.keyword}&limit=${data?.limit || 30}&offset=${
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
    let data = req.body
    console.log(data)
    data.year = Number(data.yearsFrom.value)
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
    const companyProjectsData = []
    let i = Number(req.body.yearsFrom.value)
    let floorYear = i - 5
    // getting last 5 year data
    let totalProjects = 0
    for(i;i >= floorYear; i--){
      let data = req.body
      data.year = i
      let result = await findProjectsData(data)
      console.log(result)
      companyProjectsData.push(result)
    }
    res.status(200).json({
      status: true,
      companyProjectsData: companyProjectsData,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, message: err });
  }
};
