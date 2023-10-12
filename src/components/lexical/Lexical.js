import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import InitialContentFromHtmlPlugin from './plugins/InitialContentFromHtmlPlugin'
import { INITIAL_CONTENT } from '../../shared'
import { ListNode, ListItemNode } from '@lexical/list'
import { CodeNode, CodeHighlightNode } from '@lexical/code'
import ShowSourceButton from '../ShowSourceButton'
import ToolbarPlugin from './plugins/ToolbarPlugin'
import VariablesPlugin from './plugins/VariablesPlugin'
import { BlockVariableNode } from './nodes/BlockVariableNode'
import { InlineVariableNode } from './nodes/InlineVariableNode'
import { EmojiNode } from './nodes/EmojiNode'
import './styles.css'
import EmojisPlugin from './plugins/EmojisPlugin'
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin'
import { TRANSFORMERS } from '@lexical/markdown'
import { HeadingNode, QuoteNode } from '@lexical/rich-text'
import { LinkNode } from '@lexical/link'

const Placeholder = () => <div className="editor-placeholder">Enter some rich text...</div>

const editorConfig = {
  theme: {
    placeholder: 'editor-placeholder',
    paragraph: 'editor-paragraph',
    code: 'editor-code',
    text: {
      bold: 'editor-text-bold',
      italic: 'editor-text-italic',
      overflowed: 'editor-text-overflowed',
      hashtag: 'editor-text-hashtag',
      underline: 'editor-text-underline',
      strikethrough: 'editor-text-strikethrough',
      underlineStrikethrough: 'editor-text-underlineStrikethrough',
      code: 'editor-text-code',
    },
  },
  onError(error) {
    throw error
  },
  nodes: [
    QuoteNode,
    LinkNode,
    ListNode,
    ListItemNode,
    HeadingNode,
    CodeNode,
    CodeHighlightNode,
    BlockVariableNode,
    InlineVariableNode,
    EmojiNode,
  ],
}

const Lexical = () => {
  return (
    <div className="flex flex-col">
      <LexicalComposer initialConfig={editorConfig}>
        <div className="editor-container">
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
          <ListPlugin />
          <EmojisPlugin />
          <ToolbarPlugin />
          <VariablesPlugin />
          <InitialContentFromHtmlPlugin initialContent={INITIAL_CONTENT} />
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<Placeholder />}
          />
          <HistoryPlugin />
        </div>
      </LexicalComposer>
      <ShowSourceButton editor="lexical" />
    </div>
  )
}

export default Lexical
