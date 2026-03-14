import { useEffect, useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactInfo({ baseURL }) {

  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`${baseURL}/ContactInfo`)
      .then((res) => res.json())
      .then((data) => setData(data[0]));
  }, [baseURL]);

  return (
    <div className="space-y-6">

      <h3 className="text-xl font-semibold text-[#374151] mb-4">
        Contact Information
      </h3>

      <div className="flex items-center gap-4">
        <div className="bg-[#5BA69A] text-white p-3 rounded-full">
          <FaEnvelope />
        </div>
        <p className="text-gray-600">{data.email}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="bg-[#5BA69A] text-white p-3 rounded-full">
          <FaPhoneAlt />
        </div>
        <p className="text-gray-600">{data.phone}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="bg-[#5BA69A] text-white p-3 rounded-full">
          <FaMapMarkerAlt />
        </div>
        <p className="text-gray-600">{data.location}</p>
      </div>

    </div>
  );
}