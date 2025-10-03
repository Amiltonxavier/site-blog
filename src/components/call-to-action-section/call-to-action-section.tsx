import { Store } from "lucide-react";

import { ButtonLink } from "../button-link/button-link";

export function CallToactionSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-cyan-950/20 to-gray-700">
            <div className="container relative">
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="absolute -top-28 p-4 bg-cyan-300 w-fit rounded-full">
                        <Store className="text-cyan-100" />
                    </div>
                    <h2 className="font-sans text-balance text-heading-md md:text-heading-xl text-gray-100 text-center md:max-w-md max-w-full">
                        Crie uma loja online e inicie suas vendas ainda hoje
                    </h2>
                    <ButtonLink title={"Criar loja grátis"} href="/new-store" />
                </div>
            </div>
        </section>
    )
}
