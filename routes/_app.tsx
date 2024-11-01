import { PageProps } from "$fresh/server.ts";
import NavBar from "../islands/NavBar.tsx";
import Footer from "../islands/Footer.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>TP-Website-V2</title>
        <link rel="stylesheet" href="/styles.css" />
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
