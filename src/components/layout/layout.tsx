import type React from "react"
import { Header } from "../header"
import { Footer } from "../footer"
import { Inter } from "next/font/google"


interface Props {
    children: React.ReactNode
}

const inter = Inter({ subsets: ['latin'] })
export function Layout({ children }: Props) {
    return (
        <div className={`${inter.className} relative flex min-h-screen flex-col dark  bg-gray-700`}>
            <Header />
            <main className="flex-1 flex flex-col mb-12">
                {children}
            </main>
            <Footer />
        </div>
    )
}
