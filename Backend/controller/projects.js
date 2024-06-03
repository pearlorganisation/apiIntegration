const findProjectsData = async (data) => {
  const url = `${process.env.API1}?api-key=${process.env.API_KEY}&year=${
    Number(data.yearsFrom.value) + 543
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
    const result = await findProjectsData(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
  }
};

export const getCompanyData = async (req, res) => {
  try {
    const companyData = await findCompanyData(req.body.winnerTin);
    console.log(companyData);
    if (companyData) {
      const companyProjectsData = await findProjectsData(req.body);
      console.log(companyProjectsData);

      if (companyProjectsData) {
        res.status(200).json({
          status: true,
          companyData: companyData,
          companyProjectsData: companyProjectsData,
        });
      } else {
        res.status(500).json({ status: false, message: "data not found" });
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, message: err });
  }
};
