
export default function About() {
  return (
    <main className="bg-slate-950 px-6 py-16 text-white">
      <section className="bg-gradient-to-br from-green-950 to-slate-950 px-5 py-20 text-center">
        <p className="font-bold tracking-[0.25em] text-green-400">OUR STORY</p>
        <h1 className="mt-4 text-4xl font-black md:text-6xl">
          About <span className="text-green-400">Japan Solar House</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
          We aim to help homes and businesses explore solar energy
          products and solutions for a brighter future.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=900"
          alt="Solar energy"
          className="h-80 w-full rounded-3xl object-cover"
        />

        <div>
          <h2 className="text-3xl font-black">Who We Are</h2>
          <p className="mt-5 leading-8 text-slate-300">
            Japan Solar House is a solar energy business focused on
            helping customers find solar panels, inverters, batteries
            and related equipment.
          </p>
          <h2 className="mt-8 text-2xl font-bold text-green-400">
            Our Mission
          </h2>
          <p className="mt-3 leading-8 text-slate-300">
            Our goal is to provide helpful product information and
            customer support for people interested in solar energy.
          </p>
          <a href="/contact"
            className="mt-7 inline-block rounded-xl bg-green-500 px-6 py-3 font-bold text-slate-950 transition hover:bg-green-300">
            Contact Us →
          </a>
        </div>
      </section>
    </main>
  );
}
