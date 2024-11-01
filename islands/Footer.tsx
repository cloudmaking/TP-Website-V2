export default function Footer() {
    return (
        <footer class="bg-transparent text-gray-500 py-2 bottom-0 w-full text-center text-xs">
            <div class="container mx-auto px-4">
                <p>
                    &copy; {new Date().getFullYear()}{" "}
                    Tufail Publishers. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
