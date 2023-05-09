import { Grid } from '@mui/material'
import React, { useMemo, useRef } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
import axiosInstance from 'src/axios/axiosInstance'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// import { ImageUpload } from 'services/image/ImageUpload'
// import { ErrorToast } from 'utils'
const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill')
    // eslint-disable-next-line react/display-name, newline-before-return
    return ({ forwardedRef, ...props }) => <RQ ref={forwardedRef} {...props} />
  },
  { ssr: false }
)

export default function Editor({ id, label, contentType, setContentType }) {
  const quillRef = useRef()

  const imageHandler = e => {
    event.preventDefault()

    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.click()
    input.onchange = async function () {
      console.log(this)
      const file = input.files[0]
      console.log('User trying to uplaod this:', file)
      try {
        const formData = new FormData()
        formData.append('fileNames', file)

        const response = await axiosInstance.post('/fileUpload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })

        const id = response.data.data[0].fileNames

        const quill = quillRef?.current?.getEditor()

        const range = quill?.getSelection()
        const ROOT_URL = 'http://localhost:3000'
        const link = `${ROOT_URL}/${id}`

        // this part the image is inserted
        // by 'image' option below, you just have to put src(link) of img here.
        quill?.insertEmbed(range.index, 'image', link)
      } catch (error) {
        console.log(error)
      }
    } // react thing
  }

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
          ['image', 'link'],
          [
            {
              color: [
                '#000000',
                '#e60000',
                '#ff9900',
                '#ffff00',
                '#008a00',
                '#0066cc',
                '#9933ff',
                '#ffffff',
                '#facccc',
                '#ffebcc',
                '#ffffcc',
                '#cce8cc',
                '#cce0f5',
                '#ebd6ff',
                '#bbbbbb',
                '#f06666',
                '#ffc266',
                '#ffff66',
                '#66b966',
                '#66a3e0',
                '#c285ff',
                '#888888',
                '#a10000',
                '#b26b00',
                '#b2b200',
                '#006100',
                '#0047b2',
                '#6b24b2',
                '#444444',
                '#5c0000',
                '#663d00',
                '#666600',
                '#003700',
                '#002966',
                '#3d1466'
              ]
            }
          ]
        ],
        handlers: {
          image: imageHandler
        }
      }
    }),
    []
  )

  return (
    <>
      <Grid container>
        <Grid item md={9} xs={12}>
          <ReactQuill
            theme='snow'
            forwardedRef={quillRef}
            value={contentType}
            modules={modules}
            onChange={setContentType}
          />
        </Grid>
      </Grid>
    </>
  )
}
