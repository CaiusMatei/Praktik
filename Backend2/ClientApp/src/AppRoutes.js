import { Home } from "./components/Home";
import { AdminDashboard } from "./components/pages/AdminDashboard";
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
    path: "/users",
    element: <AdminDashboard />
  }
];

export default AppRoutes;
