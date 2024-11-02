import { Head } from "$fresh/runtime.ts";
import { useRef } from "preact/hooks";

export default function Videos() {
    const carouselRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Head>
                <title>Free Math Video Lessons - Tufail Publishers</title>
                <meta
                    name="description"
                    content="Watch free Math lessons for Class 1 to Class 4 by Tufail Publishers. Our video playlists cover each chapter in Urdu, making learning accessible to everyone."
                />
                <meta
                    name="keywords"
                    content="free math lessons, class 1 math, class 2 math, class 3 math, class 4 math, urdu math videos, free educational videos, Tufail Publishers, online learning, math in urdu"
                />
                {/* Font and Icons */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div class="bg-gray-50 text-gray-800 font-sans">
                {/* Main Content */}
                <main class="py-16 px-4">
                    {/* Introduction */}
                    <section class="text-center mb-12 max-w-screen-md mx-auto">
                        <h2 class="text-3xl font-semibold mb-4">
                            Accessible Learning for Everyone
                        </h2>
                        <p class="text-lg text-gray-700 text-justify">
                            Welcome to Tufail Publishers' free Math video
                            lessons. These playlists are designed to make
                            learning accessible and enjoyable for everyone. Our
                            videos cover the entire Math curriculum from Class 1
                            to Class 4, walking students through each chapter in
                            Urdu. Learn at your own pace, for free!
                        </p>
                        <p class="mt-4">
                            Subscribe to our{" "}
                            <a
                                href="https://www.youtube.com/channel/UChAb4Ulw3KeDllUj4lV_w6w"
                                target="_blank"
                                class="text-blue-600 hover:underline"
                            >
                                YouTube channel
                            </a>{" "}
                            to get notified about new lessons and resources.
                        </p>
                    </section>

                    {/* Carousel Section */}
                    <section class="relative">
                        <div
                            ref={carouselRef}
                            class="flex overflow-x-auto space-x-4 max-w-screen-lg mx-auto px-4"
                            style={{
                                display: "flex",
                                flexWrap: "nowrap",
                                gap: "1rem",
                            }}
                        >
                            {/* Playlist Cards */}
                            {[
                                {
                                    title: "Math Class 1",
                                    subtitle: "Little Hand Series || 2022",
                                    videos: 50,
                                    src: "https://www.youtube.com/embed/videoseries?list=PL5yflaiEp7FisZjwsjAjQXUh4o8YyNSbG",
                                    description:
                                        "A complete video guide for Class 1 Math, covering each chapter in Urdu. Perfect for young learners to grasp foundational math concepts with ease.",
                                },
                                {
                                    title: "Math Class 2",
                                    subtitle: "Little Hand Series || 2022",
                                    videos: 68,
                                    src: "https://www.youtube.com/embed/videoseries?list=PL5yflaiEp7FhVI--uTPsyGLwLiRpWw5yt",
                                    description:
                                        "Dive deeper into Math with Class 2 lessons in Urdu. This series helps students build on what they learned in Class 1, making math engaging and approachable.",
                                },
                                {
                                    title: "Math Class 3",
                                    subtitle: "Little Hand Series || 2022",
                                    videos: 32,
                                    src: "https://www.youtube.com/embed/videoseries?list=PL5yflaiEp7FhYwwvxqvctAI7gONGo_WBt",
                                    description:
                                        "Designed for Class 3 students, this series explains more advanced math topics. Ideal for students aiming to solidify their knowledge with structured video lessons.",
                                },
                                {
                                    title: "Math Class 4",
                                    subtitle: "Little Hand Series || 2022",
                                    videos: "WIP",
                                    src: "https://www.youtube.com/embed/videoseries?list=PL5yflaiEp7FhfI_R-zBO3g0N6OQ4bKlhc",
                                    description:
                                        "An extensive series for Class 4 Math, walking students through each chapter in Urdu. This series prepares learners for more complex math concepts.",
                                },
                            ].map((playlist, index) => (
                                <div
                                    key={index}
                                    class="bg-white shadow-md rounded-lg p-6 text-center w-96 flex-shrink-0"
                                >
                                    <h2 class="text-2xl font-semibold mb-1">
                                        {playlist.title}
                                    </h2>
                                    <p class="text-gray-500 text-sm mb-2">
                                        {playlist.subtitle}
                                    </p>
                                    <p class="text-gray-600 text-xs mb-4">
                                        {playlist.videos} videos
                                    </p>
                                    <iframe
                                        class="w-full h-56 mb-4 rounded-md"
                                        src={playlist.src}
                                        title={playlist.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    >
                                    </iframe>
                                    <p class="text-sm text-gray-700 text-justify">
                                        {playlist.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Call-to-Action */}
                    <section class="text-center mt-16">
                        <p class="text-lg text-gray-700">
                            For more free educational videos, subscribe to our
                            {" "}
                            <a
                                href="https://www.youtube.com/channel/UChAb4Ulw3KeDllUj4lV_w6w"
                                target="_blank"
                                class="text-blue-600 hover:underline"
                            >
                                YouTube channel
                            </a>
                            . Stay updated on new videos and resources by
                            clicking the subscribe button.
                        </p>
                        <a
                            href="https://www.youtube.com/channel/UChAb4Ulw3KeDllUj4lV_w6w"
                            target="_blank"
                            class="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-full transition duration-300"
                        >
                            Subscribe Now
                        </a>
                    </section>
                </main>
            </div>
        </>
    );
}
