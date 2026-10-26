
export default function Contact() {
  return (
    <main className="bg-slate-950 min-h-screen px-5 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="font-bold tracking-[0.25em] text-green-400">
            GET IN TOUCH
          </p>
          <h1 className="mt-3 text-4xl text-green-400 font-black md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-green-400">
            We are happy to help you with your solar needs.
          </p>
        </div>

        <div className="grid items-center gap-10 rounded-3xl border border-white/10 bg-slate-900 p-7 md:grid-cols-2 md:p-10">
          <div className="text-center">
            <img
              src="/owner.jpg"
              alt="Japan Solar House owner"
              className="mx-auto h-52 w-52 rounded-full border-4 border-green-400 bg-slate-800 object-cover"
            />
            <h2 className="mt-6 text-3xl font-bold text-blue-500">Awais Aslam</h2>
            <p className="mt-2 font-semibold text-green-400">
              CEO — Japan Solar House
            </p>
            <p className="mt-4 leading-7 text-green-400">
              Contact us for solar products, prices and installation information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Connect With Us</h2>

            <div className="mt-6 grid gap-4">
              <a href="https://wa.me/923000000000"
                target="_blank" rel="noreferrer"
                className="rounded-xl bg-green-600 px-5 py-4 font-bold transition hover:bg-green-500">
                WhatsApp Us ↗
              </a>

              <a href="https://www.facebook.com/"
                target="_blank" rel="noreferrer"
                className="rounded-xl bg-blue-600 px-5 py-4 font-bold transition hover:bg-blue-500">
                Facebook ↗
              </a>

              <a href="mailto:your-email@gmail.com"
                className="rounded-xl bg-green-600 px-5 py-4 font-bold transition hover:bg-green-500">
                Send Email ↗
              </a>

              <a href="https://www.youtube.com/"
                target="_blank" rel="noreferrer"
                className="rounded-xl bg-red-600 px-5 py-4 font-bold transition hover:bg-red-500">
                YouTube Channel ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
