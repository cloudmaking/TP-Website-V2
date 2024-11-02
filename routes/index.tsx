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
      </Head>

      <div class="bg-gray-100 text-gray-800">
        {/* CEO Message Section */}
        <section class="px-4 py-16 bg-[#e6c558] text-center">
          <div class="max-w-screen-md mx-auto flex flex-col items-center">
            <h1 class="text-4xl font-bold mb-6">A Message From Our CEO</h1>
            <iframe
              class="w-full max-w-md h-64 mx-auto mb-6 border rounded-lg"
              src="https://www.youtube.com/embed/sJFJaQHOuIk"
              title="CEO Message"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            >
            </iframe>
            <p class="text-md px-4 text-justify">
              At some point in the past, a small snippet of sunlight reflected
              on a glass window frame and inspired an idea to publish
              intriguing, creative, and lovely books. This idea burst into light
              and initiated what is now known as Tufail Publishers. We believe
              in quality first, where books are better understood when
              accompanied by pictures and stories. Publishing for us is about
              bringing out the best in students through our acclaimed
              educational books and innovative workbooks.
            </p>
          </div>
        </section>

        {/* Teaching Styles Video Section */}
        <section class="px-4 py-16 bg-white text-center">
          <div class="max-w-screen-md mx-auto flex flex-col items-center">
            <h2 class="text-3xl font-semibold mb-6">
              4 Teaching Styles in Urdu
            </h2>
            <iframe
              class="w-full max-w-md h-64 mx-auto mb-6 border rounded-lg"
              src="https://www.youtube.com/embed/CmLss-EN-zE"
              title="4 Teaching Styles in Urdu"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            >
            </iframe>
            <p class="text-md px-4 text-justify">
              Discover four main teaching styles used in educational
              environments, explained in Urdu. This video covers diverse methods
              that cater to various learning preferences, providing insights
              into effective teaching strategies.
            </p>
          </div>
          {/* YouTube Call-to-Action */}
          <p class="mt-6 text-md text-gray-700 px-4 text-center">
            For more great training videos like this,{" "}
            <a
              href="https://www.youtube.com/channel/UChAb4Ulw3KeDllUj4lV_w6w"
              target="_blank"
              class="text-blue-500 hover:underline"
            >
              subscribe to our YouTube channel
            </a>{" "}
            and stay updated on new resources.
          </p>
        </section>

        {/* About Tufail Publishers Section */}
        <section
          class="relative bg-cover bg-center bg-no-repeat text-center text-white py-16"
          style={{ backgroundImage: "url('/book_banner.jpg')" }}
        >
          <div class="bg-black bg-opacity-50 py-8 px-4">
            <div class="max-w-screen-md mx-auto">
              <h2 class="text-3xl font-semibold mb-4">
                About Tufail Publishers
              </h2>
              <p class="text-md text-justify">
                Tufail Publishers is committed to quality first. We believe in
                the power of storytelling and illustrations to enhance
                understanding and engagement. Our mission is to foster a love
                for learning through beautifully crafted books and innovative
                educational resources that bring out the best in students.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
