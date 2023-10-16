import { useEffect } from 'react'
import { TextNode } from 'lexical'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { $createDropdownNode } from '../nodes/DropdownNode'

const DROPDOWN_REGEX = /\{\{dropdown:.*\}\}/

function injectVariableContent(node) {
  const textContent = node.getTextContent()

  if (textContent.includes('{{medical_history}}')) {
    node.setTextContent(textContent.replace('{{medical_history}}', '- Cancer\n- Diabetes\n- Heart disease\n'))
  }

  if (textContent.includes('{{patient_name}}')) {
    node.setTextContent(textContent.replace('{{patient_name}}', 'John Doe'))
  }

  if (textContent.includes('{{practitioner_name}}')) {
    node.setTextContent(textContent.replace('{{practitioner_name}}', 'Dr. House'))
  }
  const match = textContent.match(DROPDOWN_REGEX)
  if (match) {
    const options = textContent.match(DROPDOWN_REGEX)[0].replace('{{dropdown:', '').replace('}}', '').split('|')
    const dropdownNode = $createDropdownNode(options)
    const textNodes = node.splitText(match.index)

    const lastNode = textNodes[textNodes.length - 1]
    lastNode.insertBefore(dropdownNode)
    lastNode.setTextContent(lastNode.getTextContent().replace(DROPDOWN_REGEX, ''))
  }
}

const VariablesPlugin = () => {
  const [editor] = useLexicalComposerContext()

  useEffect(() => {
    const removeTransform = editor.registerNodeTransform(TextNode, injectVariableContent)

    return () => {
      removeTransform()
    }
  }, [editor])

  return null
}

export default VariablesPlugin
