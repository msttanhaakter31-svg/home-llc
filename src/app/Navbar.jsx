export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo / Name */}
        <div className="text-xl tracking-widest font-semibold text-black uppercase">
          AURA.
        </div>

        {/* Action Link / Button */}
        <div>
          <a
            href="#contact"
            className="text-sm font-medium text-black underline underline-offset-4 decoration-1 hover:opacity-75 transition-opacity"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
}
