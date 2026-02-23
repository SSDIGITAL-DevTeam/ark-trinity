const VALUES_ITEMS = [
  {
    title: "Capital Consciousness",
    description: "We deploy capital responsibly to strengthen businesses, create durable value, and support long-term human and economic progress."
  },
  {
    title: "Authentic Intelligence (AI)",
    description: "We build and deploy AI with integrity. As automation scales, authenticity, accountability, and truth in intelligence become increasingly rare — and increasingly essential."
  },
  {
    title: "Digital Discipline",
    description: "We enforce strong digital foundations and operational integrity, enabling businesses to scale, execute, and monetise efficiently without compromising fundamentals."
  }
];

export default function CoreValues() {
  return (
    <section className="bg-[#F5F5F5] pb-16 md:pb-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Values
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-pretty hidden">
            The principles that guide our architecture of intelligent growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUES_ITEMS.map((value, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-error/10 rounded-full flex items-center justify-center mb-6">
                <div className="w-4 h-4 bg-error rounded-full" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-pretty">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
