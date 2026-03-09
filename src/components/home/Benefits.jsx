import SectionTitle from "../common/SectionTitle";
import yoga from "../../../public/assets/yoga-girl1.png";

export default function Benefits() {
  const benefits = [
    {
      title: "Body & Mind Balance",
      desc: "Yoga helps bring harmony between body and mind improving focus and relaxation.",
    },
    {
      title: "Yoga Months Challenge",
      desc: "Build a daily habit of yoga and experience physical and mental transformation.",
      highlight: true,
    },
    {
      title: "Healthy Daily Life",
      desc: "Regular yoga practice improves flexibility, posture, and overall health.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 pb-16">
      <SectionTitle title="Benefits of Yoga" />

      <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
        
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src={yoga}
            alt="Yoga"
            className="max-h-[420px] object-contain drop-shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-8">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="flex gap-5 items-start bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition"
            >
              
              {/* Icon */}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full text-lg
                ${
                  item.highlight
                    ? "bg-[#5BA69A] text-white"
                    : "border border-[#5BA69A] text-[#5BA69A]"
                }`}
              >
                {item.highlight ? "✓" : i + 1}
              </div>

              {/* Text */}
              <div>
                <h4
                  className={`font-semibold text-lg ${
                    item.highlight ? "text-[#5BA69A]" : "text-gray-800"
                  }`}
                >
                  {item.title}
                </h4>

                <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}