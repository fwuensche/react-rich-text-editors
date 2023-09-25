import { useEffect } from 'react'
import { TextNode } from 'lexical'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'

function injectVariableContent(node) {
  const textContent = node.getTextContent()

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
