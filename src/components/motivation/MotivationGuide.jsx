import { FaChalkboardTeacher, FaUserGraduate, FaBrain } from "react-icons/fa";

export default function MotivationGuide() {
  const items = [
    {
      icon: <FaChalkboardTeacher size={30} />,
      title: "Motivational Sessions",
      text: "Inspiring talks for students and professionals to build confidence and stay focused on their goals.",
    },
    {
      icon: <FaUserGraduate size={30} />,
      title: "Student Mentorship",
      text: "Guidance for students to improve concentration, develop study habits, and choose the right career path.",
    },
    {
      icon: <FaBrain size={30} />,
      title: "Mind & Discipline",
      text: "Combining yoga with mental training to improve discipline, focus, and emotional balance.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl text-center font-semibold mb-12">
          Motivation & Student Guidance
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {items.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-md hover:shadow-xl transition text-center"
            >
              <div className="text-[#5BA69A] flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}