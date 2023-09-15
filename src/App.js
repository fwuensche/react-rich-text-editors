import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const README =
  "https://raw.githubusercontent.com/fwuensche/react-rich-text-editors/master/README.md";

function App() {
  let [content, setContent] = useState();

  useEffect(() => {
    fetch(README)
      .then((res) => res.text())
      .then((content) => {
        setContent(content);
      });
  }, []);

  return (
    <div className="container">
      <Navbar />
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default App;
