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
    div.innerHTML = `<select name="pets" id="pet-select">
    <option value="">--Please choose an option--</option>
    ${options.map((option) => `<option value="">${option}</option>`)}
    </select>`
    return div
  }

  updateDOM() {
    return false
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
