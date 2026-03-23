import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import type { ComponentProps } from "react";


interface Props extends ComponentProps<'button'> {
    href: string
    title: string
}

export function ButtonLink({ href, title, className, ...rest }: Props) {
    return (
        <Button {...rest} variant="primary" className="mt-6" asChild>
            <Link href={href}>
                {title}
                <ArrowRight className=" h-4 w-4" />
            </Link>
        </Button>
    )
}
