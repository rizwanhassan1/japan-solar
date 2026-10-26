
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5">
        <Link href="/" className="text-xl font-black sm:text-2xl">
           <span className="text-green-400">JAPAN SOLAR HOUSE</span>
        </Link>

        <nav className="flex flex-wrap gap-4 text-sm font-semibold text-slate-300 sm:gap-6">
          <Link href="/" className="transition hover:text-green-400">
            Home
          </Link>
          <Link href="/products" className="transition hover:text-green-400">
            Products
          </Link>
          <Link href="/about" className="transition hover:text-green-400">
            About Us
          </Link>
          <Link href="/contact" className="transition hover:text-green-400">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
