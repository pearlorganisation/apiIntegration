import React, { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Report = () => {
  const [data, setData] = useState();
  const [winningData, setWinningData] = useState();
  const { state } = useLocation();

  useLayoutEffect(() => {
    setData(state.data);
  }, [state]);

  useLayoutEffect(() => {
    axios.get(`https://dataapi.moc.go.th/juristic?juristic_id=${data?.contract[0]?.winner_tin}`).then(res => {
      setWinningData(res.data)
      console.log(res.data)
    }).catch(err => {
      console.error(err)
    })

  }, [data])

  return (
    <div className="w-full flex flex-wrap justify-center gap-4">
      
      {/* project data */}
      <div className="sm:w-[45%] w-full">
        <div className="text-2xl font-semibold text-center my-5">
          Project Data
        </div>
      
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
                <td className="px-6 py-4">
                  {data?.price_build}
                </td>
              </tr>
              <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                <td className="px-6 py-4 font-bold">Winning bid price</td>
                <td className="px-6 py-4">
                  {data?.contract[0]?.price_agree}
                </td>
              </tr>
              <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                <td className="px-6 py-4 font-bold">Final project price</td>
                <td className="px-6 py-4">
                  {data?.sum_price_agree}
                </td>
              </tr>
              <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                <td className="px-6 py-4 font-bold">project status</td>
                <td className="px-6 py-4">
                  {data?.contract[0]?.status}
                </td>
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
                <td className="px-6 py-4">{winningData?.addressDetail?.addressName}</td>
              </tr>
              <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                <td className="px-6 py-4 font-bold">Total Projects won</td>
                <td className="px-6 py-4">{winningData?.province}</td>
              </tr>
              <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                <td className="px-6 py-4 font-bold">Total Potential earnings</td>
                <td className="px-6 py-4">{winningData?.project_type_name}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Report;
