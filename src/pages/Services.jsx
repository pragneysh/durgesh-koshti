import SectionTitle from "../components/common/SectionTitle";

export default function Services() {
  const services = [
    {
      title: "Personal Yoga Training",
      description:
        "One-on-one yoga sessions tailored to your body, flexibility level, and health goals.",
      icon: "🧘",
    },
    {
      title: "Group Yoga Classes",
      description:
        "Practice yoga in a supportive group environment that builds motivation and energy.",
      icon: "👥",
    },
    {
      title: "Meditation & Mindfulness",
      description:
        "Guided meditation sessions to reduce stress, improve focus, and achieve inner peace.",
      icon: "🌿",
    },
    {
      title: "Online Yoga Coaching",
      description:
        "Attend live online yoga classes from anywhere and stay consistent with your practice.",
      icon: "💻",
    },
    {
      title: "Therapeutic Yoga",
      description:
        "Special yoga practices designed to help with back pain, posture issues, and recovery.",
      icon: "💚",
    },
    {
      title: "Beginner Yoga Program",
      description:
        "Perfect for beginners starting their yoga journey with basic poses and breathing.",
      icon: "✨",
    },
  ];

  return (
    <section className="section-padding bg-accent min-h-screen">
      <div className="max-w-6xl mx-auto">

        <SectionTitle
          title="Our Yoga Services"
          subtitle="Helping you achieve balance, strength and inner peace"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 text-center"
            >
              <div className="text-4xl mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-primary mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}