import { User, LineChart, Target, Globe } from "lucide-react";

export default function StrategicParticipation() {
  return (
    <section className="bg-[#F5F5F5] py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-error text-center mb-6">
          Strategic Participation
        </h2>
        <p className="text-center text-gray-700 max-w-4xl mx-auto mb-16 text-base md:text-lg">
          ARK Trinity is currently engaging with a limited number of experienced strategic stakeholders who are interested in participating in early-stage AI-enabled venture development.
        </p>

        <h3 className="text-center font-bold text-black mb-8 text-lg">
          Participation discussions are:
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { num: "01", text: "Conducted privately" },
            { num: "02", text: "Structured via\nformal documentation" },
            { num: "03", text: "Subject to\neligibility review" },
            { num: "04", text: "Not publicly offered" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 flex items-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <span className="text-4xl md:text-5xl font-bold text-error mr-4">{item.num}</span>
              <span className="font-bold text-black leading-tight text-sm whitespace-pre-line">{item.text}</span>
            </div>
          ))}
        </div>

        <h3 className="text-center font-bold text-black mb-8 text-lg">
          We value partners who bring:
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: User, text: "Entrepreneurial\nexperience" },
            { icon: LineChart, text: "Strategic insight" },
            { icon: Target, text: "Long-term\nperspective" },
            { icon: Globe, text: "Regional\nnetwork access" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 shrink-0 flex items-center justify-center">
                <item.icon className="w-12 h-12 text-error stroke-[1.5]" />
              </div>
              <span className="font-bold text-black leading-tight text-sm whitespace-pre-line">{item.text}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-700 text-sm md:text-base">
          Engagement is by invitation or private inquiry only.
        </p>
      </div>
    </section>
  );
}
