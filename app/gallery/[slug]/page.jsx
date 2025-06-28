import { notFound } from "next/navigation";
import { images } from "@/lib/galleryData";

export default function ImagePage({ params }) {
  const image = images.find((img) => img.slug === params.slug);
  if (!image) return notFound();

  return (
    <section style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem 1rem" }}>
      <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{image.filename}</h1>
      <img
        src={`/gallery/${image.filename}`}
        alt={image.slug}
        style={{ width: "100%", borderRadius: "12px", marginBottom: "1rem" }}
      />
      <p style={{ fontSize: "1rem", color: "#444" }}>{image.description}</p>
    </section>
  );
}