import Layout from "@/components/Layout";
import axios from "axios";
import React, { useState } from "react";

const New = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [rent, setRent] = useState("");
  /*  console.log(title, location, description, rent) */
  const createProduct = async (e) => {
    e.preventDefault;
    const data = { title, location, description, rent };
    await axios.post("/api/houses", data);
  };

  return (
    <Layout>
      <h1 className="flex mb-6 justify-center font-bold text-xl">
        New Apartment
      </h1>
      <form onSubmit={createProduct}>
        <label className="font-semibold text-gray-400">Apartment Name</label>
        <input
          placeholder="Apartment name"
          type="text"
          className="border-2 border-gray-300 rounded-md px-2 font-office bg-secondary py-2 focus:border-green-600 ease-in duration-150 w-full mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="font-semibold text-gray-400">Location</label>
        <input
          placeholder="Apartment location"
          type="text"
          className="border-2 border-gray-300 rounded-md px-2 font-office bg-secondary py-2 focus:border-green-600 ease-in duration-150 w-full mb-4"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label className="font-semibold text-gray-400">Description</label>
        <textarea
          placeholder="Apartment description"
          className="border-2 border-gray-300 rounded-md px-2 font-office bg-secondary py-2 focus:border-green-600 ease-in duration-150 w-full mb-4 "
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label className="font-semibold text-gray-400">
          Rent (ksh per month)
        </label>
        <input
          placeholder="Apartment name"
          type="number"
          className="border-2 border-gray-300 rounded-md px-2 font-office bg-secondary py-2 focus:border-green-600 ease-in duration-150 w-full mb-4"
          value={rent}
          onChange={(e) => setRent(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            className="bg-green-600 px-2 rounded-lg py-2 hover:scale-110 duration-150 ease-in"
            type="submit"
          >
            Save Apartment
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default New;
