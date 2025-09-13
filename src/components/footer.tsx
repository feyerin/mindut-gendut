export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-600">
        {/* Brand */}
        <p className="font-semibold text-lg">MyBrand © {new Date().getFullYear()}</p>

        {/* Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            Instagram
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            TikTok
          </a>
          <a href="/contact" className="hover:text-black">Contact</a>
        </div>
      </div>
    </footer>
  );
}