import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const MainLayout = () => {
  return (
    <>
      <Helmet>
        <html className="m-0 p-0" />
        <body className="m-0 h-[100vh] p-0" />
      </Helmet>
      <Outlet />
    </>
  );
};
