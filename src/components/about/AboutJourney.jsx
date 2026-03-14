import { useEffect, useState } from "react";

export default function AboutJourney({ baseURL }) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`${baseURL}/AboutJourney`)
      .then((res) => res.json())
      .then((data) => setData(data[0]));
  }, [baseURL]);

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-12 items-center">
      <img
        src={data.image}
        alt="Yoga practice"
        className="rounded-2xl shadow-lg"
      />

      <div>
        <h2 className="text-3xl font-bold text-[#374151] mb-6">{data.title}</h2>

        <p className="text-gray-600 mb-4 leading-relaxed">
          {data.description1}
        </p>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {data.description2}
        </p>
        <p className="text-gray-600 leading-relaxed">{data.description3}</p>
      </div>
    </div>
  );
}
