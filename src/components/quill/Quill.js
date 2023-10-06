import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { INITIAL_CONTENT } from '../../shared'
import ShowSourceButton from '../ShowSourceButton'

const Quill = () => {
  const [value, setValue] = useState(INITIAL_CONTENT)

  return (
    <div className="flex flex-col">
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      <ShowSourceButton editor="quill" />
    </div>
  )
}

export default Quill
