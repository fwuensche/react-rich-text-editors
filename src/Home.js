import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import readme from "./README.md";

const Home = () => {
  let [content, setContent] = useState();

  useEffect(() => {
    fetch(readme)
      .then((res) => res.text())
      .then((content) => {
        setContent(content);
      });
  }, []);

  return <ReactMarkdown>{content}</ReactMarkdown>;
};

export default Home;
