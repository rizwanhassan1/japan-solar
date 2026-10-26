
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero Section */}
      <section className="grid items-center gap-10 overflow-hidden px-6 py-20 md:grid-cols-2 md:px-12 lg:px-20">

        {/* Hero Text */}
        <div>
          <p className="inline-block rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm font-semibold tracking-widest text-green-400">
            CLEAN ENERGY • BRIGHT FUTURE
          </p>

          {/* Animated Main Heading */}
          <h1 className="solar-heading mt-6 text-5xl font-black leading-tight tracking-tight sm:text-6xl md:text-7xl">
            <span className="solar-japan block">
              JAPAN
            </span>

            <span className="solar-house mt-2 block">
              SOLAR
            </span>

            <span className="solar-house block text-green-400">
              HOUSE
            </span>

            <span className="solar-line mt-6 block h-1.5 w-28 rounded-full bg-gradient-to-r from-green-400 to-emerald-200"></span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-slate-300 sm:text-lg">
            Welcome to Japan Solar House. Explore quality
            solar panels, inverters, batteries and smart energy
            solutions for a brighter and greener future.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#products"
              className="rounded-xl bg-green-400 px-7 py-4 font-bold text-slate-950 shadow-lg shadow-green-500/20 transition duration-300 hover:-translate-y-1 hover:bg-green-300 hover:shadow-green-400/40"
            >
              Explore Products →
            </a>

            <a
              href="/contact"
              className="rounded-xl border border-green-400/50 px-7 py-4 font-bold text-green-400 transition duration-300 hover:-translate-y-1 hover:bg-green-400 hover:text-slate-950"
            >
              Contact Us
            </a>
          </div>

          {/* Small Features */}
          <div className="mt-10 grid grid-cols-3 gap-3 border-t border-slate-800 pt-6">
            <div>
              <p className="text-xl font-bold text-green-400 sm:text-2xl">
                Quality
              </p>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                Products
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-green-400 sm:text-2xl">
                Smart
              </p>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                Energy
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-green-400 sm:text-2xl">
                Green
              </p>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                Future
              </p>
            </div>
          </div>
        </div>

        {/* Main Home Image */}
        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-green-400/10 blur-2xl"></div>

          <img
            src="/55.jpg"
            alt="Japan Solar House Solar Energy"
            className="relative h-72 w-full rounded-3xl border border-green-400/20 object-cover shadow-2xl transition duration-500 hover:scale-[1.02] sm:h-96 lg:h-[480px]"
          />

          <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-slate-950/80 p-4 backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7">
            <p className="text-lg font-bold text-green-400">
              Power Your Future
            </p>
            <p className="mt-1 text-sm text-slate-300">
              Clean, reliable and smart solar energy solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        className="px-6 py-20 md:px-12 lg:px-20"
      >
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="font-semibold tracking-[0.25em] text-green-400">
            OUR COLLECTION
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl">
            Our Solar Products
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            Discover modern solar products designed to deliver
            efficient energy and dependable performance.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-green-400"></div>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

          {/* Product 1 */}
          <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-green-400/60 hover:shadow-xl hover:shadow-green-500/10">
            <div className="overflow-hidden">
              <img
                src="/11.jpg"
                alt="Solar Panels"
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold text-green-400">
                SOLAR ENERGY
              </p>
              <h3 className="mt-2 text-2xl font-bold">
                Solar Panels
              </h3>
              <p className="mt-3 leading-7 text-slate-400">
                High-quality panels for clean and efficient power generation.
              </p>
              <a
                href="/products"
                className="mt-5 inline-block font-semibold text-green-400 transition hover:text-green-300"
              >
                Explore More →
              </a>
            </div>
          </div>

          {/* Product 2 */}
          <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-green-400/60 hover:shadow-xl hover:shadow-green-500/10">
            <div className="overflow-hidden">
              <img
                src="/11.jpeg"
                alt="Solar Inverters"
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold text-green-400">
                SMART POWER
              </p>
              <h3 className="mt-2 text-2xl font-bold">
                Solar Inverters
              </h3>
              <p className="mt-3 leading-7 text-slate-400">
                Reliable inverters to help convert solar power into usable electricity.
              </p>
              <a
                href="/products"
                className="mt-5 inline-block font-semibold text-green-400 transition hover:text-green-300"
              >
                Explore More →
              </a>
            </div>
          </div>

          {/* Product 3 */}
          <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-green-400/60 hover:shadow-xl hover:shadow-green-500/10">
            <div className="overflow-hidden">
              <img
                src="/852.jpg"
                alt="Solar Batteries"
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold text-green-400">
                ENERGY STORAGE
              </p>
              <h3 className="mt-2 text-2xl font-bold">
                Solar Batteries
              </h3>
              <p className="mt-3 leading-7 text-slate-400">
                Store energy for dependable power when you need it.
              </p>
              <a
                href="/products"
                className="mt-5 inline-block font-semibold text-green-400 transition hover:text-green-300"
              >
                Explore More →
              </a>
            </div>
          </div>

          {/* Product 4 */}
          <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-green-400/60 hover:shadow-xl hover:shadow-green-500/10">
            <div className="overflow-hidden">
              <img
                src="/741.jpg"
                alt="Solar Systems"
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold text-green-400">
                COMPLETE SOLUTIONS
              </p>
              <h3 className="mt-2 text-2xl font-bold">
                Solar Systems
              </h3>
              <p className="mt-3 leading-7 text-slate-400">
                Complete solar setups for modern homes and businesses.
              </p>
              <a
                href="/products"
                className="mt-5 inline-block font-semibold text-green-400 transition hover:text-green-300"
              >
                Explore More →
              </a>
            </div>
          </div>

          {/* Product 5 */}
          <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-green-400/60 hover:shadow-xl hover:shadow-green-500/10">
            <div className="overflow-hidden">
              <img
                src="/963.jpg"
                alt="Solar Accessories"
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold text-green-400">
                SOLAR ESSENTIALS
              </p>
              <h3 className="mt-2 text-2xl font-bold">
                Solar Accessories
              </h3>
              <p className="mt-3 leading-7 text-slate-400">
                Useful components and accessories for solar installations.
              </p>
              <a
                href="/products"
                className="mt-5 inline-block font-semibold text-green-400 transition hover:text-green-300"
              >
                Explore More →
              </a>
            </div>
          </div>

          {/* Product 6 */}
          <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-green-400/60 hover:shadow-xl hover:shadow-green-500/10">
            <div className="overflow-hidden">
              <img
                src="/123.jpeg"
                alt="Solar Installation"
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold text-green-400">
                PROFESSIONAL SERVICE
              </p>
              <h3 className="mt-2 text-2xl font-bold">
                Solar Installation
              </h3>
              <p className="mt-3 leading-7 text-slate-400">
                Solar installation solutions for your energy needs.
              </p>
              <a
                href="/contact"
                className="mt-5 inline-block font-semibold text-green-400 transition hover:text-green-300"
              >
                Contact Us →
              </a>
            </div>
          </div>

        </div>

        <div className="mt-12 text-center">
          <a
            href="/products"
            className="inline-block rounded-xl border border-green-400 px-8 py-4 font-bold text-green-400 transition duration-300 hover:bg-green-400 hover:text-slate-950"
          >
            View All Products →
          </a>
        </div>
      </section>

      {/* Call To Action */}
      <section className="px-6 pb-20 md:px-12 lg:px-20">
        <div className="rounded-3xl border border-green-400/20 bg-gradient-to-br from-green-950 via-slate-900 to-slate-950 px-6 py-12 text-center sm:px-12 sm:py-16">
          <p className="font-semibold tracking-widest text-green-400">
            MAKE THE SWITCH
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black sm:text-4xl md:text-5xl">
            A Brighter Future Starts With Solar Energy
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Explore our solar solutions and take the next step
            towards smarter, cleaner energy for your home or business.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-green-400 px-8 py-4 font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-green-300"
          >
            Get In Touch →
          </a>
        </div>
      </section>

      {/* Heading Animation CSS */}
      <style>{`
        .solar-heading {
          animation: solarEntrance 1s ease-out both;
        }

        .solar-japan {
          background: linear-gradient(
            90deg,
            #4ade80,
            #d1fae5,
            #22c55e,
            #86efac,
            #4ade80
          );
          background-size: 300% auto;
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
          filter: drop-shadow(0 0 18px rgb(34 197 94 / 20%));
          animation: solarGradient 5s linear infinite;
        }

        .solar-house {
          opacity: 0;
          animation: solarHouseReveal 1s ease-out forwards;
          animation-delay: 0.35s;
          text-shadow: 0 0 25px rgb(74 222 128 / 12%);
        }

        .solar-line {
          animation: solarLineReveal 1s ease-out both;
          animation-delay: 0.8s;
          box-shadow: 0 0 18px rgb(74 222 128 / 45%);
          transition: width 0.4s ease, box-shadow 0.4s ease;
        }

        .solar-heading:hover .solar-line {
          width: 190px;
          box-shadow: 0 0 28px rgb(74 222 128 / 70%);
        }

        @keyframes solarEntrance {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes solarGradient {
          from {
            background-position: 0% center;
          }
          to {
            background-position: 300% center;
          }
        }

        @keyframes solarHouseReveal {
          from {
            opacity: 0;
            transform: translateX(35px);
            letter-spacing: 8px;
          }
          to {
            opacity: 1;
            transform: translateX(0);
            letter-spacing: -0.025em;
          }
        }

        @keyframes solarLineReveal {
          from {
            opacity: 0;
            transform: scaleX(0);
            transform-origin: left;
          }
          to {
            opacity: 1;
            transform: scaleX(1);
            transform-origin: left;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .solar-heading,
          .solar-japan,
          .solar-house,
          .solar-line {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

    </main>
  );
}
