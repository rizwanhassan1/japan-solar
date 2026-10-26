
export default function Products() {
  return (
    <main className="bg-slate-950 px-6 py-16 text-white">

      <h1 className="mb-4 text-center text-4xl font-black">
        Our Products
      </h1>

      <p className="mb-12 text-center text-white-400">
        Solar solutions for your needs.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {/* IMAGE 1 */}
        <div className="rounded-xl bg-slate-900 p-4">
          <img src="/14.jpg" alt="Solar Panels"
            className="h-85 w-full rounded-lg object-cover" />
          <h2 className="mt-4 text-xl font-bold">Solar Panels</h2>
          <p className="mt-2 text-slate-400">High-quality solar panels.</p>
          <a href="/contact"
            className="mt-4 inline-block rounded-lg bg-green-500 px-5 py-3 font-bold text-black">
            Contact Us →
          </a>
        </div>

        {/* IMAGE 2 */}
        <div className="rounded-xl bg-slate-900 p-4">
          <img src="/41.jpg" alt="Solar Inverters"
            className="h-85 w-full rounded-lg object-cover" />
          <h2 className="mt-4 text-xl font-bold">Solar Inverters</h2>
          <p className="mt-2 text-slate-400">Reliable solar inverters.</p>
          <a href="/contact"
            className="mt-4 inline-block rounded-lg bg-green-500 px-5 py-3 font-bold text-black">
            Contact Us →
          </a>
        </div>

        {/* IMAGE 3 */}
        <div className="rounded-xl bg-slate-900 p-4">
          <img src="/51.jpg" alt="Solar Batteries"
            className="h-85 w-full rounded-lg object-cover" />
          <h2 className="mt-4 text-xl font-bold">Solar Batteries</h2>
          <p className="mt-2 text-slate-400">Store your solar energy.</p>
          <a href="/contact"
            className="mt-4 inline-block rounded-lg bg-green-500 px-5 py-3 font-bold text-black">
            Contact Us →
          </a>
        </div>

        {/* IMAGE 4 */}
        <div className="rounded-xl bg-slate-900 p-4">
          <img src="/74.jpg" alt="Solar Systems"
            className="h-85 w-full rounded-lg object-cover" />
          <h2 className="mt-4 text-xl font-bold">Solar Systems</h2>
          <p className="mt-2 text-slate-400">Complete solar solutions.</p>
          <a href="/contact"
            className="mt-4 inline-block rounded-lg bg-green-500 px-5 py-3 font-bold text-black">
            Contact Us →
          </a>
        </div>

        {/* IMAGE 5 */}
        <div className="rounded-xl bg-slate-900 p-4">
          <img src="/85.jpg" alt="Solar Accessories"
            className="h-85 w-full rounded-lg object-cover" />
          <h2 className="mt-4 text-xl font-bold">Solar Accessories</h2>
          <p className="mt-2 text-slate-400">Solar accessories and parts.</p>
          <a href="/contact"
            className="mt-4 inline-block rounded-lg bg-green-500 px-5 py-3 font-bold text-black">
            Contact Us →
          </a>
        </div>

        {/* IMAGE 6 */}
        <div className="rounded-xl bg-slate-900 p-4">
          <img src="/23.jpg" alt="Solar Installation"
            className="h-85 w-full rounded-lg object-cover" />
          <h2 className="mt-4 text-xl font-bold">Solar Installation</h2>
          <p className="mt-2 text-slate-400">Solar installation solutions.</p>
          <a href="/contact"
            className="mt-4 inline-block rounded-lg bg-green-500 px-5 py-3 font-bold text-black">
            Contact Us →
          </a>
        </div>

      </div>
    </main>
  );
}
