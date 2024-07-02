import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import BarChart from "../components/BarChart";

const CompanyInfo = ({ formData, winnerTin }) => {
  const [winningData, setWinningData] = useState();
  const [winningDataLoading, setWinningDataLoading] = useState(true);
  const [totalProjects, setTotalProjects] = useState(null);
  const [totalPotentialEarning, setTotalPotentialEarning] = useState(null);
  const [companyProjects, setCompanyProjects] = useState(null)
  const [datasets, setDataSets] = useState(null)

  useLayoutEffect(() => {
    axios
      .get(`https://dataapi.moc.go.th/juristic?juristic_id=${winnerTin}`)
      .then((res) => {
        setWinningData(res.data);
        setWinningDataLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setWinningDataLoading(false);
      });
  }, [winnerTin]);

  useEffect(() => {
    formData.winnerTin = winnerTin;
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/projects/companyprojects`,
        formData
      )
      .then((res) => {
        setCompanyProjects(res.data.companyProjects)
        setTotalProjects(res.data.totalProjects);
        setTotalPotentialEarning(res.data.totalPotentialEarning);
        // setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        // setIsLoading(false);
      });
  }, [formData]);


  // useEffect(() => {
  //   let arr = []

  //   for(let i=0; i < companyProjects.length; i++) {
  //     for(let j=0; j < companyProjects[i].result; j++){
  //       companyProjects[i].result[j]
  //     }
  //   }
  // }, [companyProjects])

  const chartData = {
    labels: ["Chocolate", "Vanilla", "Strawberry"],
    datasets: [
      {
        label: "dept 1", // x axis
        backgroundColor: "blue",
        data: [3, 7, 4], // y axis
      },
      {
        label: "Red",
        backgroundColor: "red",
        data: [4, 3, 5],
      },
      {
        label: "Green",
        backgroundColor: "green",
        data: [7, 2, 6],
      },
    ],
  };


  return (
    <div className="grid grid-cols-1">
      <div className="col-span-1">
        <div className="text-2xl font-semibold text-center my-5">
          Winning Company Data
        </div>
        {winningDataLoading && <Skeleton count={8} className="h-[50px]" />}
        {winningData && (
          <div className="relative overflow-x-auto sm:rounded-lg shadow-[0_0_1px_0px#000] mb-10">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500  ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                  <td className="px-6 py-4 font-bold">Juristic ID</td>
                  <td className="px-6 py-4">{winningData?.juristicID}</td>
                </tr>
                <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                  <td className="px-6 py-4 font-bold">Department Name</td>
                  <td className="px-6 py-4">{winningData?.juristicNameTH}</td>
                </tr>
                <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                  <td className="px-6 py-4 font-bold">Juristic status</td>
                  <td className="px-6 py-4">{winningData?.juristicStatus}</td>
                </tr>
                <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                  <td className="px-6 py-4 font-bold">Registered capital</td>
                  <td className="px-6 py-4">{winningData?.registerCapital}</td>
                </tr>
                <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                  <td className="px-6 py-4 font-bold">Registered Date</td>
                  <td className="px-6 py-4">{winningData?.registerDate}</td>
                </tr>
                <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                  <td className="px-6 py-4 font-bold">Address</td>
                  <td className="px-6 py-4">
                    {winningData?.addressDetail?.addressName}
                  </td>
                </tr>

                <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                  <td className="px-6 py-4 font-bold">Total Projects won</td>
                  <td className="px-6 py-4">
                    {totalProjects ? totalProjects : "Calculating..."}
                  </td>
                </tr>
                <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                  <td className="px-6 py-4 font-bold">
                    Total Potential earnings
                  </td>
                  <td className="px-6 py-4">
                    {totalPotentialEarning
                      ? `฿ ${totalPotentialEarning.toLocaleString("en-US")}`
                      : "Calculating..."}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {!winningData && !winningDataLoading && (
          <div className="relative overflow-x-auto shadow-[0_0_1px_0px#000] mb-10 text-center text-2xl font-light">
            No Data found
          </div>
        )}
      </div>
      {/* chart */}
      <div className="w-full col-span-1">
        <BarChart data={chartData} />
      </div>
    </div>
  );
};

export default CompanyInfo;
