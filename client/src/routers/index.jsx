import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/home";
import DetailPage from "../pages/detail-cuisine";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/detail/:id",
    element: <DetailPage />,
  },
]);

export default router;
