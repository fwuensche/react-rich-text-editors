import { $createParagraphNode, $getRoot } from "lexical";
import { useEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $generateNodesFromDOM } from "@lexical/html";

const InitialContentPlugin = ({ initialContent }) => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (!initialContent) {
      return;
    }

    editor.update(() => {
      console.log($getRoot());
      console.log();
      const root = $getRoot();

      // TODO: we should use something more robust than checking for an empty string as the text content.
      // We'd rather check if the root node has any children, but at the time of this writing, it has a paragraph node.
      if (root.getTextContent() === "") {
        const parser = new DOMParser();
        const dom = parser.parseFromString(initialContent, "text/html");
        const nodes = $generateNodesFromDOM(editor, dom);

        const paragraphNode = $createParagraphNode();
        nodes.forEach((n) => paragraphNode.append(n));

        $getRoot().append(paragraphNode);
      }
    });
  }, [editor, initialContent]);

  return null;
};

export default InitialContentPlugin;
