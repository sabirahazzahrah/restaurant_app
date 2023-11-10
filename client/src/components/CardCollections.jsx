import { useState, useEffect } from "react";
import CardCuisine from "./CardCuisine";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import axios from "axios";

const CardCollections = () => {
  const BASE_URL = "http://localhost:3000";
  const [cuisines, setCuisines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${BASE_URL}/public/cuisines`);
      //   console.log(data.data);
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

  const navigate = useNavigate();

  const onClick = (id) => {
    navigate(`/detail/${id}`);
  };

  if (loading) return <Loading />;
  if (error) return <p>error fetching data</p>;

  //   return JSON.stringify(cuisines);

  return (
    <>
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
        >
          <img
            src="https://th.bing.com/th/id/OIP.3fhf89ZZgmj5eEfcRmkV2wHaFQ?w=266&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              Nasi Kebuli
            </h3>
            <span className="text-xs dark:text-gray-400">
              February 19, 2021
            </span>
            <p>
              Nasi kebuli sendiri terkadang memiliki nama yang bermacam-macam.
              Misalnya untuk di Madinah, Arab Saudi, menu yang satu ini dikenal
              dengan nama Mathbakh Mandhi. Nasi ini dimasak dengan 16 jenis
              bumbu yang dicampur ke dalam nasi putih atau nasi kuning khas. Ke
              16 bumbu tersebut meliputi cengkeh, kapulaga, dan bunga japaron
            </p>
          </div>
        </a>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cuisines.map((el) => {
            return <CardCuisine perData={el} key={el.id} onClick={onClick} />;
          })}
        </div>
      </div>
    </>
  );
};

export default CardCollections;
