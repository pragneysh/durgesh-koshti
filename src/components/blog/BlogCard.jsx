export default function BlogCard({ post, index }) {

  const isFeatured = index === 0;

  return (
    <div
      className={`relative group rounded-2xl overflow-hidden shadow-lg ${
        isFeatured ? "md:col-span-3 h-[500px]" : "h-[400px]"
      }`}
    >

      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-90"></div>

      <span className="absolute top-4 left-4 bg-[#5BA69A] text-white px-4 py-1 text-xs font-semibold rounded-full">
        {post.category}
      </span>

      <div className="absolute bottom-6 left-6 text-white max-w-md">

        <h3 className="text-2xl md:text-3xl font-bold mb-2">
          {post.title}
        </h3>

        <p className="text-xs uppercase tracking-wide mb-2">
          {post.author} • {post.date}
        </p>

        <p className="text-sm mb-4">
          {post.text}
        </p>

        <button className="bg-[#5BA69A] hover:bg-[#4a8f85] px-5 py-2 rounded-full text-sm font-medium transition">
          Read More
        </button>

      </div>
    </div>
  );
}