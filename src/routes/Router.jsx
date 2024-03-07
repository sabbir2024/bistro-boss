import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Error from "../components/error/Error";
import Menu from "../pages/menu/menu/Menu";
import Order from "../pages/order/order/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: 'order/:categorys',
        element: <Order />
      }
    ]
  },
]);

export default router;