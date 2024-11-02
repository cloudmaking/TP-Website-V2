// routes/[page].tsx
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import QRCode from "qrcode";

interface PriceData {
    [code: string]: string;
}

export const handler: Handlers = {
    async GET(req, ctx) {
        const CSV_Data_Link =
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vQRqmPhuS-FBBytaIeBeIbRen-LDKw8beNMh295EGKCVthQAGQ4g6Q5SCJ_5HuKm59xewQyTFmNfb0_/pub?output=csv";

        try {
            const response = await fetch(CSV_Data_Link);
            const csvText = await response.text();

            const prices: PriceData = {};
            csvText.split("\n").forEach((line) => {
                const [code, price] = line.split(",");
                if (code && price) {
                    prices[code.trim()] = price.trim();
                }
            });

            const page = ctx.params.page;
            if (prices[page]) {
                // Generate QR code on the server
                const url = new URL(req.url).href;
                const qrCodeDataUrl = await QRCode.toDataURL(url, {
                    width: 128,
                    margin: 1,
                    color: {
                        dark: "#000000",
                        light: "#ffffff",
                    },
                });

                return ctx.render({
                    price: prices[page],
                    qrCode: qrCodeDataUrl,
                });
            } else {
                return ctx.renderNotFound();
            }
        } catch (error) {
            console.error("Error fetching CSV:", error);
            return new Response("Internal Server Error", { status: 500 });
        }
    },
};

export default function Page(
    { data }: PageProps<{ price?: string; qrCode?: string }>,
) {
    return (
        <>
            <Head>
                <title>
                    {data?.price ? `Price = ${data.price}` : "Page Not Found"}
                </title>
                <meta
                    name="description"
                    content="Check the price for various items offered by Tufail Publishers. Contact us for more information."
                />
            </Head>
            <div class="bg-gray-100 min-h-screen flex flex-col items-center py-8 px-4">
                <section class="w-full max-w-screen-md mx-auto bg-white rounded-lg shadow-md p-8 text-center">
                    <h1 class="text-4xl font-bold mb-4">
                        {data?.price
                            ? `Price: ${data.price}`
                            : "Page Not Found"}
                    </h1>

                    {data?.price
                        ? (
                            <>
                                <p class="text-gray-700 text-md mb-8">
                                    The price for the requested item is shown
                                    above. For more information, please reach
                                    out to us.
                                </p>

                                {/* QR Code Display - Now shown when price exists */}
                                {data.qrCode && (
                                    <div class="flex flex-col items-center justify-center mb-8">
                                        <img
                                            src={data.qrCode}
                                            alt="QR Code for this page"
                                            class="w-48 h-48 mb-2" // Increased size
                                        />
                                        <p class="text-sm text-gray-600">
                                            Scan to share this page
                                        </p>
                                    </div>
                                )}
                            </>
                        )
                        : (
                            <div class="text-gray-700 text-md mb-8">
                                <p>
                                    The requested item could not be found.
                                    Please check the code and try again.
                                </p>
                                <p>
                                    If you need assistance, feel free to contact
                                    us below.
                                </p>
                            </div>
                        )}

                    {/* Contact Section */}
                    <div class="bg-green-800 text-white py-6 rounded-lg mt-8">
                        <div class="flex flex-col md:flex-row items-center justify-center text-center md:text-left px-4">
                            <div class="mb-4 md:mb-0 md:mr-4 flex justify-center">
                                <img
                                    src="/ceo.jpg"
                                    alt="CEO of Tufail Publishers"
                                    class="w-24 h-32 md:w-32 md:h-40 object-cover rounded-md"
                                />
                            </div>
                            <div>
                                <h2 class="text-2xl font-bold">
                                    Contact Tufail Publishers
                                </h2>
                                <p class="flex items-center justify-center md:justify-start mb-2 mt-4">
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
                                        target="_blank"
                                        class="text-blue-400 hover:underline"
                                    >
                                        Al-Fazal Market, Urdu Bazaar, Lahore
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
