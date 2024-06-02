import { getBlogs } from "@/actions";
import BlogPost from "@/components/blog-post";
import Link from "next/link";

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <main className="grid h-screen grid-cols-[.2fr_1fr]">
      {/* SECTION 1  */}
      <section className="bg-gray-700 text-white">
        <h2 className="mb-5">Blogs</h2>

        {blogs &&
          blogs.map((blog) => (
            <h3 key={blog._id.toString()} className="p-5">
              {blog.title}
            </h3>
          ))}

        <Link href="#" className="btn mx-5 mb-5">
          Sign out
        </Link>
      </section>

      {/* SECTION 2  */}
      <section className="bg-gray-950 text-white flex flex-col overflow-auto">
        <BlogPost />
      </section>
    </main>
  );
}
