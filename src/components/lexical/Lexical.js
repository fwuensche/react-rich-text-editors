import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import "./styles.css";
import InitialContentPlugin from "./plugins/InitialContentPlugin";
import { INITIAL_CONTENT } from "../../shared";
import { HeadingNode } from "@lexical/rich-text";
import { ListNode, ListItemNode } from "@lexical/list";

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
    <>
      <p>Coming next:</p>
      <ul>
        <li>remove the blank paragraph at the top of content below</li>
        <li>add support to code blocks</li>
      </ul>
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
    </>
  );
};

export default Lexical;
