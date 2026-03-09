import SectionTitle from "../common/SectionTitle";

export default function YogaClasses() {
  const classes = [
    {
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
      title: "Morning Yoga",
      desc: "Start your day with calm energy and flexibility.",
    },
    {
      img: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
      title: "Meditation Session",
      desc: "Improve mental clarity and inner peace.",
    },
    {
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
      title: "Power Yoga",
      desc: "Strengthen your body and build stamina.",
    },
    {
      img: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0",
      title: "Group Yoga",
      desc: "Practice yoga together and stay motivated.",
    },
    {
      img: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3",
      title: "Relaxation Yoga",
      desc: "Release stress and improve breathing.",
    },
    {
      img: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7",
      title: "Advanced Yoga",
      desc: "Challenge yourself with advanced poses.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <SectionTitle
        title="Yoga Classes"
        subtitle="Explore different yoga sessions designed for mind, body, and soul."
      />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {classes.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Hover Overlay */}
            <div
              className="
              absolute inset-0 m-5 rounded-xl
              bg-[#374151]/90
              flex flex-col items-center justify-center
              text-white p-5 text-center
              opacity-0 scale-110
              group-hover:opacity-100 group-hover:scale-100
              transition-all duration-500
              "
            >
              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>

              <p className="text-sm opacity-90 mb-4">
                {item.desc}
              </p>

              <button className="border border-white px-5 py-1.5 text-sm rounded-full hover:bg-white hover:text-[#5BA69A] transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}