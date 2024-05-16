import React, { useState, useEffect } from "react";
import axios from "axios";

const Form = () => {
  const [showDiv, setDiv] = useState(false);
  const [data, setData] = useState();

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://opend.data.go.th/govspending/cgdcontract?api-key=ffSlZXkHL6pxgZbJ6QmmsOepYerhY8eA&year=2560",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <>
      <form class="max-w-sm mx-auto" className="flex flex-col justify-center w-[500px]">
        <div class="mb-5" >
          <label
            for="Country"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Country
          </label>
          <input
            type="text"
            id="Country"
            placeholder="Country"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={"Thailand"}
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="Keywords"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Keywords
          </label>
          <input
            type="text"
            id="Keywords"
            placeholder="Keywords"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>


        
        <div class="mb-5">
          <label
            for="year"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Year
          </label>
          <input
            type="number"
            id="year"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={2560}
            required
          />
        </div>

        
        <div className="grid grid-cols-3">
        <div class="mb-5">
          <label
            for="xaxis"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            X Axes
          </label>
          <input
            type="text"
            id="xaxis"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            
          />
        </div>
        <div class="mb-5">
          <label
            for="yaxis2"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Y Axes 2
          </label>
          <input
            type="text"
            id="yaxis2"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     
          />
        </div >
        <div class="mb-5">
          <label
            for="yaxis1"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Y Axes 1
          </label>
          <input
            type="text"
            id="yaxis1"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     
          />
        </div>

        </div>
     


        <div className="flex justify-center">
        <button
        
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => {
          // setDiv((prevState) => !prevState);
          fetchData();
        }}
      >
        Submit
      </button>
        </div>
       
      </form>

      {showDiv && <div className="border-2 border-r-red-500">{data}</div>}
    </>
  );
};

export default Form;
