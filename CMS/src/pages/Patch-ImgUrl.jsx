import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Button from "../component/button";

const PatchImg = () => {
  const BASE_URL = "https://phase2-aio.vercel.app";
  const { id } = useParams();
  const [inputFile, setInputFile] = useState(null);
  const navigate = useNavigate();

  const onChangeFile = (event) => {
    setInputFile(event.target.files[0]);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("access_token");
      let formData = new FormData();
      formData.append("imgUrl", inputFile);
      const response = await axios.patch(
        `${BASE_URL}/apis/restaurant-app/cuisines/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate("/cuisines");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md"
      onSubmit={handleOnSubmit}
    >
      <input
        type="file"
        onChange={onChangeFile}
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <Button
        type="submit"
        className=" dark:text-gray-900 dark:bg-violet-400 p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        label="submit"
      />
    </form>
  );
};

export default PatchImg;
