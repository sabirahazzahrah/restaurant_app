import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const BASE_URL = "https://phase2-aio.vercel.app";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // handle login, dapatin akses token dari sini
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/apis/login`, {
        email,
        password,
      });
      console.log(res.data.data.access_token);
      const token = res.data.data.access_token;
      //   console.log(token);
      localStorage.setItem("access_token", token);
      navigate("/cuisines");
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center mb-6">
      <div className="w-full  max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form
          novalidate=""
          action=""
          className="space-y-6"
          onSubmit={handleLogin}
        >
          <div className="space-y-1 text-sm">
            <label for="email" className="flex dark:text-gray-400">
              Email
            </label>
            <input
              type="text"
              value={email}
              name="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="password" className="flex dark:text-gray-400">
              Password
            </label>
            <input
              type="password"
              value={password}
              name="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <button
            type="submit"
            className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
