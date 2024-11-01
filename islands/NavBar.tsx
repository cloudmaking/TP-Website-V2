import { useSignal } from "@preact/signals";

export default function NavBar() {
    const isMenuOpen = useSignal(false);

    return (
        <nav class="bg-white border-gray-200 px-4 py-2.5 rounded shadow">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
                <a href="/" class="flex items-center">
                    <img
                        src="/pngwing.png"
                        class="h-6 mr-3 sm:h-9"
                        alt="Logo"
                    />
                    <span class="self-center text-xl font-semibold whitespace-nowrap">
                        Tufail Publishers
                    </span>
                </a>
                <button
                    type="button"
                    class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="mobile-menu"
                    aria-expanded={isMenuOpen.value ? "true" : "false"}
                    onClick={() => (isMenuOpen.value = !isMenuOpen.value)}
                >
                    <span class="sr-only">Toggle navigation menu</span>
                    <svg
                        class="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        {isMenuOpen.value
                            ? (
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            )
                            : (
                                <path
                                    fillRule="evenodd"
                                    d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 6h14a1 1 0 010 2H3a1 1 0 010-2z"
                                    clipRule="evenodd"
                                />
                            )}
                    </svg>
                </button>
                <div
                    class={`${
                        isMenuOpen.value ? "block" : "hidden"
                    } w-full md:block md:w-auto`}
                    id="mobile-menu"
                >
                    <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                        <li>
                            <a
                                href="/"
                                class="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 hover:text-blue-700"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/videos"
                                class="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 hover:text-blue-700"
                            >
                                Videos
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                class="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 hover:text-blue-700"
                            >
                                Contact
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/channel/UChAb4Ulw3KeDllUj4lV_w6w"
                                target="_blank"
                                class="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 hover:text-blue-700"
                                aria-label="YouTube Channel"
                            >
                                <img
                                    src="https://img.icons8.com/ios-glyphs/30/000000/youtube-play.png"
                                    alt="YouTube"
                                    class="h-6 w-6"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
