import { useState } from "react";
import axios from "axios";

const Register = () => {
  const BASE_URL = "http://localhost:3000";
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Staff");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const res = await axios.post(
        `${BASE_URL}/register`,
        {
          username,
          email,
          role,
          password,
          phoneNumber,
          address,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex justify-center mb-6">
      <div className="w-full  max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form
          novalidate=""
          action=""
          className="space-y-6"
          onSubmit={handleRegister}
        >
          <div className="space-y-1 text-sm">
            <label for="username" className="flex dark:text-gray-400">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="email" className="flex dark:text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
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
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="role" className="flex dark:text-gray-400">
              Role
            </label>
            <input
              type="text"
              name="role"
              id="role"
              placeholder="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="phoneNumber" className="flex dark:text-gray-400">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="address" className="flex dark:text-gray-400">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Phone Number"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
