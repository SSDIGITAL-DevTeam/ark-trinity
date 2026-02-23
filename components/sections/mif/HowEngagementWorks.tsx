export default function HowEngagementWorks() {
  const steps1 = [
    { num: "01", text: "Private introductory\ndiscussion" },
    { num: "02", text: "Strategic alignment\nreview" },
    { num: "03", text: "Confidential information\nsharing" },
  ];

  const steps2 = [
    { num: "04", text: "Structured documentation\n(where applicable)" },
    { num: "05", text: "Long-term collaboration\nframework" },
  ];

  return (
    <section className="bg-[#F5F5F5] py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-error text-center mb-12">
          How Engagement Works
        </h2>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto mb-6">
          {steps1.map((step, idx) => (
            <div key={idx} className="bg-white rounded-xl py-4 px-6 md:px-8 flex items-center flex-1 min-w-[260px] max-w-[320px] shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <span className="text-3xl md:text-4xl font-bold text-error mr-4">{step.num}</span>
              <span className="font-bold text-black text-xs sm:text-sm leading-tight whitespace-pre-line">{step.text}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto mb-16">
          {steps2.map((step, idx) => (
            <div key={idx} className="bg-white rounded-xl py-4 px-6 md:px-8 flex items-center flex-1 min-w-[280px] max-w-[340px] shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <span className="text-3xl md:text-4xl font-bold text-error mr-4">{step.num}</span>
              <span className="font-bold text-black text-xs sm:text-sm leading-tight whitespace-pre-line">{step.text}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-700 text-sm md:text-base">
          All engagements are conducted on a strictly private and non-public basis.
        </p>
      </div>
    </section>
  );
}
