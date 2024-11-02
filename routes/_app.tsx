// _app.tsx
import { PageProps } from "$fresh/server.ts";
import NavBar from "../islands/NavBar.tsx";
import Footer from "../islands/Footer.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>
          Tufail Publishers - Quality Educational Books and Resources
        </title>
        <meta
          name="description"
          content="Tufail Publishers provides high-quality educational books and resources, making learning accessible and enjoyable for students in Pakistan."
        />
        <meta
          name="keywords"
          content="Tufail Publishers, educational books, learning resources, Pakistan, textbooks, quality education"
        />

        <link rel="icon" href="/testlogo.png" type="image/x-icon" />
        <link rel="stylesheet" href="/styles.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOMjRLjz0AI5gAO7yC3h9z2/RSkUBItlkmBq4ZLZ"
          crossorigin="anonymous"
        />
      </head>
      <body>
        <NavBar />
        <main class="flex-grow">
          <Component />
        </main>
        <Footer />
      </body>
    </html>
  );
}
