import { cn } from "@/lib/utils"
import Link, { type LinkProps } from "next/link"
import { useRouter } from "next/router"
import type React from "react"


interface Props extends LinkProps {
    children: React.ReactNode
}

export function ActiveLink({ children, href, ...rest }: Props) {
    const router = useRouter()
    const isLinkActive = router.asPath === href || router.asPath === rest.as
    return (
        <Link href={href} className={cn('text-action-sm font-medium transition-colors hover:text-blue-200',
            isLinkActive ? 'text-blue-200' : 'text-gray-100')}
        >
            {children}
        </Link>
    )
}
