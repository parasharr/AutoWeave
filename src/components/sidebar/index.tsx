"use client"
import { menuOptions } from '@/src/lib/constant'
import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Separator } from '@/components/ui/separator'

type Props = {}

const MenuOptions = (props: Props) => {
    const pathName = usePathname();

    return (
        <nav className="dark:bg-black h-screen overflow-scroll justify-between flex items-center flex-col gap-10 py-6 px-2">
            <div className='flex items-center justify-center flex-col gap-8'>
                <Link className="flex font-bold flex-row" href="/">
                    <Image
                        src="/Images/logo.png"
                        alt="Logo"
                        width={24}
                        height={24}
                    />
                </Link>
                <TooltipProvider>
                    <ul className="flex flex-col gap-8">
                        {menuOptions.map((menuItem) => (
                            <li key={menuItem.name}>
                                <Tooltip delayDuration={0}>
                                    <TooltipTrigger asChild>
                                        <Link href={menuItem.href}
                                            className={clsx(
                                                'group h-8 w-8 flex items-center justify-center scale-[1.5] rounded-lg p-[3px] cursor-pointer', { 'dark:bg-[#2F006B] bg-[#EE0FF]': pathName === menuItem.href, }
                                            )}
                                        >
                                            <menuItem.Component
                                                selected={pathName === menuItem.href}
                                            />
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent side="right">
                                        <p>{menuItem.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </li>
                        ))}
                    </ul>
                </TooltipProvider>
                <Separator />
            </div>
        </nav>
    )
}

export default MenuOptions;