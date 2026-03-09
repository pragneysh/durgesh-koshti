export default function Programs() {
  const programs = [
    {
      title: "Yoga Classes",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    },
    {
      title: "Meditation Sessions",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    },
    {
      title: "Motivational Workshops",
      image:
        "https://images.unsplash.com/photo-1511988617509-a57c8a288659",
    },
    {
      title: "Student Guidance",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      title: "Stress Management",
      image:
        "https://images.unsplash.com/photo-1508672019048-805c876b67e2",
    },
    {
      title: "Life Coaching",
      image:
        "https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl text-center font-semibold mb-12">
          Programs & Sessions
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >

              <img
                src={program.image}
                alt={program.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

                <h3 className="text-white text-xl font-semibold text-center px-4">
                  {program.title}
                </h3>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}