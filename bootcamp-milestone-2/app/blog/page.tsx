import Image from "next/image";
import BlogPreview from "@/src/components/blogPreview";
import blogs from "../blogData";

export default function Blog() {
  return (
    <main>
      <h1 className="page-title">Sanaia's Blog</h1>

      <div id="blog-container"></div>
        {blogs.map((blog) => (
          <BlogPreview {...blog}/>
        ))}
    </main>
  );
}

// title={blog.title}
//             date={blog.date}
//             description={blog.description}
//             image={blog.image}
//             imageAlt={blog.imageAlt}
//             slug={blog.slug}