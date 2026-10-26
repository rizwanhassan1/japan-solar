
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-black text-green-400">
            JAPAN SOLAR HOUSE
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Sargodha Faislabad Road, Chiniot.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5 text-sm">
          <a href="https://wa.me/923000000000" target="_blank" rel="noreferrer"
            className="hover:text-green-400">WhatsApp</a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"
            className="hover:text-green-400">Facebook</a>
          <a href="mailto:your-email@gmail.com"
            className="hover:text-green-400">Gmail</a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"
            className="hover:text-green-400">YouTube</a>
        </div>

        <p className="text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Japan Solar House
        </p>
      </div>
    </footer>
  );
}
