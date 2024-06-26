import React, { useState } from "react";
import { Link } from "react-router-dom";

const Create = ({ submitBtn }) => {
  const [currency, setCurrency] = useState("");
  const [rate, setRate] = useState("");
  const createBtn = () => {
    submitBtn(currency, rate);
  };

  return (
    <div className="p-5">
      <Link to="/home">
        <button
          type="button"
          class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          <i className="fa-solid fa-chevron-left pr-3"></i>
          <span>Back</span>
        </button>
      </Link>
      <form class="max-w-md mx-auto">
        <div class="">
          <select
            id="countries"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            class="bg-gray-50 my-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="" selected>
              Currency
            </option>
            <option value="USD" selected>
              USD
            </option>
            <option value="THB" selected>
              THB
            </option>
            <option value="SGD" selected>
              SGD
            </option>
            <option value="MMK" selected>
              MMK
            </option>
          </select>
          <input
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            type="text"
            id="default-search"
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder="Exchange Rate"
          />
          <button
            type="button"
            onClick={() => createBtn(currency, rate)}
            class="focus:outline-none mt-72 ml-80 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
