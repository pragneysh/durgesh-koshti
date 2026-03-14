import { useEffect, useState } from "react";

export default function Seminar() {

  const [seminars, setSeminars] = useState([]);

  useEffect(() => {
    fetch(
      "https://opensheet.elk.sh/1gOo-CNqNNrfwUyMy1jx8hGNKYui4HaRI4QBCSXP5xBw/Seminars"
    )
      .then((res) => res.json())
      .then((data) => setSeminars(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 text-center">

      {seminars.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg p-6 text-gray-700"
        >

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {item.Title}
          </h2>

          <img
            src={item.Image}
            alt={item.Title}
            className="w-full h-72 object-cover rounded-md mb-6"
          />

          <div className="space-y-4 leading-relaxed">
            <p>{item.Description1}</p>
            <p>{item.Description2}</p>
            <p>{item.Description3}</p>
          </div>

          <button className="mt-6 px-10 py-3 border-2 border-gray-700 rounded-full tracking-widest text-sm hover:bg-gray-800 hover:text-white transition">
            {item.ButtonText}
          </button>

        </div>
      ))}

    </div>
  );
}