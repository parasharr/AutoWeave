'use client'

import React, { use, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { EditUserProfileSchema } from '@/src/lib/types'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

type Props = {
  user: any
  onUpdate?: any
}

const ProfileForm = ({ user, onUpdate }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm<z.infer<typeof EditUserProfileSchema>>({
    mode: 'onChange',
    resolver: zodResolver(EditUserProfileSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
    },
  })

  const handleSubmit = async (
    values: z.infer<typeof EditUserProfileSchema>
  ) => {
    setIsLoading(true)
    await onUpdate(values.name)
    setIsLoading(false)
  }

  useEffect(() => {
    form.reset({ name: user.name, email: user.email })
  }, [user])

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          disabled={isLoading}
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg text-white">User full name</FormLabel>
              <FormControl>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-md opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
                  <Input
                    {...field}
                    placeholder="Name"
                    style={{ height: '70px' }}
                    className="relative bg-[#2C2C2E]/50 border-[#3C3C3E] focus-visible:ring-purple-500/50 focus-visible:border-purple-500 text-white placeholder:text-muted-foreground/50 transition-all duration-300 text-lg px-4"
                  />
                </div>
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg text-white">Email</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    disabled={true}
                    placeholder="Email"
                    type="email"
                    style={{ height: '70px' }}
                    className="bg-[#2C2C2E]/30 border-[#3C3C3E]/50 text-white/50 cursor-not-allowed text-lg px-4"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="self-start relative group overflow-hidden bg-transparent border border-purple-500/30 hover:border-purple-500 text-white h-auto rounded-xl transition-all duration-300"
          style={{ padding: '20px 40px' }}
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 group-hover:from-purple-600/40 group-hover:to-blue-600/40 transition-all duration-500" />
          <div className="relative flex items-center gap-2 z-10 font-medium text-lg">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Saving Changes
              </>
            ) : (
              'Save User Settings'
            )}
          </div>
        </Button>
      </form>
    </Form>
  )
}

export default ProfileForm