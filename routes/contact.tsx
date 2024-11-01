import { Head } from "$fresh/runtime.ts";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Us - Tufail Publishers</title>
            </Head>
            <div class="bg-gray-100 min-h-screen flex flex-col items-center">
                {/* Header Section */}
                <section class="w-full bg-blue-700 text-white py-10 text-center">
                    <h1 class="text-4xl font-bold">Contact Us</h1>
                    <p class="text-lg mt-2">
                        Tufail Publishers is home to a selection of high-quality
                        textbooks created to help students learn more
                        effectively.
                    </p>
                </section>

                {/* Content Section */}
                <section class="w-full max-w-screen-md px-4 py-8 mx-auto">
                    <div class="flex flex-col md:flex-row items-center mb-8">
                        <img
                            src="/ceo.jpg"
                            alt="CEO of Tufail Publishers"
                            class="w-40 h-40 object-cover rounded-full mx-auto md:mx-0 md:mr-6 mb-4 md:mb-0"
                        />
                        <div>
                            <h2 class="text-3xl font-semibold mb-4">
                                About Tufail Publishers
                            </h2>
                            <p class="text-lg text-gray-700 mb-4">
                                Tufail Publishers is home to a selection of
                                high-quality textbooks created to help students
                                learn more effectively. They cover subjects
                                relevant to the challenges present in today's
                                world and are written by professional authors
                                using the latest techniques in the field of
                                education. From world affairs and economics to
                                history, geography, literature, and science,
                                Tufail textbooks offer a wide range of books
                                that entertain as they educate.
                            </p>
                            <p class="text-lg text-gray-700 mb-4">
                                Tufail Publishers is a platform on which the
                                students of Pakistan can learn many things in a
                                very creative way. The textbooks made here are
                                more like graphical handbooks. It is fun to
                                learn, and if it is fun, no one will find it
                                difficult to learn.
                            </p>
                            <p class="text-lg text-gray-700">
                                At Tufail Publishers, we believe that bringing
                                new minds into the world of knowledge and
                                awareness is our biggest responsibility. It is
                                through education that children learn about the
                                outside world and seek to understand their
                                surroundings. At Tufail Publishers, we are proud
                                to be a part of this journey toward progress,
                                and we hope that our books will inspire the
                                minds of those now entering this exciting stage
                                of their lives.
                            </p>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div class="bg-white rounded-lg shadow-lg p-6 text-center">
                        <h3 class="text-2xl font-semibold mb-4">
                            Get in Touch
                        </h3>
                        <p class="flex items-center justify-center mb-2">
                            <svg
                                class="w-5 h-5 mr-2 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.1-.23 11.44 11.44 0 0 0 3.6.6 1 1 0 0 1 1 1v3.75a1 1 0 0 1-1 1A18.46 18.46 0 0 1 3 4a1 1 0 0 1 1-1h3.75a1 1 0 0 1 1 1 11.44 11.44 0 0 0 .6 3.6 1 1 0 0 1-.23 1.1l-2.2 2.2z" />
                            </svg>
                            +92-42-37234474
                        </p>
                        <p class="flex items-center justify-center mb-2">
                            <svg
                                class="w-5 h-5 mr-2 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 12c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4zm0-2c-1.656 0-3-1.344-3-3s1.344-3 3-3 3 1.344 3 3-1.344 3-3 3zm0 2c-2.676 0-8 1.342-8 4v2c0 1.104.895 2 2 2h12c1.105 0 2-.896 2-2v-2c0-2.658-5.324-4-8-4zm0-12c-1.656 0-3 1.344-3 3s1.344 3 3 3 3-1.344 3-3-1.344-3-3-3z" />
                            </svg>
                            0300-8525707, 0333-8525707
                        </p>
                        <p class="flex items-center justify-center mb-2">
                            <svg
                                class="w-5 h-5 mr-2 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 12.01L12 13.5l-8 2.51V6l8 3.51 8-3.51v10.01z" />
                            </svg>
                            <a
                                href="mailto:info@tufailpublishers.com"
                                class="text-blue-400 hover:underline"
                            >
                                info@tufailpublishers.com
                            </a>
                        </p>
                        <p class="flex items-center justify-center">
                            <svg
                                class="w-5 h-5 mr-2 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-11h2v6h-2zm1-4a1 1 0 1 1 .001 1.999A1 1 0 0 1 12 5z" />
                            </svg>
                            <a
                                href="https://maps.app.goo.gl/bQaJknTGvJmvhM168"
                                class="text-blue-400 hover:underline"
                                target="_blank"
                            >
                                Al-Fazal Market, Urdu Bazaar, Lahore
                            </a>
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}
