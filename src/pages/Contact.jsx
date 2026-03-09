export default function Contact() {
  return (
    <section className="section-padding max-w-xl mx-auto">
      <h1 className="text-3xl font-heading text-primary mb-6 text-center">
        Contact Us
      </h1>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-3 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
        />

        <textarea
          placeholder="Message"
          className="w-full border p-3 rounded"
        />

        <button className="btn-primary w-full">
          Send Message
        </button>
      </form>
    </section>
  );
}