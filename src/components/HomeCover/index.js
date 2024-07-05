import Image from "next/image";
import {useTranslations} from 'next-intl';

export function HomeCover() {
    const t = useTranslations('HomeCover');

    return (
        <div className="container mx-auto max-w-screen-xl">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center h-screen">
                <div className="flex flex-col items-center lg:items-start justify-center text-left lg:text-left w-full lg:w-auto">
                    <h1 className="font-bold text-4xl mb-4">{t('cta')}</h1>
                    <p className="lg:w-[400px] mb-4">{t('description')}</p>
                </div>

                <div className="hidden lg:block">
                    <Image
                        src="/touch-of-god.png"
                        width={650}
                        height={650}
                        alt="Touch of the God"
                    />
                </div>
            </div>
        </div>
    )
}