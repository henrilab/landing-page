import Image from "next/image";

export function HomeCover() {
    return (
        <div className="mx-auto max-w-screen-xl text-center lg:text-left">
            <div className="flex justify-center lg:justify-between items-center h-screen">
                <div>
                    <h1 className="font-bold text-4xl mb-4">Let&apos;s create the <span className="text-pink-500">future</span> today?</h1>
                    <p className="w-1/2 md:w-[620px] mb-4">We develop software following the best market practices and always oriented to your business and creative objectives</p>
                </div>

                <div className="hidden lg:block">
                    <Image
                        src="/touch-of-god.png"
                        width={600}
                        height={600}
                        alt="Touch of the God"
                    />
                </div>
            </div>
        </div>
    )
}