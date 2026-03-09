export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      text: "The guidance sessions helped me stay focused on my studies and improve my confidence.",
    },
    {
      name: "Neha Patel",
      text: "Yoga classes helped me reduce stress and feel mentally peaceful.",
    },
    {
      name: "Amit Verma",
      text: "Motivational talks were extremely inspiring and helped me set clear goals.",
    },
  ];

  return (
    <section className="py-20 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl text-center font-semibold mb-12">
          What People Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-md"
            >
              <p className="text-gray-600 mb-4">
                "{review.text}"
              </p>

              <h4 className="font-semibold text-[#5BA69A]">
                {review.name}
              </h4>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}