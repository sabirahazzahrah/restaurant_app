import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const BASE_URL = "http://localhost:3000";
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleAddCategory = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("access_token");
      const response = await axios.post(
        `${BASE_URL}/categories`,
        {
          name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate("/categories");
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <form onSubmit={handleAddCategory}>
        <div className="mb-6">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Add Category
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
