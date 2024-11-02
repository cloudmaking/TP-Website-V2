import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Welcome to Tufail Publishers - Quality Educational Resources
        </title>
        <meta
          name="description"
          content="Tufail Publishers provides quality educational books and resources. Watch our CEO's message and discover diverse teaching styles in Urdu."
        />
        <meta
          name="keywords"
          content="Tufail Publishers, educational books, learning resources, teaching styles in Urdu, quality education, CEO message, training videos"
        />
        {/* Font and Icons */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div class="bg-gray-50 text-gray-800 font-sans">
        {/* Hero Section */}
        <section
          class="relative bg-cover bg-center bg-no-repeat text-center text-black py-8"
          style={{ backgroundImage: "url('/hero_bg2.webp')" }}
        >
          <div class="absolute inset-0 bg-black opacity-50"></div>
          <div class="relative z-10 max-w-2xl mx-auto">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">
              Welcome to Tufail Publishers
            </h1>
            <p class="text-lg md:text-xl mb-8">
              Quality Educational Resources for Inspired Learning
            </p>
            <div class="w-full max-w-3xl mb-8">
              <iframe
                class="w-full h-64 md:h-96 rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/sJFJaQHOuIk"
                title="CEO Message"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              >
              </iframe>
            </div>
            <a
              href="#about"
              class="inline-block bg-black hover:bg-lime-950 text-white font-medium py-3 px-6 rounded-full transition duration-300"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* CEO Message Section */}
        <section id="ceo-message" class="px-6 py-8 bg-white">
          <div class="max-w-screen-lg mx-auto flex flex-col items-center">
            <p class="text-lg text-gray-700 max-w-3xl leading-relaxed text-center">
              <span class="font-light italic text-gray-600">
                "At some point in the past, a small snippet of sunlight
                reflected on a glass window frame and inspired an idea to
                publish intriguing, creative, and engaging books."
              </span>
              <br />
              <br />
              This vision blossomed into Tufail Publishers, a company dedicated
              to producing high-quality educational resources. We prioritize
              clarity, creativity, and meaningful content, believing that
              students learn best when they are inspired and engaged. Through
              our books, we strive to make a lasting impact on education, one
              story at a time.
            </p>
          </div>
        </section>

        {/* Teaching Styles Video Section */}
        <section id="videos" class="px-6 py-16 bg-gray-50">
          <div class="max-w-screen-lg mx-auto flex flex-col items-center">
            {
              /* <h2 class="text-3xl font-semibold mb-8 text-gray-900">
              Teaching Styles in Urdu
            </h2> */
            }
            <div class="w-full max-w-3xl mb-8">
              <iframe
                class="w-full h-64 md:h-96 rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/CmLss-EN-zE"
                title="Teaching Styles in Urdu"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              >
              </iframe>
            </div>
            <p class="text-lg text-gray-700 max-w-3xl leading-relaxed text-center">
              Discover various teaching methods tailored to diverse learning
              preferences. This video provides insights into educational
              strategies that enhance understanding and engagement, all
              explained in Urdu for greater accessibility.
            </p>
            {/* YouTube Call-to-Action */}
            <a
              href="https://www.youtube.com/channel/UChAb4Ulw3KeDllUj4lV_w6w"
              target="_blank"
              class="mt-8 inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-full transition duration-300"
            >
              Subscribe to our YouTube Channel
            </a>
          </div>
        </section>

        {/* About Tufail Publishers Section */}
        <section
          id="about"
          class="relative bg-cover bg-center bg-no-repeat text-white py-32"
          style={{ backgroundImage: "url('/book_banner.jpg')" }}
        >
          <div class="absolute inset-0 bg-blue-900 opacity-75"></div>
          <div class="relative z-10 max-w-screen-md mx-auto px-6 text-center">
            <h2 class="text-3xl font-semibold mb-6">
              About Tufail Publishers
            </h2>
            <p class="text-lg leading-relaxed">
              Tufail Publishers is driven by a commitment to quality and a
              passion for impactful storytelling. Our mission is to inspire a
              love for learning by creating books that blend informative content
              with engaging visuals. Each publication is crafted to meet the
              needs of students and educators, providing tools for meaningful
              and effective learning experiences.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
