import { useEffect, useState } from "react";
import SectionTitle from "../common/SectionTitle";

export default function BlogHeader({ baseURL }) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`${baseURL}/BlogHeader`)
      .then((res) => res.json())
      .then((data) => setData(data[0]));
  }, [baseURL]);

  return (
    <section className="py-16 text-center">
      <SectionTitle title={data.title} subtitle={data.subtitle} />
    </section>
  );
}