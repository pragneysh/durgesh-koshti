import { useEffect, useState } from "react";

export default function MissionVision({ baseURL }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}/MissionVision`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [baseURL]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {items.map((item, index) => (
          <div key={index} className="p-8 bg-gray-50 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold text-[#374151] mb-4">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
