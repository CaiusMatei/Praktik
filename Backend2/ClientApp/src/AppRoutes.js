import { Home } from "./components/Home";
import { Dashboard } from "./components/pages/Dashboard";
import { Login } from "./components/pages/Login";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
];

export default AppRoutes;
