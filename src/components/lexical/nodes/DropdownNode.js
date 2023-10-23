import { DecoratorNode } from 'lexical'

export class DropdownNode extends DecoratorNode {
  static getType() {
    return 'dropdown-node'
  }

  static clone(node) {
    return new DropdownNode(node.__options, node.__key)
  }

  constructor(options, key) {
    super(key)
    this.__options = options
  }

  createDOM(config) {
    const options = this.__options
    const div = document.createElement('div')
    div.style.display = 'contents'
    div.innerHTML = this.generateSelector(options)
    return div
  }

  generateSelector(options) {
    return `<select name="pets" id="pet-select">
    <option value="">--Please choose an option--</option>
    ${options.map((option) => `<option value="">${option}</option>`)}
    </select>`
  }

  updateDOM() {
    return false
  }

  /**
   * @returns {import('lexical').DOMExportOutput}
   */
  exportDOM() {
    const element = document.createElement('span')
    element.textContent = '{{dropdown:' + this.__options.join('|') + '}}'
    return {
      element,
    }
  }

  /**
   * @returns {import('lexical').SerializedLexicalNode}
   */
  exportJSON() {
    return {
      type: 'dropdown-node',
      version: 1,
    }
  }


  decorate(editor) {
    return undefined
  }
}

export function $createDropdownNode(options) {
  return new DropdownNode(options)
}

export function $isDropdownNode(node) {
  return node instanceof DropdownNode
}
