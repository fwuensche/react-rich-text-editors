import { useEffect } from 'react'
import { TextNode } from 'lexical'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'

function injectVariableContent(node) {
  const textContent = node.getTextContent()

  if (textContent.includes('{{medical_history}}')) {
    node.setTextContent(textContent.replace('{{medical_history}}', '\n- Cancer\n- Diabetes\n- Heart disease\n'))
  }

  if (textContent.includes('{{patient_name}}')) {
    node.setTextContent(textContent.replace('{{patient_name}}', 'John Doe'))
  }

  if (textContent.includes('{{patient_name}}')) {
    node.setTextContent(textContent.replace('{{patient_name}}', 'John Doe'))
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
