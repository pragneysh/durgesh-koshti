import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import SectionTitle from "../components/common/SectionTitle";

export default function Trainers() {

  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    fetch(
      "https://opensheet.elk.sh/13xpPxWFAVd-jSLFwj0tkVi3IJKMGTtHyOqd5Q2XjDBA/Trainers"
    )
      .then((res) => res.json())
      .then((data) => {
        const rows = data.map((row) => ({
          name: row.Name,
          role: row.Role,
          bio: row.Bio,
          image: row.Image,
          students: row.Students,
          sessions: row.Sessions,
        }));

        setTrainers(rows);
      });
  }, []);

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto">

        <SectionTitle
          title="Meet Our Trainers"
          subtitle="Dedicated mentors helping students and individuals grow through yoga, mindfulness, and motivational guidance."
        />

        <div className="grid md:grid-cols-3 gap-10">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md p-6 text-center hover:shadow-xl transition"
            >

              <div className="flex justify-center">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-40 h-40 object-cover rounded-3xl"
                />
              </div>

              <div className="flex justify-center items-center gap-2 mt-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {trainer.name}
                </h3>
                <CheckCircle size={18} className="text-green-500" />
              </div>

              <p className="text-gray-500 text-sm mt-1">
                {trainer.role}
              </p>

              <p className="text-gray-600 text-sm mt-3">
                {trainer.bio}
              </p>
{/* 
              <div className="flex justify-center gap-8 mt-6 text-sm text-gray-600">
                <div>
                  <p className="font-semibold">{trainer.students}</p>
                  <p>Students</p>
                </div>

                <div>
                  <p className="font-semibold">{trainer.sessions}</p>
                  <p>Sessions</p>
                </div>
              </div>

              <button className="mt-6 px-6 py-2 bg-gray-100 rounded-full hover:bg-[#5BA69A] hover:text-white transition">
                Follow +
              </button> */}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}