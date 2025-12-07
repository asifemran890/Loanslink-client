import Home from "../pages/Home/Home";
import ErrorPage from "../pages/NavberAllPages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import { createBrowserRouter } from "react-router";
import LoanDetails from "../pages/NavberAllPages/LoanDetails";
import AboutUs from "../pages/NavberAllPages/AboutUs";
import Contact from "../pages/NavberAllPages/Contact";
import AllLoans from "../pages/NavberAllPages/AllLoans";
import Profile from "../pages/Dashboard/Common/Profile";
import MyLoans from "../pages/Dashboard/Common/MyLoans";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/loans",
        element: <AllLoans />,
      },
      {
        path: "/loans/:id",
        element: (
          <PrivateRoute>
            <LoanDetails />
          </PrivateRoute>
        ),
      },

      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/contact", element: <Contact /> },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/dashboard/my-loans",
        element: <MyLoans></MyLoans>,
      }
    ],
  },
]);
