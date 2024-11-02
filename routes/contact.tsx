import { Head } from "$fresh/runtime.ts";

export default function Contact() {
    return (
        <>
            <Head>
                <title>
                    Contact Us | Tufail Publishers - Quality Educational
                    Textbooks in Pakistan
                </title>
                <meta
                    name="description"
                    content="Get in touch with Tufail Publishers, a leading provider of high-quality educational textbooks in Pakistan. Contact us for information on our books, location, or services."
                />
                <meta
                    name="keywords"
                    content="Tufail Publishers contact, educational textbooks Pakistan, contact Tufail Publishers, Lahore book publisher, Urdu Bazaar publishers, Pakistani textbooks"
                />
                <meta
                    property="og:title"
                    content="Contact Us - Tufail Publishers"
                />
                <meta
                    property="og:description"
                    content="Reach out to Tufail Publishers for information on our range of educational textbooks, or visit us in Urdu Bazaar, Lahore."
                />
                <meta
                    property="og:url"
                    content="https://yourwebsite.com/contact"
                />
                <meta property="og:type" content="website" />
            </Head>

            <div class="bg-gray-100 min-h-screen flex flex-col items-center">
                {/* Header Section */}
                <section class="w-full bg-green-800 text-white py-10 px-4 flex flex-col md:flex-row items-center justify-center text-center md:text-left">
                    {/* CEO Image */}
                    <div class="mb-6 md:mb-0 md:mr-6 flex justify-center">
                        <img
                            src="/ceo.jpg"
                            alt="CEO of Tufail Publishers"
                            class="w-32 h-45 md:w-40 md:h-45 object-cover rounded-md"
                        />
                    </div>
                    {/* Contact Information */}
                    <div>
                        <h1 class="text-4xl font-bold mb-4">Contact Us</h1>
                        <div>
                            <p class="flex items-center justify-center md:justify-start mb-2">
                                <svg
                                    class="h-5 w-5 mr-2 text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.1-.23 11.44 11.44 0 0 0 3.6.6 1 1 0 0 1 1 1v3.75a1 1 0 0 1-1 1A18.46 18.46 0 0 1 3 4a1 1 0 0 1 1-1h3.75a1 1 0 0 1 1 1 11.44 11.44 0 0 0 .6 3.6 1 1 0 0 1-.23 1.1l-2.2 2.2z" />
                                </svg>
                                +92-42-37234474
                            </p>
                            <p class="flex items-center justify-center md:justify-start mb-2">
                                <svg
                                    class="h-5 w-5 mr-2 text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 12c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4zm0-2c-1.656 0-3-1.344-3-3s1.344-3 3-3 3 1.344 3 3-1.344 3-3 3zm0 2c-2.676 0-8 1.342-8 4v2c0 1.104.895 2 2 2h12c1.105 0 2-.896 2-2v-2c0-2.658-5.324-4-8-4zm0-12c-1.656 0-3 1.344-3 3s1.344 3 3 3 3-1.344 3-3-1.344-3-3-3z" />
                                </svg>
                                0300-8525707, 0333-8525707
                            </p>
                            <p class="flex items-center justify-center md:justify-start mb-2">
                                <svg
                                    class="h-5 w-5 mr-2 text-gray-400"
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
                            <p class="flex items-center justify-center md:justify-start">
                                <svg
                                    class="h-5 w-5 mr-2 text-gray-400"
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
                    </div>
                </section>

                {/* About Section */}
                <section class="w-full max-w-screen-md px-4 py-8 mx-auto">
                    <div>
                        <h2 class="text-3xl font-semibold mb-4 text-center md:text-left">
                            About Tufail Publishers
                        </h2>
                        <p class="text-lg text-gray-700 mb-4 text-justify">
                            Tufail Publishers is a leading educational
                            publishing house in Pakistan, offering a wide range
                            of textbooks to help students excel in various
                            subjects. Our books, written by experts, cover
                            essential topics such as history, geography,
                            science, and mathematics, supporting students in
                            understanding modern educational challenges.
                        </p>
                        <p class="text-lg text-gray-700 mb-4 text-justify">
                            Our goal is to make learning engaging and accessible
                            through textbooks that blend detailed illustrations
                            with quality content, making complex topics easier
                            to grasp. Tufail Publishers' books provide an
                            enjoyable learning experience designed to meet the
                            needs of students across Pakistan.
                        </p>
                        <p class="text-lg text-gray-700 text-justify">
                            We are dedicated to advancing education by providing
                            textbooks that are both informative and visually
                            appealing. At Tufail Publishers, we believe that
                            knowledge shapes the future, and we are proud to
                            contribute to the academic success of Pakistan's
                            youth.
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}
