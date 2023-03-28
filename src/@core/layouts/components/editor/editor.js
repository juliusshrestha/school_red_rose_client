import { useState } from 'react'
import dynamic from 'next/dynamic'
import React from 'react'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import Modal from '@material-ui/core/Modal'

import Button from '@material-ui/core/Button'

import '../../../../../node_modules/react-quill/dist/quill.snow.css'

class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editorHtml: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(html) {
    this.setState({ editorHtml: html })
  }

  apiPostNewsImage(file) {
    const formData = new FormData()
    formData.append('image', file)

    return fetch('/api/upload-image', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => data.url)
      .catch(error => {
        console.error(error)
      })

    // API post, returns image location as string e.g. 'http://www.example.com/images/foo.png'
  }

  imageHandler() {
    const input = document.createElement('input')

    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.click()

    input.onchange = async () => {
      const file = input.files[0]
      const formData = new FormData()

      formData.append('image', file)

      // Save current cursor state
      const range = this.quill.getSelection(true)

      // Insert temporary loading placeholder image
      this.quill.insertEmbed(range.index, 'image', `${window.location.origin}/images/loaders/placeholder.gif`)

      // Move cursor to right side of image (easier to continue typing)
      this.quill.setSelection(range.index + 1)

      const res = await apiPostNewsImage(file) // API post, returns image location as string e.g. 'http://www.example.com/images/foo.png'

      // Remove placeholder image
      this.quill.deleteText(range.index, 1)

      // Insert uploaded image
      // this.quill.insertEmbed(range.index, 'image', res.body.image);
      this.quill.insertEmbed(range.index, 'image', file)
    }
  }

  render() {
    return (
      <div className='text-editor'>
        <ReactQuill
          ref={el => {
            this.quill = el
          }}
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
          modules={{
            toolbar: {
              container: [
                [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
                [{ size: [] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link', 'video'],
                ['link', 'image', 'video'],
                ['clean'],
                ['code-block']
              ],
              handlers: {
                image: this.imageHandler
              }
            }
          }}
        />
      </div>
    )
  }
}

export default Editor
