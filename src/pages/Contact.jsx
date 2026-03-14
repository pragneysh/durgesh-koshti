import ContactHeader from "../components/contact/ContactHeader";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";

export default function Contact() {

  const baseURL =
    "https://opensheet.elk.sh/1sekRU_DbVitrjKEZXBQ67kMvUv-kpykV8LQgGF0P4wo";

  return (
    <section className="bg-gray-50">

      <div className="max-w-6xl mx-auto px-6 py-16">

        <ContactHeader baseURL={baseURL} />

        <div className="grid md:grid-cols-2 gap-12 bg-white p-10 rounded-2xl shadow-xl">

          <ContactInfo baseURL={baseURL} />

          <ContactForm />

        </div>

      </div>

    </section>
  );
}