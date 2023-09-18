import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { INITIAL_CONTENT } from "../../shared";

const Quill = () => {
  const [value, setValue] = useState(INITIAL_CONTENT);

  console.log(value);

  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
};

export default Quill;
