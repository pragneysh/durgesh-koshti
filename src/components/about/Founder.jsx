import { useEffect, useState } from "react";

export default function Founder({ baseURL }) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`${baseURL}/Founder`)
      .then((res) => res.json())
      .then((data) => setData(data[0]));
  }, [baseURL]);

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <img
          src={data.image}
          alt={data.name}
          className="w-40 h-40 object-cover rounded-full mx-auto mb-6 shadow-md"
        />

        <h3 className="text-2xl font-bold text-[#374151]">{data.name}</h3>

        <p className="text-[#5BA69A] mb-4">{data.role}</p>

        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {data.description}
        </p>
      </div>
    </section>
  );
}
