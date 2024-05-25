import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Report = () => {
  const [data, setData] = useState();
  const { state } = useLocation();

  useEffect(() => {
    setData(state.data);
  }, [state]);

  return (
    <div className="w-full flex justify-center gap-4">
      
      {/* project data */}
      <div className="w-[45%]">
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
      <div className="w-[45%]">
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
                <td className="px-6 py-4">{data?.project_name}</td>
              </tr>
              <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                <td className="px-6 py-4 font-bold">Department Name</td>
                <td className="px-6 py-4">{data?.project_id}</td>
              </tr>
              <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                <td className="px-6 py-4 font-bold">Juristic status</td>
                <td className="px-6 py-4">{data?.dept_name}</td>
              </tr>
              <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                <td className="px-6 py-4 font-bold">Registered capital</td>
                <td className="px-6 py-4">{data?.contract[0]?.winner}</td>
              </tr>
              <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                <td className="px-6 py-4 font-bold">Registered Date</td>
                <td className="px-6 py-4">{data?.contract[0]?.winner}</td>
              </tr>
              <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                <td className="px-6 py-4 font-bold">Address</td>
                <td className="px-6 py-4">{data?.dept_sub_name}</td>
              </tr>
              <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                <td className="px-6 py-4 font-bold">Total Projects won</td>
                <td className="px-6 py-4">{data?.province}</td>
              </tr>
              <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                <td className="px-6 py-4 font-bold">Total Potential earnings</td>
                <td className="px-6 py-4">{data?.project_type_name}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Report;
