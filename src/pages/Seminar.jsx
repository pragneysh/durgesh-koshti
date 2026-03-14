import SeminarBanner from "../components/seminar/SeminarBanner";
import Seminar from "../components/seminar/Seminar";

export default function SeminarPage() {
  return (
    <section className="bg-gray-50">
      <SeminarBanner />
      <Seminar />
    </section>
  );
}