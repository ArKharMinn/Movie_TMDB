import React from "react";
import { Link } from "react-router-dom";
import { Table } from "flowbite-react";
import { useSelector } from "react-redux";

const Home = () => {
  const lists = useSelector((state) => state.lists.lists);
  return (
    <div className="p-6">
      <Link to="/create">
        <button
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Create
        </button>
      </Link>
      <div className="overflow-x-auto pt-10">
        {lists.length > 0 ? (
          <Table>
            <Table.Head>
              <Table.HeadCell>Currency</Table.HeadCell>
              <Table.HeadCell>Exchange Time</Table.HeadCell>
              <Table.HeadCell>Exchange Rate</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {lists.map((currency, index) => (
                <Table.Row
                  key={index}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-bold text-green-700 dark:text-white">
                    {currency.code}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-bold text-green-700 dark:text-white">
                    {currency.date}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-bold text-green-700 dark:text-white">
                    {currency.rate}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        ) : (
          <h1>There is no Data</h1>
        )}
      </div>
    </div>
  );
};

export default Home;
