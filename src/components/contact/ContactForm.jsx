export default function ContactForm() {
  return (
    <form className="space-y-4">

      <input
        type="text"
        placeholder="Your Name"
        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5BA69A]"
      />

      <input
        type="email"
        placeholder="Your Email"
        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5BA69A]"
      />

      <textarea
        rows="5"
        placeholder="Your Message"
        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5BA69A]"
      ></textarea>

      <button
        className="w-full bg-[#5BA69A] text-white py-3 rounded-lg font-medium hover:bg-[#4a8f85] transition"
      >
        Send Message
      </button>

    </form>
  );
}