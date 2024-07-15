import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';

export function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer className="bg-gray-800">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/ouroboros.png"
                            className="h-8 me-3"
                            alt="Henrilab Logo"
                            width={32}
                            height={32}
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">henrilab</span>
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-white">{t('social')}</h2>
                        <ul className="text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="https://www.instagram.com/henrilab.tech/" target="blank" className="hover:underline">Instagram </a>
                            </li>
                            <li className="mb-4">
                                <a href="https://www.linkedin.com/company/103977181/" target="blank" className="hover:underline">Linkedin</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-white">{t('initiatives')}</h2>
                        <ul className="text-gray-400 font-medium">
                            <li className="mb-4">
                                <Link href="/science" className="hover:underline ">{t('science_support')}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm sm:text-center text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">henrilab™</a>. {t('copyright')}
                </span>
            </div>
            </div>
        </footer>
    )
}