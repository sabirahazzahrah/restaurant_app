import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";

const Categories = () => {
  const BASE_URL = "https://phase2-aio.vercel.app";
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const { data } = await axios.get(
        `${BASE_URL}/apis/restaurant-app/categories`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      //   console.log(data.data);
      setCategories(data.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setError(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEditClick = (id) => {
    navigate(`/categories/${id}`);
  };

  const handleDeleteCategory = async (id) => {
    try {
      // const token = localStorage.getItem("access_token");
      const token = localStorage.getItem("access_token");
      const res = await axios.delete(
        `${BASE_URL}/apis/restaurant-app/categories/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // fetchData();
      // console.log("berhasil delete");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
        <Navbar />
        <h2 className="mb-4 text-2xl dark:text-black font-semibold leadi">
          List Of Category
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="dark:bg-gray-700">
              <tr className="text-center">
                <th className="p-3">No</th>
                <th className="p-3">Category</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => {
                console.log(category);
                return (
                  <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                    <td className="p-3">{category.id}</td>
                    <td className="p-3">{category.name}</td>
                    <td>
                      <Link
                        to={`/categories/${category.id}`}
                        onClick={() => handleEditClick(category.id)}
                      >
                        <span className="px-3 py-1 font-semibold rounded-md dark:bg-purple-400 dark:text-gray-900">
                          <span>Update</span>
                        </span>
                      </Link>
                      <Link
                        to={`/categories/delete/${category.id}`}
                        onClick={() => handleDeleteCategory(category.id)}
                      >
                        <span className="px-3 py-1 font-semibold rounded-md dark:bg-purple-400 dark:text-gray-900">
                          <span>Delete</span>
                        </span>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Categories;
