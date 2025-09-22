import { ArrowRight, Store } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { PT_Sans_Caption } from "next/font/google";


const ptSansCaption = PT_Sans_Caption({
    subsets: ['latin'],
    weight: '700'
})

export function CallToactionSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-cyan-950/20 to-gray-700">
            <div className="container relative">
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="absolute -top-28 p-4 bg-cyan-300 w-fit rounded-full">
                        <Store className="text-cyan-100" />
                    </div>
                    <h2 className={`${ptSansCaption.className} text-gray-100 text-balance text-heading-xl`}>
                        Crie uma loja online e inicie suas vendas ainda hoje
                    </h2>
                    <Button variant="primary" className="mt-6" asChild>
                        <Link href="/new-store">
                            Criar loja grátis
                            <ArrowRight className=" h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
