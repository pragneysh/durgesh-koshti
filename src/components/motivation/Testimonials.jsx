import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import beach from "../../../public/assets/beach.jpg";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      "https://opensheet.elk.sh/1G52Euo-LvS0bJgx7JsdXSR4RTmLsmnhbX0JE2FsEO0A/What-People-Say",
    )
      .then((res) => res.json())
      .then((data) => {
        const rows = data.map((row) => ({
          name: row.Name,
          role: row.Role,
          text: row.Text,
          date: row.Date,
        }));

        setReviews(rows);
      });
  }, []);

  return (
    <section
      className="relative py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${beach})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16 text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            What People Say
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Experiences shared by students and clients who have practiced yoga,
            attended sessions, and received mentorship.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur p-10 rounded-xl shadow-xl text-center transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#5BA69A] flex items-center justify-center text-white text-xl font-semibold">
                  {review.name?.charAt(0)}
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 text-yellow-400 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Role */}
              <h3 className="text-lg font-semibold text-[#374151] mb-3">
                {review.role}
              </h3>

              {/* Review */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Author */}
              <p className="text-sm text-gray-500">
                {review.name} · {review.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
