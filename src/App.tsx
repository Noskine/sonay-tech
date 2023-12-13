import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Loading } from "./pages/Loading";
import { AboutMe } from "./pages/AboutMe";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-me",
    element: <AboutMe />,
  }
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<Loading />}  />;
}
