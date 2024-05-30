import express from "express";

const app = express();
const PORT = 3000;

const getData = async () => {
  const url =
    "https://opend.data.go.th/govspending/cgdcontract?api-key=29gUWaSV8volk31RZpuBYJtqAqws1X1p&year=2560";

  const options = {
    method: "GET",
  };
  const response = await fetch(url, options);
  const data = await response.json(); // Convert response body to JSON
  return data; // Return the JSON data
};

app.get("/", async (req, res) => {
  try {
    const data = await getData();
    res.json(data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
