import React, { useState } from 'react'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { message, Upload } from 'antd'
import type { UploadChangeParam } from 'antd/es/upload'
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface'
import { AllowedFileTypes } from '../../utils/constants'

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result as string))
  reader.readAsDataURL(img)
}

interface MyComponentProps {
  file: RcFile
}

const isFileAllowed = ({ file }: MyComponentProps) => {
  return AllowedFileTypes.includes(file.type)
}

const beforeUpload = (file: RcFile) => {
  let allowed = isFileAllowed({ file })
  if (!allowed) {
    message.error('You can only upload csv, txt, xlsx file!')
  }
  console.log({ file })

  return allowed
}

const DataImport: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState<string>()

  const handleChange: UploadProps['onChange'] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    console.log("handleChange",{info});
    
    if (info.file.status === 'uploading') {
      console.log('uploading')
      setLoading(true)
      return
    }
    if (info.file.status === 'done') {
      console.log('done')

      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, url => {
        setLoading(false)
        setImageUrl(url)
      })
    }
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  return (
    <Upload
      name='avatar'
      listType='picture-card'
      className='avatar-uploader'
      showUploadList={false}
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {imageUrl ? (
        <img src={imageUrl} alt='avatar' style={{ width: '100%' }} />
      ) : (
        uploadButton
      )}
    </Upload>
  )
}

export default DataImport
