import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const BASE_URL = "https://phase2-aio.vercel.app";
  const [cuisines, setCuisines] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDetailCuisine = async () => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/apis/pub/restaurant-app/cuisines/${id}`
      );
      console.log(data.data);
      setCuisines(data.data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetailCuisine(id);
  }, []);

  if (loading) return <Loading />;

  if (error) return <p>error fetching data</p>;

  return (
    <>
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
          <img
            src={cuisines.imgUrl}
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline">
              {cuisines.name}
            </h3>
            <h5 className="text-2xl font-semibold sm:text-4xl group-hover:underline">
              Price : {cuisines.price}
            </h5>
            <span className="text-xs dark:text-gray-400">
              {cuisines.createdAt.split("T")[0]}
            </span>
            <p>{cuisines.description}</p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Detail;
