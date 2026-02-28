'use client'
import { useRouter } from 'next/navigation'
import { FileUploaderRegular } from '@uploadcare/react-uploader/next'
import '@uploadcare/react-uploader/core.css'

import classes from './uploadcare.module.css'

type Props = {
  onUpload: (e: string) => any
}

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter()

  const handleUpload = async (e: any) => {
    const file = await onUpload(e.detail.cdnUrl)
    if (file) {
      router.refresh()
    }
  }

  return (
    <div className={classes.uploadcareContainer}>
      <FileUploaderRegular
        pubkey="feb4575e2c85d2e0e3f8"
        sourceList="local, camera, facebook, gdrive"
        cdnCname="https://divl0ksdeq.ucarecd.net/"
        {...({
          config: {
            localeDefinitionOverride: {
              'en': {
                'upload-file': 'Choose Profile Image',
                'drop-files-here': 'Drop image here',
                'drop-files-or-click-to-upload': 'Click or drag to upload image',
                'files-selected': 'Image selected',
                'tab-local': 'Computer',
                'tab-camera': 'Camera',
                'tab-facebook': 'Facebook',
                'tab-gdrive': 'Google Drive',
              }
            },
          },
        } as any)}
        onFileUploadSuccess={handleUpload}
      />
    </div>
  )
}

export default UploadCareButton