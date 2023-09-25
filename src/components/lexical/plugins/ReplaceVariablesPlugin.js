import { useEffect } from "react";
import { TextNode } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

function injectVariableContent(node) {
  const textContent = node.getTextContent();

  if (textContent.includes("{{patient_name}}")) {
    node.setTextContent(textContent.replace("{{patient_name}}", "John Doe"));
  }
}

function useEmoticons(editor) {
  useEffect(() => {
    const removeTransform = editor.registerNodeTransform(
      TextNode,
      injectVariableContent
    );

    return () => {
      removeTransform();
    };
  }, [editor]);
}

const ReplaceVariablesPlugin = () => {
  const [editor] = useLexicalComposerContext();

  useEmoticons(editor);

  return null;
};

export default ReplaceVariablesPlugin;
