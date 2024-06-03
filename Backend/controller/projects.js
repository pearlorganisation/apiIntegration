
const getProjectsData = async (data) => {
  const url = `${process.env.API1}?api-key=${process.env.API_KEY}&year=${Number(data.yearsFrom.value) + 543}&keyword=${data?.keyword}&limit=${data?.limit || 30}&offset=${data?.offset || 0}`;

  const options = {
    method: "GET",
  };
  const response = await fetch(url, options);
  const res = await response.json(); // Convert response body to JSON
  return res; // Return the JSON data
};


export const getData = async (req, res) => {
    try {
        console.log(req.body)
        const result = await getProjectsData(req.body)
        res.status(200).send(result)
    } catch (error) {
        console.error(error)
    }
}