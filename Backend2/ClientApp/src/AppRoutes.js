import { Home } from "./components/Home";
import { AdminDashboard } from "./components/pages/AdminDashboard";
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
        path: "/schedules",
        element: <Schedules />
    },

    path: "/users",
    element: <AdminDashboard />
  }

];

export default AppRoutes;
