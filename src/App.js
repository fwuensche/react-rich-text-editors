import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Lexical from "./components/lexical/Lexical";
import Quill from "./components/quill/Quill";

const router = createBrowserRouter([
  {
    path: "/react-rich-text-editors",
    element: <Home />,
  },
  {
    path: "/react-rich-text-editors/quill",
    element: <Quill />,
  },
  {
    path: "/react-rich-text-editors/lexical",
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
