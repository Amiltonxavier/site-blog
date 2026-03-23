import { CallToactionSection } from "@/components/call-to-action-section";
import { Search } from "lucide-react";
import { BlogCard } from "./components/blog-card";
export default function BlogPage() {
    return (
        <article className="flex flex-col mt-40">
            <section className="container relative flex flex-col space-y-3">
                <span className="uppercase text-body-tag text-cyan-200 bg-cyan-400 px-2 py-1 w-fit rounded-sm">blog</span>

                <div className="flex justify-between items-center">
                    <h2 className="font-sans text-balance text-heading-xl text-gray-100">
                        Dicas e estratégias para<br /> impulsionar seu negócio
                    </h2>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-400 bg-transparent backdrop-blur-sm text-gray-200 text-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500/40 transition-all duration-200 w-64">
                        <Search className="w-4 h-4 text-gray-200 flex-shrink-0" />
                        <input
                            placeholder="Buscar..."
                            className="bg-transparent outline-none w-full text-gray-200 placeholder:text-gray-200 text-sm"
                        />
                    </div>
                </div>
            </section>

            <section className="container relative flex flex-col mt-16 space-y-3 mb-32">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>

            </section>

            <CallToactionSection />
        </article>
    )
}
