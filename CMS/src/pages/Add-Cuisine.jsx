import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddCuisine = () => {
  const BASE_URL = "http://localhost:3000";
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [CategoryId, setCategoryId] = useState("");
  const [AuthorId, setAuthorId] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, Loading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  // console.log(name, "<<<name");
  // console.log(description, "<<<description");
  // console.log(price, "<<<price");
  // console.log(imgUrl, "<<<imgUrl");
  // console.log(CategoryId, "<<<CategoryID");
  // console.log(AuthorId, "<<<<authorID");
  // console.log(categories);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const { data } = await axios.get(`${BASE_URL}/categories`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(data, 34);
        setCategories(data.data);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  const handleAddCuisine = async (event) => {
    event.preventDefault();
    console.log(event.target.value);
    try {
      const token = localStorage.getItem("access_token");
      const data = await axios.post(
        `${BASE_URL}/cuisines`,
        {
          name,
          description,
          price,
          imgUrl,
          CategoryId,
          AuthorId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("berhasil namabhi");
      navigate("/cuisines");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    // <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
    //   <h2 className="text-2xl font-bold mb-4">Add Product</h2>
    //   <form onSubmit={AddCuisine}>
    //     <div className="mb-4">
    //       <label
    //         htmlFor="productName"
    //         className="block text-sm font-medium text-gray-600"
    //       >
    //         Product Name:
    //       </label>
    //       <input
    //         type="text"
    //         id="productName"
    //         value={name}
    //         onChange={(e) => setName(e.target.value)}
    //         className="mt-1 p-2 w-full border rounded-md"
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label
    //         htmlFor="description"
    //         className="block text-sm font-medium text-gray-600"
    //       >
    //         Description:
    //       </label>
    //       <textarea
    //         id="description"
    //         value={description}
    //         onChange={(e) => setDescription(e.target.value)}
    //         className="mt-1 p-2 w-full border rounded-md"
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label
    //         htmlFor="price"
    //         className="block text-sm font-medium text-gray-600"
    //       >
    //         Price:
    //       </label>
    //       <input
    //         type="text"
    //         id="price"
    //         value={price}
    //         onChange={(e) => setPrice(e.target.value)}
    //         className="mt-1 p-2 w-full border rounded-md"
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label
    //         htmlFor="imgUrl"
    //         className="block text-sm font-medium text-gray-600"
    //       >
    //         Image URL:
    //       </label>
    //       <input
    //         type="text"
    //         id="imgUrl"
    //         value={imgUrl}
    //         onChange={(e) => setImgUrl(e.target.value)}
    //         className="mt-1 p-2 w-full border rounded-md"
    //       />
    //     </div>
    //     <button
    //       type="submit"
    //       className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
    //     >
    //       Add Product
    //     </button>
    //   </form>
    // </div>
    // yg ini yg diapke yaa
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <form action="" onSubmit={handleAddCuisine}>
        <div class="mb-6">
          <label
            for="base-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
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
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div class="mb-6">
          <label
            for="base-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
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
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div class="mb-6">
          <label
            for="base-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div class="mb-6">
          <label
            for="base-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
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
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div class="mb-6">
          <label
            for="base-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Category
          </label>
          <input
            type="number"
            id="price"
            name="CategoryId"
            placeholder="CategoryId"
            value={CategoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div class="mb-6">
          <label
            for="base-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            User
          </label>
          <input
            type="number"
            id="AuthorId"
            name="AuthorId"
            placeholder="AuthorId"
            value={AuthorId}
            onChange={(e) => setAuthorId(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Add Cuisine
        </button>
      </form>
    </div>
  );
};

export default AddCuisine;
