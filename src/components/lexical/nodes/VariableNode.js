import { TextNode } from 'lexical'

export class VariableNode extends TextNode {
  static getType() {
    return 'variable'
  }

  static clone(node) {
    return new VariableNode(node.__text, node.__key)
  }

  createDOM(config) {
    const dom = document.createElement('span')
    const inner = super.createDOM(config)
    dom.className = this.__className
    inner.className = 'editor-variable'
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

export function $isVariableNode(node) {
  return node instanceof VariableNode
}

export function $createVariableNode(text) {
  // TODO: understand what is the purpose of the mode
  return new VariableNode(text).setMode('token')
}
