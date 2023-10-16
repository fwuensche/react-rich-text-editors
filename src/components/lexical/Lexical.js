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
import { TablePlugin } from '@lexical/react/LexicalTablePlugin'
import { useState } from 'react'
import TableCellResizerPlugin from './plugins/TableCellResizer'
import TableCellActionMenuPlugin from './plugins/TableCellActionMenuPlugin'
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table'
import { DropdownNode } from './nodes/DropdownNode'

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
    table: 'PlaygroundEditorTheme__table',
    tableCell: 'PlaygroundEditorTheme__tableCell',
    tableCellHeader: 'PlaygroundEditorTheme__tableCellHeader',
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
    TableNode,
    TableCellNode,
    TableRowNode,
    DropdownNode,
  ],
}

const Lexical = () => {
  const [floatingAnchorElem, setFloatingAnchorElem] = useState(null)

  const onRef = (_floatingAnchorElem) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem)
    }
  }

  return (
    <div className="flex flex-col">
      <LexicalComposer initialConfig={editorConfig}>
        <div className="editor-container">
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
          <ListPlugin />
          <EmojisPlugin />
          <ToolbarPlugin />
          <VariablesPlugin />
          <RichTextPlugin
            contentEditable={
              <div className="editor-scroller">
                <div className="editor" ref={onRef}>
                  <ContentEditable className="editor-input" />
                </div>
              </div>
            }
            placeholder={<Placeholder />}
          />
          <TablePlugin />
          <TableCellResizerPlugin />
          <InitialContentFromHtmlPlugin initialContent={INITIAL_CONTENT} />
          <HistoryPlugin />
          {floatingAnchorElem && <TableCellActionMenuPlugin anchorElem={floatingAnchorElem} cellMerge={true} />}
        </div>
      </LexicalComposer>
      <ShowSourceButton editor="lexical" />
    </div>
  )
}

export default Lexical
