import Image from "next/image";
export function Header() {
    return (
        <header>
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5 mt-3">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="https://flowbite.com" className="flex items-center">
                        <Image
                            src="/ouroboros.png"
                            className="h-8 me-3"
                            alt="henrilab Logo"
                            width={35}
                            height={35}
                        />
                        <h1 className="text-xl font-bold">henrilab.</h1>
                    </a>
                    <div className="flex items-center lg:order-2">
                        <a href="#contact" className="border border-pink-500 rounded font-bold text-sm px-4 lg:px-5 py-2 mr-2 underline text-pink-500">Lets talk</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}