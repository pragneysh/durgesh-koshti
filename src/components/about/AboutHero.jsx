import { useEffect, useState } from "react";
import SectionTitle from "../common/SectionTitle";

export default function AboutHero({ baseURL }) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`${baseURL}/AboutHero`)
      .then((res) => res.json())
      .then((data) => setData(data[0]));
  }, [baseURL]);

  return (
    <section className="py-16 text-center bg-white">
      <SectionTitle title={data.title} subtitle={data.subtitle} />
    </section>
  );
}