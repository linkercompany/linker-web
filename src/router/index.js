import { Navigate, useRoutes } from "react-router-dom";

import { MainLayout } from "../layouts";
import {
  FormCreateEdit,
  FormResponses,
  FormSubmit,
  Forms,
  Home,
  Login,
} from "../pages";

export const Router = () => {
  return useRoutes([
    {
      path: "",
      element: <MainLayout />,
      children: [{ path: "", element: <Home /> }],
    },
  ]);
};
