import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../component/Navbar";
import { Link, useNavigate } from "react-router-dom";

const Cuisines = () => {
  const BASE_URL = "https://phase2-aio.vercel.app";
  const [cuisines, setCuisines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      //   setLoading(true);
      const token = localStorage.getItem("access_token");
      const { data } = await axios.get(
        `${BASE_URL}/apis/restaurant-app/cuisines`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(data.data);
      setCuisines(data.data);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEditClick = (id) => {
    navigate(`cuisines/${id}`);
  };

  const handleDeleteCuisine = async (id) => {
    try {
      const token = localStorage.getItem("access_token");
      const res = await axios.delete(
        `${BASE_URL}/apis/restaurant-app/cuisines/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchData();
      console.log("berhasil delete");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
      <Navbar />
      <h2 className="mb-4 text-2xl dark:text-black font-semibold leadi">
        List Of Cuisine
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          {/* <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-24" />
          </colgroup> */}
          <thead className="dark:bg-gray-700">
            <tr className="text-center">
              <th className="p-3">No</th>
              <th className="p-3">Name</th>
              <th className="p-3">Price</th>
              <th className="p-3">Description</th>
              <th className="p-3">Category</th>
              <th className="p-3">User</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {cuisines.map((cuisine) => {
              return (
                <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                  <td className="p-3">{cuisine.id}</td>
                  <td className="p-3">{cuisine.name}</td>
                  <td className="p-3">{cuisine.price}</td>
                  <td className="p-3">{cuisine.description}</td>
                  <td className="p-3">{cuisine.Category}</td>
                  <td className="p-3">{cuisine.User.username}</td>
                  <td>
                    <Link
                      to={`/cuisines/${cuisine.id}`}
                      onClick={() => handleEditClick(cuisine.id)}
                    >
                      <span className="px-3 py-1 font-semibold rounded-md dark:bg-purple-400 dark:text-gray-900">
                        <span>Edit</span>
                      </span>
                    </Link>
                    <Link
                      to={`/cuisines/delete/${cuisine.id}`}
                      onClick={() => handleDeleteCuisine(cuisine.id)}
                    >
                      <span className="px-3 py-1 font-semibold rounded-md dark:bg-purple-400 dark:text-gray-900">
                        <span>Delete</span>
                      </span>
                    </Link>
                    <Link to={`/img/${cuisine.id}`}>
                      <span className="px-3 py-1 font-semibold rounded-md dark:bg-purple-400 dark:text-gray-900">
                        <span>Update</span>
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
  );
};

export default Cuisines;
