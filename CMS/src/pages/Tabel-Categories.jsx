import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Categories = () => {
  const BASE_URL = "http://localhost:3000";
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const { data } = await axios.get(`${BASE_URL}/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      //   console.log(data.data);
      setCategories(data.data);
      setCa;
    } catch (error) {
      console.log(error.message);
    } finally {
      setError(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
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
                      <span className="px-3 py-1 font-semibold rounded-md dark:bg-purple-400 dark:text-gray-900">
                        <span>Delete</span>
                      </span>
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
