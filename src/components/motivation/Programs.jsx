import { useEffect, useState } from "react";

export default function Programs() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetch(
      "https://opensheet.elk.sh/1G52Euo-LvS0bJgx7JsdXSR4RTmLsmnhbX0JE2FsEO0A/Programs-&-Sessions",
    )
      .then((res) => res.json())
      .then((data) => {
        const rows = data.map((row) => ({
          title: row.Title,
          image: row.Image,
        }));

        setPrograms(rows);
      });
  }, []);

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
