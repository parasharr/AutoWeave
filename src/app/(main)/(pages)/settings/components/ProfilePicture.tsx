'use client'
import UploadCareButton from './UploadCare'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

type Props = {
  userImage: string | null
  onDelete?: any
  onUpload: any
}

const ProfilePicture = ({ userImage, onDelete, onUpload }: Props) => {
  const router = useRouter()

  const onRemoveProfileImage = async () => {
    const response = await onDelete()
    if (response) {
      router.refresh()
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg font-medium text-white">Profile Picture</p>

      <div className="flex flex-col items-start gap-4">
        {userImage ? (
          <div className="flex items-center gap-6">
            <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
              <Image
                src={userImage}
                alt="User Profile Image"
                fill
                className="object-cover"
              />
            </div>
            <Button
              onClick={onRemoveProfileImage}
              variant="destructive"
              className="bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white border border-red-500/20 transition-all"
            >
              <X className="mr-2 h-4 w-4" /> Remove Picture
            </Button>
          </div>
        ) : (
          <div className="relative border-2 border-dashed border-purple-500/20 hover:border-purple-500/50 hover:bg-purple-500/5 rounded-2xl p-10 flex flex-col items-center justify-center transition-all duration-300 group overflow-hidden w-full max-w-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="z-10 flex flex-col items-center">
              <UploadCareButton onUpload={onUpload} />
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Click or drag file to this area to upload
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfilePicture