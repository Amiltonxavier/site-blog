import Link from 'next/link'
import { Logo } from '../logo'

export function Footer() {
    return (
        <footer className='bg-gray-500 border-white/10'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-6'>
                <div className='flex justify-between md:flex-row gap-8 py-8'>
                    <Logo />
                    <nav className='text-blue-100 flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground'>
                        <Link className="hover:text-blue-200" href="/use-terms">Termos de uso</Link>
                        <Link className="hover:text-blue-200" href="/polity-privaty">Políticas de privacidade</Link>
                        <Link className="hover:text-blue-200" href="/feedback">Feedback</Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
