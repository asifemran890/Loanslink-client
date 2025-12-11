import Home from "../pages/Home/Home";
import ErrorPage from "../pages/NavberAllPages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import { createBrowserRouter } from "react-router";
import LoanDetails from "../pages/Dashboard/Common/LoanDetails";
import AboutUs from "../pages/NavberAllPages/AboutUs";
import Contact from "../pages/NavberAllPages/Contact";
import AllLoans from "../pages/NavberAllPages/AllLoans";
import Profile from "../pages/Dashboard/Common/Profile";
import MyLoans from "../pages/Dashboard/Common/MyLoans";
import LoanApplications from "../pages/Dashboard/Common/LoanApplications";
import AllLoan from "../pages/Dashboard/Common/AllLoan";
import ManageUsers from "../pages/Dashboard/Common/ManageUsers";
import ManageLoans from "../pages/Dashboard/Common/ManageLoans";
import AddLoan from "../pages/Dashboard/Common/AddLoan";
import PendingApplications from "../pages/Dashboard/Common/PendingApplications";
import ApprovedLoans from "../pages/Dashboard/Common/ApprovedLoans";

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
      },
      {
        path: "/dashboard/loan-applications",
        element: <LoanApplications></LoanApplications>,
      },
      {
        path: "/dashboard/all-loans",
        element: <AllLoan />,
      },
      {
        path: "/dashboard/loans/:id",
        element: (
          <PrivateRoute>
            <LoanDetails />
          </PrivateRoute>
        ),
      },
      { path: "/dashboard/manage-users", element: <ManageUsers /> },
      { path: "/dashboard/manage-loans", element: <ManageLoans /> },
      { path: "/dashboard/add-loan", element: <AddLoan /> },
      {
        path: "/dashboard/pending-applications",
        element: <PendingApplications />,
      },
      {
        path: "/dashboard/approved-loans",
        element: <ApprovedLoans></ApprovedLoans>,
      },
    ],
  },
]);
