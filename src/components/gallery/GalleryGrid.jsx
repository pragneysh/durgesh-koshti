import yoga1 from "../../assets/images/yoga1.jpg";
import yoga2 from "../../assets/images/yoga2.jpg";
import yoga3 from "../../assets/images/yoga3.jpg";

export default function GalleryGrid() {
  const images = [yoga1, yoga2, yoga3];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          className="rounded-xl shadow-md hover:scale-105 transition"
        />
      ))}
    </div>
  );
}