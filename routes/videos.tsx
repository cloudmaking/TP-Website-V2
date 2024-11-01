import { Head } from "$fresh/runtime.ts";

export default function Videos() {
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
            </Head>

            <div class="bg-gray-100 min-h-screen py-8 px-4">
                {/* Header Section */}
                <section class="text-center mb-12">
                    <h1 class="text-4xl font-bold mb-4">
                        Free Math Video Lessons
                    </h1>
                    <p class="text-lg text-gray-700 max-w-screen-md mx-auto text-justify">
                        Welcome to Tufail Publishers' free Math video lessons.
                        These playlists are designed to make learning accessible
                        and enjoyable for everyone. Our videos cover the entire
                        Math curriculum from Class 1 to Class 4, walking
                        students through each chapter in Urdu. Learn at your own
                        pace, for free!
                    </p>
                    <p class="text-center mt-4">
                        Subscribe to our{" "}
                        <a
                            href="https://www.youtube.com/channel/UChAb4Ulw3KeDllUj4lV_w6w"
                            target="_blank"
                            class="text-blue-500 hover:underline"
                        >
                            YouTube channel
                        </a>{" "}
                        to get notified about new lessons and resources.
                    </p>
                </section>

                {/* Playlists Section */}
                <section class="grid gap-8 max-w-96 mx-auto">
                    {/* Class 1 Playlist */}
                    <div class="bg-white shadow-md rounded-lg p-6 text-center">
                        <h2 class="text-2xl font-semibold mb-4">
                            Math: Class 1 Playlist
                        </h2>
                        <iframe
                            class="w-full h-64 mb-4 rounded-lg"
                            src="https://www.youtube.com/embed/videoseries?list=PL5yflaiEp7FisZjwsjAjQXUh4o8YyNSbG"
                            title="Math Class 1 Playlist"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        >
                        </iframe>
                        <p class="text-gray-700 text-justify">
                            Learn Math concepts for Class 1 with easy-to-follow
                            video lessons in Urdu. This playlist covers each
                            chapter of the Class 1 Math textbook, making
                            knowledge accessible and free for everyone.
                        </p>
                    </div>

                    {/* Class 2 Playlist */}
                    <div class="bg-white shadow-md rounded-lg p-6 text-center">
                        <h2 class="text-2xl font-semibold mb-4">
                            Math: Class 2 Playlist
                        </h2>
                        <iframe
                            class="w-full h-64 mb-4 rounded-lg"
                            src="https://www.youtube.com/embed/videoseries?list=PL5yflaiEp7FhVI--uTPsyGLwLiRpWw5yt"
                            title="Math Class 2 Playlist"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        >
                        </iframe>
                        <p class="text-gray-700 text-justify">
                            Dive into Math for Class 2 with comprehensive video
                            lessons. This playlist provides step-by-step
                            guidance in Urdu, helping students to master the
                            topics at their own pace.
                        </p>
                    </div>

                    {/* Class 3 Playlist */}
                    <div class="bg-white shadow-md rounded-lg p-6 text-center">
                        <h2 class="text-2xl font-semibold mb-4">
                            Math: Class 3 Playlist
                        </h2>
                        <iframe
                            class="w-full h-64 mb-4 rounded-lg"
                            src="https://www.youtube.com/embed/videoseries?list=PL5yflaiEp7FhYwwvxqvctAI7gONGo_WBt"
                            title="Math Class 3 Playlist"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        >
                        </iframe>
                        <p class="text-gray-700 text-justify">
                            Master Class 3 Math with detailed explanations of
                            each chapter. Our instructor walks through every
                            topic in Urdu, making complex concepts easy to
                            understand.
                        </p>
                    </div>

                    {/* Class 4 Playlist */}
                    <div class="bg-white shadow-md rounded-lg p-6 text-center">
                        <h2 class="text-2xl font-semibold mb-4">
                            Math: Class 4 Playlist
                        </h2>
                        <iframe
                            class="w-full h-64 mb-4 rounded-lg"
                            src="https://www.youtube.com/embed/videoseries?list=PL5yflaiEp7FhfI_R-zBO3g0N6OQ4bKlhc"
                            title="Math Class 4 Playlist"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        >
                        </iframe>
                        <p class="text-gray-700 text-justify">
                            Explore Class 4 Math with our video lessons,
                            covering each chapter in Urdu. This playlist makes
                            learning Math engaging and accessible for everyone.
                        </p>
                    </div>
                </section>

                {/* Call-to-Action */}
                <section class="text-center mt-12">
                    <p class="text-lg text-gray-700">
                        For more free educational videos, subscribe to our{" "}
                        <a
                            href="https://www.youtube.com/channel/UChAb4Ulw3KeDllUj4lV_w6w"
                            target="_blank"
                            class="text-blue-500 hover:underline"
                        >
                            YouTube channel
                        </a>. Stay updated on new videos and resources by
                        clicking the subscribe button.
                    </p>
                </section>
            </div>
        </>
    );
}
