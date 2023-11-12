import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddCuisine = () => {
  const BASE_URL = "https://phase2-aio.vercel.app";
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [imgUrl, setImgUrl] = useState("");
  const [stock, setStock] = useState("");
  const [CategoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, Loading] = useState(true);
  const [error, setError] = useState(null);
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

  const onChangeInputName = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };
  const onChangeInputDescription = (event) => {
    console.log(event.target.value);
    setDescription(event.target.value);
  };
  const onChangeInputPrice = (event) => {
    console.log(event.target.value);
    setPrice(parseFloat(event.target.value));
  };
  const onChangeInputImgUrl = (event) => {
    console.log(event.target.value);
    setImgUrl(event.target.value);
  };
  const onChangeInputStock = (event) => {
    console.log(event.target.value);
    setStock(event.target.value);
  };
  const onChangeInputCategoryId = (event) => {
    console.log(event.target.value);
    setCategoryId(event.target.value);
  };

  console.log(name + "ini name", description, price, imgUrl, stock, CategoryId);

  const handleAddCuisine = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("access_token");
      console.log(token, "ini");
      const data = await axios.post(
        `${BASE_URL}/apis/restaurant-app/cuisines`,
        {
          name,
          description,
          price,
          imgUrl,
          stock,
          categoryId: CategoryId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(data, "inii");
      navigate("/cuisines");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
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
      <form onSubmit={handleAddCuisine}>
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
            onChange={onChangeInputName}
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
            onChange={onChangeInputDescription}
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
            onChange={onChangeInputPrice}
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
            onChange={onChangeInputImgUrl}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div class="mb-6">
          <label
            for="base-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Stock
          </label>
          <input
            type="text"
            id="stock"
            name="stock"
            placeholder="stock"
            onChange={onChangeInputStock}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Add Cuisine
        </button>
      </form>
    </div>
  );
};

export default AddCuisine;
