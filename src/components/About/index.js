import Image from "next/image";
import {useTranslations} from 'next-intl';

export function About() {
    const t = useTranslations('About');

    return (
        <section>
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <Image
                        className="w-full rounded-lg"
                        alt="Henrilab office"
                        src="/office1.png"
                        width={400}
                        height={400}
                    />
                    <Image
                        className="mt-4 w-full lg:mt-10 rounded-lg"
                        src="/office2.png"
                        alt="office content 2"
                        width={400}
                        height={400}
                    />
                </div>
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{t('title')}</h2>
                    <p className="mb-4">{t('description1')}</p>
                    <p>{t('description2')}</p>
                </div>
            </div>
        </section>
    )
}