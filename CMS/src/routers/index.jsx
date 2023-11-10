import { createBrowserRouter } from "react-router-dom";
import Login from "../component/login";
import Register from "../component/Register";
import Cuisines from "../pages/Tabel-Cuisines";
import Categories from "../pages/Tabel-Categories";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cuisines",
    element: <Cuisines />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
]);

export default router;
