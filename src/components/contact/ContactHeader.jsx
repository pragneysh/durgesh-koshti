import { useEffect, useState } from "react";
import SectionTitle from "../common/SectionTitle";

export default function ContactHeader({ baseURL }) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`${baseURL}/ContactHeader`)
      .then((res) => res.json())
      .then((data) => setData(data[0]));
  }, [baseURL]);

  return (
    <section className="text-center">
      <SectionTitle title={data.title} subtitle={data.subtitle} />
    </section>
  );
}
