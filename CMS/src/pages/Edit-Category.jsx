import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const EditCategory = () => {
  const BASE_URL = "https://phase2-aio.vercel.app";
  const { id } = useParams();
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchCategory = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const { data } = await axios.get(
        `${BASE_URL}/apis/restaurant-app/categories/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data.data.name);
      setName(data.data.name);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const handleEdit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("access_token");
      let data = await axios.put(
        `${BASE_URL}/apis/restaurant-app/categories/${id}`,
        {
          name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data);
      navigate("/categories");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <form onSubmit={handleEdit}>
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
          Edit Category
        </button>
      </form>
    </div>
  );
};

export default EditCategory;
