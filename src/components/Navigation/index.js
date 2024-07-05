import {useTranslations} from 'next-intl';
import LocaleSwitcher from '../LocaleSwitcher';
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  const t = useTranslations('Navigation');

  return (
    <div className="mt-2">
      <nav className="container mx-auto flex justify-between p-2 text-white">
        <div>
          <Link href="/" className="flex items-center">
            <Image
                src="/ouroboros.png"
                className="h-8 me-3"
                alt="henrilab Logo"
                width={35}
                height={35}
            />
            <h1 className="text-xl font-bold">henrilab.</h1>
          </Link>
        </div>

        <div className='flex flex-row'>
          <LocaleSwitcher />
          <div className="flex items-center lg:order-2">
            <a href="#contact" className="border border-pink-500 rounded font-bold text-sm px-4 lg:px-5 py-2 mr-2 underline text-pink-500">{t('lets_talk')}</a>
          </div>
        </div>
      </nav>
    </div>
  );
}