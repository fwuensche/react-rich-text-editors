import { TextNode } from 'lexical'

export class InlineVariableNode extends TextNode {
  static getType() {
    return 'inline-variable'
  }

  static clone(node) {
    return new InlineVariableNode(node.__text, node.__key)
  }

  createDOM(config) {
    const dom = document.createElement('span')
    const inner = super.createDOM(config)
    dom.className = this.__className
    inner.className = 'editor-inline-variable'
    dom.appendChild(inner)
    return dom
  }

  updateDOM(prevNode, dom, config) {
    const inner = dom.firstChild
    if (inner === null) {
      return true
    }
    super.updateDOM(prevNode, inner, config)
    return false
  }
}

export function $isInlineVariableNode(node) {
  return node instanceof InlineVariableNode
}

export function $createInlineVariableNode(text) {
  // TODO: understand what is the purpose of the mode
  // mode
  //    token - acts as immutable node, can't change its content and is deleted all at once
  //    segmented - its content deleted by segments (one word at a time), it is editable although node becomes non-segmented once its content is updated
  return new InlineVariableNode(text).setMode('token')
}
