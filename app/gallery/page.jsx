import Link from "next/link";
import { images } from "@/lib/galleryData";

export default function GalleryPage() {
  return(
    <section>
      <h1 style={{fontSize: "2rem", marginBottom: "1rem", textAlign:"center"}} >Gallery</h1>
      <div
        style = {{
          display : "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px,1fr))",
          gap: "16px"

        }}
      >
        {images.map((img) => (
          <Link key = {img.slug} href = {`/gallery/${img.slug}`}>
            <div style={{textAlign:"center", cursor: "pointer"}}>
              <img
                src = {`/gallery/${img.filename}`}
                alt = {img.slug}
                style = {{
                  width: "150px",
                  height: "200px",
                  objectFit: "cover",

                }}
                />
                <p style = {{marginTop:"8px", fontSize: "0.9rem", textDecoration: "none"}}>
                  {img.filename}
                </p>
            </div>
          </Link> 
        ))}
      </div>
    </section>
  );
}

