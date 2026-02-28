import ProfileForm from '@/src/components/forms/ProfileForm'
import React from 'react'
import ProfilePicture from './components/ProfilePicture'
import { db } from '@/src/lib/db'
import { currentUser } from '@clerk/nextjs/server'

type Props = {}

const Settings = async (props: Props) => {
  // MOCKING AUTHENTICATION FOR TESTING
  const authUser = { id: 'mock-clerk-id' } // await currentUser()
  if (!authUser) return <div className="p-4">Not authenticated - Please sign in again.</div>

  const user = await db.user.findUnique({ where: { clerkId: authUser.id } }) || { profileImage: '', name: 'Test User', email: 'test@example.com' }
  const removeProfileImage = async () => {
    'use server'
    const response = await db.user.update({
      where: {
        clerkId: authUser.id,
      },
      data: {
        profileImage: '',
      },
    })
    return response
  }

  const uploadProfileImage = async (image: string) => {
    'use server'
    const id = authUser.id
    const response = await db.user.update({
      where: {
        clerkId: id,
      },
      data: {
        profileImage: image,
      },
    })

    return response
  }

  const updateUserInfo = async (name: string) => {
    'use server'

    const updateUser = await db.user.update({
      where: {
        clerkId: authUser.id,
      },
      data: {
        name,
      },
    })
    return updateUser
  }

  return (
    <div className="flex flex-col gap-4 pb-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-white font-bold">Settings</span>
      </h1>
      <div className="flex flex-col gap-10 p-6 max-w-4xl">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-white tracking-tight">User Profile</h2>
          <p className="text-base text-muted-foreground">
            Manage your account settings and preferences.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row gap-8 bg-[#1C1C1E] border border-[#2C2C2E] rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          {/* Decorative Background Gradient */}
          <div className="absolute top-0 right-0 -m-32 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl mix-blend-screen pointer-events-none" />
          <div className="absolute bottom-0 left-0 -m-32 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl mix-blend-screen pointer-events-none" />

          <div className="flex-1 space-y-8 z-10">
            <ProfilePicture
              onDelete={removeProfileImage}
              userImage={user?.profileImage || ''}
              onUpload={uploadProfileImage}
            />

            <div className="h-px bg-gradient-to-r from-transparent via-[#2C2C2E] to-transparent" />

            <ProfileForm
              user={user}
              onUpdate={updateUserInfo}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings