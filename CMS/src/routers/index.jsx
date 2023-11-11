import { createBrowserRouter } from "react-router-dom";
import Login from "../component/login";
import Register from "../component/Register";
import Cuisines from "../pages/Tabel-Cuisines";
import Categories from "../pages/Tabel-Categories";
import AddCuisine from "../pages/Add-Cuisine";
import AddCategory from "../pages/Add-Category";
import EditCuisine from "../pages/Edit-Cuisine";

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
    path: "/cuisines/add",
    element: <AddCuisine />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/categories/add",
    element: <AddCategory />,
  },
  {
    path: "/cuisines/:id",
    element: <EditCuisine />,
  },
]);

export default router;
