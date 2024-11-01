export default function Home() {
  return (
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
          <p class="text-lg px-4">
            At some point in the past, a small snippet of sunlight reflected on
            a glass window frame and inspired an idea to publish intriguing,
            creative, and lovely books. An idea that burst into light and
            initiated the operation of what is now known as Tufail Publishers.
            Tufail Publishers believes in quality first – we believe that books
            are better understood when they are accompanied by pictures and
            stories. For us, publishing is all about bringing out the best in
            students, through our acclaimed educational books and innovative
            workbooks.
          </p>
        </div>
      </section>

      {/* Teaching Styles Video Section */}
      <section class="px-4 py-16 bg-white text-center">
        <div class="max-w-screen-md mx-auto flex flex-col items-center">
          <h2 class="text-3xl font-semibold mb-6">4 Teaching Styles in Urdu</h2>
          <iframe
            class="w-full max-w-md h-64 mx-auto mb-6 border rounded-lg"
            src="https://www.youtube.com/embed/CmLss-EN-zE"
            title="4 Teaching Styles in Urdu"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          >
          </iframe>
          <p class="text-lg px-4">
            Discover the four main teaching styles used in educational
            environments, explained in Urdu. This video covers diverse methods
            that cater to different learning preferences, providing insights
            into effective teaching strategies.
          </p>
        </div>
      </section>

      {/* About Tufail Publishers Section */}
      <section
        class="relative bg-cover bg-center bg-no-repeat text-center text-white py-16"
        style={{ backgroundImage: "url('/book_banner.jpg')" }}
      >
        <div class="bg-black bg-opacity-50 py-8 px-4">
          <div class="max-w-screen-md mx-auto">
            <h2 class="text-3xl font-semibold mb-4">About Tufail Publishers</h2>
            <p class="text-lg">
              Tufail Publishers is committed to quality first. We believe in the
              power of storytelling and illustrations to enhance understanding
              and engagement. Our mission is to foster a love for learning
              through beautifully crafted books and innovative educational
              resources that bring out the best in students.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
