import { createBrowserRouter } from "react-router-dom";
import Register from "../layout/Register";
import Login from "../layout/Login";
import Career from "../layout/Career";
import About from "../layout/About";
import Home from "./Home";
import Main from "./Main";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/career',
        element: <Career />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
])

export default routes;