import type { FC, ReactNode } from 'react'
import { useRef } from 'react'

interface FileUploadProperties {

  setFile: Function
  accept: string
  children: ReactNode
}

export const FileUpload: FC<FileUploadProperties> = ({

  setFile,
  accept,
  children,
}) => {
  const ref = useRef<HTMLInputElement>()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setFile(e.target.files[0])
  }

  return (
    <div onClick={() => ref.current?.click()}>
      <input
        type='file'
        accept={accept}
        style={{ display: 'none' }}
        ref={ref}
        onChange={onChange}
      />
      {children}
    </div>
  )
}
