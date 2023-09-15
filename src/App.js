import Navbar from "./Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Lexical from "./Lexical";
import Quill from "./Quill";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/quill",
    element: <Quill />,
  },
  {
    path: "/lexical",
    element: <Lexical />,
  },
]);

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
