import { Calendar } from "lucide-react";
import Image from "next/image";

export function BlogCard() {
    return (
        <div className="bg-gray-600 rounded-2xl overflow-hidden shadow-lg border border-gray-700 max-w-sm w-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="relative h-48 w-full">
                <Image
                    src={"/Rectangle 4841.png"}
                    alt="Blog cover"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />

                <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
                    <Calendar size={14} />
                    11/02/2026
                </div>
            </div>

            <div className="p-5 flex flex-col gap-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
                    E-commerce
                </span>

                <h3 className="text-white font-bold text-lg leading-snug">
                    Transformando seu negócio em uma loja virtual
                </h3>

                <p className="text-body-sm text-gray-200 text-sm leading-relaxed line-clamp-3 ">
                    Se você está buscando uma maneira simples e eficaz de vender seus produtos online,
                    o Site.Set é a solução perfeita. Criar uma loja virtual de sucesso nunca foi tão fácil.
                </p>

                <div className="border-t border-gray-700 mt-1" />

                <div className="flex items-center gap-3">
                    <div className="relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-indigo-500/40">
                        <Image
                            src={"/customer-01.svg"}
                            alt="Aspen Dokidis"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <strong className="text-gray-200 text-sm">Aspen Dokidis</strong>
                        <span className="text-gray-500 text-xs">5 min de leitura</span>
                    </div>
                </div>
            </div>
        </div>
    );
}