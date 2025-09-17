import Image from 'next/image'
import Link from 'next/link'

export function Logo() {
    return (
        <Link href="/">
            <Image
                src="/logo.svg"
                width={116}
                height={32}
                alt='Logo Site'
            />
        </Link>
    )
}
