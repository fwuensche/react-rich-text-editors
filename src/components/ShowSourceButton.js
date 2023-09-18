const ShowSourceButton = ({ editor }) => {
  if (!["quill", "lexical"].includes(editor))
    throw new Error(`Invalid editor: ${editor}`);

  return (
    <a
      className="btn-light mt-3"
      target="_blank"
      rel="noreferrer"
      href={`https://github.com/fwuensche/react-rich-text-editors/blob/master/src/components/${editor}`}
    >
      View source ↗
    </a>
  );
};

export default ShowSourceButton;
