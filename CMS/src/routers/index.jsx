import { createBrowserRouter, redirect } from "react-router-dom";
import Register from "../pages/Register";
import Cuisines from "../pages/Tabel-Cuisines";
import Categories from "../pages/Tabel-Categories";
import AddCuisine from "../pages/Add-Cuisine";
import AddCategory from "../pages/Add-Category";
import EditCuisine from "../pages/Edit-Cuisine";
import EditCategory from "../pages/Edit-Category";
import PatchImg from "../pages/Patch-ImgUrl";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    loader: () => {
      const token = localStorage.getItem("access_token");
      if (token) {
        return redirect("/cuisines");
      }
      return null;
    },
  },
  {
    loader: () => {
      const token = localStorage.getItem("access_token");
      if (!token) {
        return redirect("/");
      }
      return null;
    },
    children: [
      {
        path: "/cuisines",
        element: <Cuisines />,
      },
      {
        path: "/cuisines/add",
        element: <AddCuisine />,
      },
      {
        path: "/cuisines/delete/:id",
        element: <Cuisines />,
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
      {
        path: "/categories/delete/:id",
        element: <Categories />,
      },
      {
        path: "/categories/:id",
        element: <EditCategory />,
      },
      {
        path: "/add-user",
        element: <Register />,
      },
      {
        path: "/img/:id",
        element: <PatchImg />,
      },
    ],
  },
]);

export default router;
