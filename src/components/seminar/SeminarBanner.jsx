import { useEffect, useState } from "react";

export default function SeminarBanner() {
  const [banner, setBanner] = useState({});

  useEffect(() => {
    fetch(
      "https://opensheet.elk.sh/1gOo-CNqNNrfwUyMy1jx8hGNKYui4HaRI4QBCSXP5xBw/SeminarBanner"
    )
      .then((res) => res.json())
      .then((data) => setBanner(data[0]));
  }, []);

  return (
    <div className="relative bg-[#5BA69A] text-white py-24">

      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {banner.Title}
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          {banner.Subtitle}
        </p>

        <button className="px-10 py-3 bg-white text-[#5BA69A] font-semibold rounded-full hover:bg-gray-100 transition">
          {banner.ButtonText}
        </button>
      </div>

      <img
        src={banner.BannerImage}
        alt="Seminar Banner"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

    </div>
  );
}