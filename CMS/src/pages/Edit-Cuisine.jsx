import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditCuisine = () => {
  const BASE_URL = "https://phase2-aio.vercel.app";
  const { id } = useParams();
  const [cuisines, setCuisines] = useState({});
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [CategoryId, setCategoryId] = useState();
  const [AuthorId, setAuthorId] = useState("");
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const fetchCategories = async () => {
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
      console.log(data);
      setCategories(data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchCuisines = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const { data } = await axios.get(
        `${BASE_URL}/apis/restaurant-app/cuisines/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data, "iniii cate");
      setCuisines(data.data);
      setName(data.data.name);
      setDescription(data.data.description);
      setPrice(data.data.price);
      setImgUrl(data.data.imgUrl);
      setCategoryId(data.data.categoryId);

      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchCuisines();
    fetchCategories();
  }, []);

  const handleEdit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("access_token");
      let data = await axios.put(
        `${BASE_URL}/apis/restaurant-app/cuisines/${id}`,
        {
          name,
          description,
          price,
          imgUrl,
          categoryId: CategoryId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data);
      navigate("/cuisines");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div classNameName="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <form action="" onSubmit={handleEdit}>
        <div className="mb-6">
          <label
            for="base-input"
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
        <div className="mb-6">
          <label
            for="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            for="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            for="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            imgUrl
          </label>
          <input
            type="text"
            id="imgUrl"
            name="imgUrl"
            placeholder="ImgUrl"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            for="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Category
          </label>
          <select
            id="CategoryId"
            name="CategoryId"
            value={CategoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {console.log(category.id)}
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          classNameName=" dark:text-gray-900 dark:bg-violet-400 p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Edit Cuisine
        </button>
      </form>
    </div>
  );
};

export default EditCuisine;
