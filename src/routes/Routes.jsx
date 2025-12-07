import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import Profile from "../pages/Dashboard/Common/Profile";
import Statistics from "../pages/Dashboard/Common/Statistics";
import MainLayout from "../layouts/MainLayout";
import MyInventory from "../pages/Dashboard/Seller/MyInventory";
import ManageOrders from "../pages/Dashboard/Seller/PendingApplications";
import MyOrders from "../pages/Dashboard/Customer/MyOrders";
import { createBrowserRouter } from "react-router";
import AddLoan from "../pages/Dashboard/Seller/AddLoan";
import AllLoans from "../pages/AllLoans";
import LoanDetails from "../pages/LoanDetails";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";

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
        index: true,
        element: (
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        ),
      },
      {
        path: "add-loan",
        element: (
          <PrivateRoute>
            <AddLoan></AddLoan>
          </PrivateRoute>
        ),
      },
      {
        path: "my-loans",
        element: (
          <PrivateRoute>
            <MyInventory />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-loans",
        element: (
          <PrivateRoute>
            <ManageUsers />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "my-orders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "pending-applications",
        element: <ManageOrders />,
      },
    ],
  },
]);
