import { useEffect, useState } from "react";
import {
  FaChalkboardTeacher,
  FaUserGraduate,
  FaBrain,
  FaHeartbeat,
  FaSpa,
} from "react-icons/fa";
import { MdSelfImprovement } from "react-icons/md";

export default function MotivationGuide() {

  const [items, setItems] = useState([]);

  const iconMap = {
    MdSelfImprovement: <MdSelfImprovement size={35} />,
    FaChalkboardTeacher: <FaChalkboardTeacher size={30} />,
    FaUserGraduate: <FaUserGraduate size={30} />,
    FaBrain: <FaBrain size={30} />,
    FaHeartbeat: <FaHeartbeat size={30} />,
    FaSpa: <FaSpa size={30} />,
  };

  useEffect(() => {
    fetch(
      "https://opensheet.elk.sh/1G52Euo-LvS0bJgx7JsdXSR4RTmLsmnhbX0JE2FsEO0A/Motivation-&-Student-Guidance"
    )
      .then((res) => res.json())
      .then((data) => {

        const rows = data.map((row) => ({
          icon: iconMap[row.Icon],
          title: row.Title,
          text: row.Description,
        }));

        setItems(rows);
      });
  }, []);

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

              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}