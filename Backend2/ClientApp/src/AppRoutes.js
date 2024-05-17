import { Home } from "./components/Home";
import { Dashboard } from "./components/pages/Dashboard";
import { Login } from "./components/pages/Login";
import Schedules from "./components/Schedules";
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
    },
    {
        path: "/schedules",
        element: <Schedules />
    }
];

export default AppRoutes;
