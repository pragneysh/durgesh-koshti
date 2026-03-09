import SectionTitle from "../common/SectionTitle";

export default function Services() {
  return (
    <section className="bg-[#F5F5F5] py-16 px-4 md:px-12">

      {/* Section Title */}
      <SectionTitle
        title="The Mission of Durgesh Yoga"
        subtitle="Helping people live healthier and peaceful lives"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center mt-12">

        {/* Left Content */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#374151] mb-4">
            About Our Mission
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6">
            Our mission is to guide individuals toward a balanced and
            peaceful life through yoga, meditation, and mindful living.
            We focus on improving physical health, mental clarity,
            and inner harmony for people of all ages.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            Through personal guidance and motivational sessions,
            we help students and individuals build confidence,
            discipline, and a healthier lifestyle.
          </p>

          <button className="bg-[#5BA69A] text-white px-8 py-3 rounded-full hover:bg-[#E9B7B7] hover:text-[#374151] transition">
            READ MORE
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1545389336-cf090694435e"
            alt="Yoga Meditation"
            className="rounded-xl shadow-lg w-full max-w-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
}