import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Select from "react-select";
import { BeatLoader } from "react-spinner";
import Skeleton from "react-loading-skeleton";

const Form = () => {
  const [apiData, setApiData] = useState(null);
  const [countries, setCountries] = useState(null);
  const [years, setYears] = useState([]);
  const [apiUrl, setApiUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // refs

  const resultTableRef = useRef(null);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // sample data

  const populateYears = () => {
    let currentYear = new Date().getFullYear();
    let earliestYear = 1970;
    let yearsArr = [];
    while (currentYear >= earliestYear) {
      yearsArr.push(currentYear);
      currentYear -= 1;
    }
    setYears(yearsArr);
  };

  useEffect(() => {
    // axios
    //   .get("https://restcountries.com/v3.1/independent?status=true")
    //   .then((res) => {
    //     setCountries(res.data);
    //   });
    populateYears();
    // resultTableRef.current.scrollIntoView({ behavior: "smooth" });
  }, [apiData]);

  const onSubmit = (data) => {
    console.log(data);
    setIsLoading(true);
    axios
      .post(`${import.meta.env.VITE_API_URL}/projects/find`, data)
      .then((res) => {
        console.log(res);
        setApiData(res.data.result);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };

  return (
    <div className="flex flex-col gap-10 justify-center py-10">
      <div className="flex flex-col justify-center  items-center gap-4">
        <div className="text-2xl font-semibold">Data Request Form:</div>
        <form className="w-[800px]" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-2">
            <div className="mb-1">
              <label
                htmlFor="Country"
                className="block mb-1 text-sm font-medium text-gray-90"
              >
                Country
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                {...register("country", { required: false })}
              >
                
                     
                        <option
                          key={"Thailand"}
                          value={"Thailand"}
                          selected
                        >
                          {"Thailand"}
                        </option>
                      
                    
              </select>
            </div>

            <div className="mb-1">
              <label
                htmlFor="winningCompany"
                className="block mb-1 text-sm font-medium text-gray-90"
              >
                Winning Company Name
              </label>
              <input
                type="text"
                id="winningCompany"
                placeholder="winningCompany"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                {...register("winningCompany", { required: false })}
              />
            </div>
          </div>

          <div className="mb-1">
            <label
              htmlFor="keyword"
              className="block mb-1 text-sm font-medium text-gray-90"
            >
              Keyword
            </label>
            <input
              type="text"
              id="keyword"
              placeholder="keyword"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              {...register("keyword", { required: true })}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="mb-1">
              <label
                htmlFor="yearFrom"
                className="block mb-1 text-sm font-medium text-gray-90"
              >
                Year From
              </label>
              <Controller
                name="yearsFrom"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={years.map((year) => ({
                      value: year,
                      label: year,
                    }))}
                  />
                )}
              />
            </div>

            <div className="mb-1">
              <label
                htmlFor="yearTo"
                className="block mb-1 text-sm font-medium text-gray-90"
              >
                To
              </label>
              <select
                id="yearTo"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                {...register("yearTo", { required: false })}
              >
                {years &&
                  years.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="mb-1">
              <label
                htmlFor="purchaseMethod"
                className="block mb-1 text-sm font-medium text-gray-90"
              >
                Purchase Method
              </label>
              <select
                id="purchaseMethod"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                {...register("purchaseMethod", { required: false })}
              ></select>
            </div>

            <div className="mb-1">
              <label
                htmlFor="purchaseSubmethod"
                className="block mb-1 text-sm font-medium text-gray-90"
              >
                Purchase Sub-Method
              </label>
              <select
                id="purchaseSubmethod"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                {...register("purchaseSubmethod", { required: false })}
              ></select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="mb-1">
              <label
                htmlFor="xaxis"
                className="block mb-1 text-sm font-medium text-gray-90"
              >
                Department
              </label>
              <input
                type="text"
                id="xaxis"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              />
            </div>
            <div className="mb-1">
              <label
                htmlFor="yaxis2"
                className="block mb-1 text-sm font-medium text-gray-90"
              >
                Sub department
              </label>
              <input
                type="text"
                id="yaxis2"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              />
            </div>
            <div className="mb-1">
              <label
                htmlFor="projectType"
                className="block mb-1 text-sm font-medium text-gray-90"
              >
                Project Type
              </label>
              <input
                type="text"
                id="projectType"
                placeholder="projectType"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                {...register("projectType", { required: false })}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="mb-1">
              <label
                htmlFor="yearFrom"
                className="block mb-1 text-sm font-medium text-gray-90"
              >
                Announce Date From
              </label>
              <select
                id="yearFrom"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                {...register("yearFrom", { required: false })}
              >
                {years &&
                  years.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
              </select>
            </div>

            <div className="mb-1">
              <label
                htmlFor="yearTo"
                className="block mb-1 text-sm font-medium text-gray-90"
              >
                Till
              </label>
              <select
                id="yearTo"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                {...register("yearTo", { required: false })}
              >
                {years &&
                  years.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="mb-1">
              <label
                htmlFor="projectType"
                className="block mb-1 text-sm font-medium text-gray-90"
              >
                Reference Price From
              </label>
              <input
                type="text"
                id="projectType"
                placeholder="Price From"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                {...register("projectType", { required: false })}
              />
            </div>

            <div className="mb-1">
              <label
                htmlFor="projectType"
                className="block mb-1 text-sm font-medium text-gray-90"
              >
                Till
              </label>
              <input
                type="text"
                id="projectType"
                placeholder="Price Till"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                {...register("projectType", { required: false })}
              />
            </div>
          </div>
          <div className="mb-1">
            <label
              htmlFor="purchaseMethod"
              className="block mb-1 text-sm font-medium text-gray-90"
            >
              Project Status
            </label>
            <select
              id="purchaseMethod"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
              {...register("purchaseMethod", { required: false })}
            ></select>
          </div>

          <div className="mt-2 flex gap-2 justify-center">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>

            <button
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Reset
            </button>
          </div>
        </form>
      </div>
      <div className="text-2xl text-center font-semibold">Result:</div>
      {apiData ? (
        <div
          className="relative overflow-x-auto sm:rounded-lg shadow-[0_0_1px_0px#000] mb-10"
          ref={resultTableRef}
        >
          <table className="w-full text-sm text-left rtl:text-right text-gray-500  ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  S.No
                </th>
                <th scope="col" className="px-6 py-3">
                  Project
                </th>
                <th scope="col" className="px-6 py-3">
                  Department
                </th>
                <th scope="col" className="px-6 py-3">
                  Winning Company
                </th>
                <th scope="col" className="px-6 py-3">
                  Location
                </th>
                <th
                  scope="col"
                  className="px-6 py-3"
                  style={{ width: "200px" }}
                >
                  Reference Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3"
                  style={{ width: "200px" }}
                >
                  Winning Bid
                </th>
                <th
                  scope="col"
                  className="px-6 py-3"
                  style={{ width: "150px" }}
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {apiData &&
                apiData.map((item, idx) => (
                  <tr
                    key={`apiData${idx}`}
                    className="odd:bg-white  even:bg-gray-50  border-b "
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {idx + 1}
                    </th>
                    <td className="px-6 py-4 text-blue-500 hover:text-blue-700 hover:underline transition duration-300">
                      <Link to="/report" state={{ data: item }}>
                        {item?.project_name}
                      </Link>
                    </td>
                    <td className="px-6 py-4">{item?.dept_name}</td>
                    <td className="px-6 py-4">{item?.contract[0]?.winner}</td>
                    <td className="px-6 py-4">{item?.province}</td>
                    <td className="px-6 py-4">&#3647; {item?.price_build}</td>
                    <td className="px-6 py-4">
                      &#3647; {item?.contract[0]?.price_agree}
                    </td>
                    <td className="px-6 py-4">{item?.contract[0]?.status}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          <Skeleton count={10} className="h-[40px]" />
        </>
      )}
    </div>
  );
};

export default Form;
