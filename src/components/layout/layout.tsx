import type React from "react"
import { Header } from "../header"
import { Footer } from "../footer"
import { Inter, PT_Sans_Caption } from "next/font/google"


interface Props {
    children: React.ReactNode
}

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-inter'
})
const ptSansCaption = PT_Sans_Caption({
    subsets: ['latin'],
    weight: '700',
    variable: '--font-sans'
})
export function Layout({ children }: Props) {
    return (
        <div className={`${inter.className} ${ptSansCaption.className} relative flex min-h-screen flex-col dark  bg-gray-700 `}>
            <Header />
            <main className="flex-1 flex flex-col mt-10 mb-12">
                {children}
            </main>
            <Footer />
        </div>
    )
}
