export default function Footer() {
  return (
    <footer className="w-full bg-[#fcfcfc] border-t border-gray-100 py-8 text-gray-500 text-xs">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <div>© 2024 Aura Studio. All rights reserved.</div>

        {/* Social Links */}
        <div className="flex items-center space-x-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            Dribbble
          </a>
        </div>
      </div>
    </footer>
  );
}
