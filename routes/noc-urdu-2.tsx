// routes/image-page.tsx
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import QRCode from "qrcode";
import { useSignal } from "@preact/signals";

export const handler: Handlers = {
    async GET(req, ctx) {
        try {
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
                qrCode: qrCodeDataUrl,
            });
        } catch (error) {
            console.error("Error generating QR code:", error);
            return new Response("Internal Server Error", { status: 500 });
        }
    },
};

export default function ImagePage(
    { data }: PageProps<{ qrCode?: string }>,
) {
    return (
        <>
            <Head>
                <title>Clickable Image</title>
                <meta
                    name="description"
                    content="A page with a certificate image and a QR code."
                />
            </Head>
            <div class="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-8 px-4">
                <section class="w-full max-w-screen-md mx-auto bg-white rounded-lg shadow-md p-8 text-center flex flex-col justify-center">
                    <div class="flex justify-center">
                        <img
                            src="/noc-urdu-2.jpeg"
                            alt="Clickable Image"
                            class="object-cover rounded-md  hover:shadow-lg"
                        />
                    </div>
                    {data?.qrCode && (
                        <div class="flex flex-col items-center justify-center mt-8">
                            <img
                                src={data.qrCode}
                                alt="QR Code for this page"
                                class="w-48 h-48 mb-2"
                            />
                            <p class="text-sm text-gray-600">
                                Scan to share this page
                            </p>
                        </div>
                    )}
                </section>
            </div>
        </>
    );
}