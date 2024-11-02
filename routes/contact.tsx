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

                {/* Include Tailwind CSS */}
                <script src="https://cdn.tailwindcss.com"></script>
                <script>
                    {`tailwind.config = {
                        theme: {
                            extend: {
                                colors: {
                                    // Add custom colors if needed
                                },
                            },
                        },
                    }`}
                </script>
            </Head>

            <body class="bg-gray-100 font-sans leading-relaxed text-gray-800">
                {/* Contact Details */}
                <section class="container mx-auto px-6 py-16 text-center">
                    <h2 class="text-3xl font-semibold text-gray-800 mb-6">
                        Get in Touch
                    </h2>
                    <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
                        We'd love to hear from you! Please reach out to us using
                        the contact information below.
                    </p>
                    <div class="space-y-4">
                        <p class="flex items-center justify-center">
                            <svg
                                class="w-6 h-6 text-blue-600 mr-2"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.1-.23 11.44 11.44 0 0 0 3.6.6 1 1 0 0 1 1 1v3.75a1 1 0 0 1-1 1A18.46 18.46 0 0 1 3 4a1 1 0 0 1 1-1h3.75a1 1 0 0 1 1 1 11.44 11.44 0 0 0 .6 3.6 1 1 0 0 1-.23 1.1l-2.2 2.2z" />
                            </svg>
                            +92-42-37234474
                        </p>
                        <p class="flex items-center justify-center">
                            <svg
                                class="w-6 h-6 text-blue-600 mr-2"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 12c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4zm0-2c-1.656 0-3-1.344-3-3s1.344-3 3-3 3 1.344 3 3-1.344 3-3 3zm0 2c-2.676 0-8 1.342-8 4v2c0 1.104.895 2 2 2h12c1.105 0 2-.896 2-2v-2c0-2.658-5.324-4-8-4zm0-12c-1.656 0-3 1.344-3 3s1.344 3 3 3 3-1.344 3-3-1.344-3-3-3z" />
                            </svg>
                            0300-8525707, 0333-8525707
                        </p>
                        <p class="flex items-center justify-center">
                            <svg
                                class="w-6 h-6 text-blue-600 mr-2"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 12.01L12 13.5l-8 2.51V6l8 3.51 8-3.51v10.01z" />
                            </svg>
                            <a
                                href="mailto:info@tufailpublishers.com"
                                class="text-blue-600"
                            >
                                info@tufailpublishers.com
                            </a>
                        </p>
                        <p class="flex items-center justify-center">
                            <svg
                                class="w-6 h-6 text-blue-600 mr-2"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                            </svg>
                            Al-Fazal Market, Urdu Bazaar, Lahore
                        </p>
                    </div>
                </section>

                {/* About Section */}
                <section class="bg-gray-200 container mx-auto px-6 py-16">
                    <div class="flex flex-col md:flex-row items-center md:items-start">
                        <div class="flex-shrink-0 mb-6 md:mb-0 md:mr-8 flex justify-center">
                            <img
                                src="/ceo.jpg"
                                alt="CEO of Tufail Publishers"
                                class="w-40 h-52 md:w-48 md:h-52 object-cover rounded-md shadow-lg"
                            />
                        </div>
                        <div class="md:flex-1">
                            <h2 class="text-3xl font-semibold mb-4 text-center md:text-left">
                                About Tufail Publishers
                            </h2>
                            <p class="text-md text-gray-700 mb-4 text-justify">
                                Tufail Publishers is a leading educational
                                publishing house in Pakistan, offering a wide
                                range of textbooks to help students excel in
                                various subjects. Our books, written by experts,
                                cover essential topics such as history,
                                geography, science, and mathematics, supporting
                                students in understanding modern educational
                                challenges.
                            </p>
                            <p class="text-md text-gray-700 mb-4 text-justify">
                                Our goal is to make learning engaging and
                                accessible through textbooks that blend detailed
                                illustrations with quality content, making
                                complex topics easier to grasp. Tufail
                                Publishers' books provide an enjoyable learning
                                experience designed to meet the needs of
                                students across Pakistan.
                            </p>
                            <p class="text-md text-gray-700 text-justify">
                                We are dedicated to advancing education by
                                providing textbooks that are both informative
                                and visually appealing. At Tufail Publishers, we
                                believe that knowledge shapes the future, and we
                                are proud to contribute to the academic success
                                of Pakistan's youth.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section class=" py-12">
                    <div class="container mx-auto px-6">
                        <h2 class="text-2xl font-semibold text-gray-800 mb-6 text-center">
                            Our Location
                        </h2>
                        <div class="flex items-center justify-center">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13602.602661930578!2d74.30908745!3d31.5684016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919038d4af3e5eb%3A0xa65a70ec2d92a83c!2sAl-Fazal%20Market%2C%20Urdu%20Bazaar%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1635555696549!5m2!1sen!2sus"
                                width="100%"
                                height="450"
                                style="border:0;"
                                allowFullScreen={true}
                                loading="lazy"
                                class="rounded-lg shadow-lg"
                            >
                            </iframe>
                        </div>
                    </div>
                </section>
            </body>
        </>
    );
}
