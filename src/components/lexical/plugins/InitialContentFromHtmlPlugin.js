import { $getRoot, $insertNodes } from "lexical";
import { useEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $generateNodesFromDOM } from "@lexical/html";

const InitialContentFromHtmlPlugin = ({ initialContent }) => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (!initialContent) return;

    editor.update(() => {
      const root = $getRoot();
      if (root.getTextContent() !== "") return;

      const parser = new DOMParser();
      const dom = parser.parseFromString(initialContent, "text/html");
      const nodes = $generateNodesFromDOM(editor, dom);

      $getRoot().select();
      $insertNodes(nodes);
    });
  }, [editor, initialContent]);

  return null;
};

export default InitialContentFromHtmlPlugin;
