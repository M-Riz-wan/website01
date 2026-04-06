export default function Newsletter() {
  return (
    <section className="py-24 bg-amber-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            Join Our Fragrance Community
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Subscribe to receive exclusive offers, new arrivals, and fragrance tips from our experts
          </p>

          <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white border-2 border-gray-200 focus:border-gray-900 outline-none transition-colors text-gray-900"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gray-900 text-white text-sm tracking-widest hover:bg-gray-800 transition-colors whitespace-nowrap"
            >
              SUBSCRIBE
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
