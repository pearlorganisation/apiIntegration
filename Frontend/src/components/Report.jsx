import React, { useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import BarChart from "./BarChart";

const Report = () => {
  const [data, setData] = useState();
  const [winningData, setWinningData] = useState();
  const { state } = useLocation();
  const [winningDataLoading, setWinningDataLoading] = useState(true);
 
  useLayoutEffect(() => {
    console.log(state)
    setData(state.data);
    axios
      .get(
        `https://dataapi.moc.go.th/juristic?juristic_id=${state.data?.contract[0]?.winner_tin}`
      )
      .then((res) => {
        setWinningData(res.data);
        console.log(res.data);
        setWinningDataLoading(false)
      })
      .catch((err) => {
        console.error(err);
        setWinningDataLoading(false)

      });

      console.log(state.formData)

      axios
      .post(`${import.meta.env.VITE_API_URL}/projects/find`, state.formData)
      .then((res) => {
        // console.log(res);
        // setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        // setIsLoading(false);
      });


  }, [state]);



  const chartData = {
    labels: ["Chocolate", "Vanilla", "Strawberry"],
    datasets: [
      {
        label: "Blue",
        backgroundColor: "blue",
        data: [3, 7, 4]
      },
      {
        label: "Red",
        backgroundColor: "red",
        data: [4, 3, 5]
      },
      {
        label: "Green",
        backgroundColor: "green",
        data: [7, 2, 6]
      }
    ]
  };





  return (
    <>
      <div className="flex w-full justify-between mt-4 px-4">
        <span className="text-3xl">Details</span>
        <span className="flex gap-2 cursor-pointer">
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--twemoji"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              fill="#A7122D"
              d="M0 26.518V27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-.482H0z"
            ></path>
            <path fill="#EEE" d="M0 22.181h36v4.485H0z"></path>
            <path fill="#292648" d="M0 13.513h36v8.821H0z"></path>
            <path fill="#EEE" d="M0 9.181h36v4.485H0z"></path>
            <path
              fill="#A7122D"
              d="M0 9.333V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v.333H0z"
            ></path>
          </svg>
          <span className="flex justify-center text-3xl">TH</span>
        </span>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-4">
        {/* project data */}
        <div className="sm:w-[45%] w-full">
          <div className="text-2xl font-semibold text-center my-5">
            Project Data
          </div>

          <div className="relative overflow-x-auto sm:rounded-lg shadow-[0_0_1px_0px#000] mb-10">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500  ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
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
                  <td className="px-6 py-4 font-bold">Project name</td>
                  <td className="px-6 py-4">{data?.project_name}</td>
                </tr>
                <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                  <td className="px-6 py-4 font-bold">Project ID</td>
                  <td className="px-6 py-4">{data?.project_id}</td>
                </tr>
                <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                  <td className="px-6 py-4 font-bold">Department Name</td>
                  <td className="px-6 py-4">{data?.dept_name}</td>
                </tr>
                <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                  <td className="px-6 py-4 font-bold">Winning Company</td>
                  <td className="px-6 py-4">{data?.contract[0]?.winner}</td>
                </tr>
                <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                  <td className="px-6 py-4 font-bold">Sub-Department Name</td>
                  <td className="px-6 py-4">{data?.dept_sub_name}</td>
                </tr>
                <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                  <td className="px-6 py-4 font-bold">Location</td>
                  <td className="px-6 py-4">{data?.province}</td>
                </tr>
                <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                  <td className="px-6 py-4 font-bold">Project Type</td>
                  <td className="px-6 py-4">{data?.project_type_name}</td>
                </tr>
                <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                  <td className="px-6 py-4 font-bold">Announced Date</td>
                  <td className="px-6 py-4">{data?.announce_date}</td>
                </tr>
                <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                  <td className="px-6 py-4 font-bold">Contract Start Date</td>
                  <td className="px-6 py-4">
                    {data?.contract[0]?.contract_date}
                  </td>
                </tr>
                <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                  <td className="px-6 py-4 font-bold">Contract Finish Date</td>
                  <td className="px-6 py-4">
                    {data?.contract[0]?.contract_finish_date}
                  </td>
                </tr>
                <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                  <td className="px-6 py-4 font-bold">Reference price</td>
                  <td className="px-6 py-4">{data?.price_build}</td>
                </tr>
                <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                  <td className="px-6 py-4 font-bold">Winning bid price</td>
                  <td className="px-6 py-4">
                    {data?.contract[0]?.price_agree}
                  </td>
                </tr>
                <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                  <td className="px-6 py-4 font-bold">Final project price</td>
                  <td className="px-6 py-4">{data?.sum_price_agree}</td>
                </tr>
                <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                  <td className="px-6 py-4 font-bold">project status</td>
                  <td className="px-6 py-4">{data?.contract[0]?.status}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* winning company data */}
        <div className="sm:w-[45%] w-full">
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
                    <td className="px-6 py-4">
                      {winningData?.registerCapital}
                    </td>
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
                    <td className="px-6 py-4">{winningData?.province}</td>
                  </tr>
                  <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                    <td className="px-6 py-4 font-bold">
                      Total Potential earnings
                    </td>
                    <td className="px-6 py-4">
                      {winningData?.project_type_name}
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

          {/* chart */}
          <div>
            <BarChart data={chartData} />
          </div>



        </div>
      </div>
    </>
  );
};

export default Report;
