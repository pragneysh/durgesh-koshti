import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

export default function BlogGrid({ baseURL }) {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}/BlogPosts`)
      .then(res => res.json())
      .then(data => setPosts(data));
  }, [baseURL]);

  console.log(posts);
  return (
    <div className="grid md:grid-cols-3 gap-10 pb-20">

      {posts.map((post, index) => (
        <BlogCard key={index} post={post} index={index} />
      ))}

    </div>
  );
}