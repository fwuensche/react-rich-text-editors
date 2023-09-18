import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import "./styles.css";
import InitialContentPlugin from "./plugins/InitialContentPlugin";
import { INITIAL_CONTENT } from "../../shared";
import { HeadingNode } from "@lexical/rich-text";
import { ListNode, ListItemNode } from "@lexical/list";
import ShowSourceButton from "../ShowSourceButton";

function Placeholder() {
  return <div className="editor-placeholder">Enter some rich text...</div>;
}

const editorConfig = {
  theme: {
    placeholder: "editor-placeholder",
    paragraph: "editor-paragraph",
  },
  onError(error) {
    throw error;
  },
  nodes: [ListNode, ListItemNode, HeadingNode],
};

const Lexical = () => {
  return (
    <div className="flex flex-col">
      <LexicalComposer initialConfig={editorConfig}>
        <div className="editor-container">
          <InitialContentPlugin initialContent={INITIAL_CONTENT} />
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<Placeholder />}
          />
          <HistoryPlugin />
        </div>
      </LexicalComposer>
      <ShowSourceButton editor="lexical" />
    </div>
  );
};

export default Lexical;
