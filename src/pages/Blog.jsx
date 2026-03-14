import BlogHeader from "../components/blog/BlogHeader";
import BlogGrid from "../components/blog/BlogGrid";

export default function Blog() {

  const baseURL = 
    "https://opensheet.elk.sh/1vFFW7_BhZiTTk4WyuoWYPam5hefrgz1UU78PTvio75s";

  return (
    <section className="bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <BlogHeader baseURL={baseURL} />

        <BlogGrid baseURL={baseURL} />

      </div>

    </section>
  );
}