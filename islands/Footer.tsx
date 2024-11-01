import { useSignal } from "@preact/signals";

export default function Footer() {
    return (
        <footer class="bg-gray-800 text-white py-8">
            <div class="container mx-auto px-4">
                <div class="flex flex-wrap">
                    {/* Company Information */}
                    <div class="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 class="text-xl font-bold mb-4">
                            Tufail Publishers
                        </h2>
                        <p>
                            1st Floor Al-Fazal Market<br />
                            17-Urdu Bazaar, Lahore
                        </p>
                    </div>
                    {/* Contact Information */}
                    <div class="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 class="text-xl font-bold mb-4">
                            Contact Information
                        </h2>
                        <p>Phone: +92-42-37234474</p>
                        <p>Cell: 0300-8525707, 0333-8525707</p>
                        <p>
                            Email:{" "}
                            <a
                                href="mailto:info@tufailpublishers.com"
                                class="text-blue-400 hover:underline"
                            >
                                info@tufailpublishers.com
                            </a>
                        </p>
                    </div>
                    {/* Social Media Links */}
                    <div class="w-full md:w-1/3">
                        <h2 class="text-xl font-bold mb-4">Follow Us</h2>
                        <div class="flex space-x-4">
                            <a href="#" class="text-gray-400 hover:text-white">
                                {/* Replace with actual icons */}
                                <svg
                                    class="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="..." />
                                </svg>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white">
                                <svg
                                    class="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="..." />
                                </svg>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white">
                                <svg
                                    class="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="..." />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="mt-8 text-center text-gray-500">
                    &copy; {new Date().getFullYear()}{" "}
                    Tufail Publishers. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
