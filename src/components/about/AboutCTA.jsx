import { useEffect, useState } from "react";

export default function AboutCTA({ baseURL }) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`${baseURL}/AboutCTA`)
      .then((res) => res.json())
      .then((data) => setData(data[0]));
  }, [baseURL]);

  return (
    <section className="py-20 bg-[#5BA69A] text-center text-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">{data.title}</h2>

        <p className="mb-8">{data.subtitle}</p>

        <button className="bg-white text-[#374151] px-8 py-3 rounded-full font-medium hover:scale-105 transition">
          {data.button}
        </button>
      </div>
    </section>
  );
}
