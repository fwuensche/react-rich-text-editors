import { TextNode } from 'lexical'

export class BlockVariableNode extends TextNode {
  static getType() {
    return 'block-variable'
  }

  static clone(node) {
    return new BlockVariableNode(node.__text, node.__key)
  }

  createDOM(config) {
    const dom = document.createElement('div')
    const inner = super.createDOM(config)
    dom.className = 'editor-block-variable'
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

export function $isBlockVariableNode(node) {
  return node instanceof BlockVariableNode
}

export function $createBlockVariableNode(text) {
  // TODO: understand what is the purpose of the mode
  return new BlockVariableNode(text).setMode('token')
}
