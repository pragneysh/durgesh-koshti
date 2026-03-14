import { useEffect, useState } from "react";
import SectionTitle from "../common/SectionTitle";

export default function YogaClasses() {

  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(
      "https://opensheet.elk.sh/1NC7bxiALAsHAq5PnpxOVYkSh3bKNDZlEB5GzMTHzISA/YogaClasses"
    )
      .then((res) => res.json())
      .then((data) => {
        const rows = data.map((row) => ({
          img: row.Img,
          title: row.Title,
          desc: row.Desc,
        }));

        setClasses(rows);
      });
  }, []);

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
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
            />

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
              <h4 className="font-semibold text-lg mb-2">
                {item.title}
              </h4>

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