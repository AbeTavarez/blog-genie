import { handleCompletion, getBlogs } from "@/actions";
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

        <Link href="#" className="btn">
          Sign out
        </Link>
      </section>

      {/* SECTION 2  */}
      <section className="bg-gray-950 text-white flex flex-col overflow-auto">
        <div className="flex-1 p-5 overflow-auto">
            {/* TITLE  */}
          <h2 className="text-2xl mb-2" >{blogs.at(-1)?.title}</h2>

          {/* METADATA  */}
          <div className="mb-5">
            <h2 className="text-2xl">Metadata:</h2>
            <p>{blogs.at(-1)?.metaInfo}</p>
          </div>

          {/* CONTENT  */}
          <div className="mb-5">
            <h2 className="text-2xl">Content: </h2>
            <div dangerouslySetInnerHTML={{__html: blogs.at(-1)?.content!}}/>
          </div>

          {/* KEYWORDS  */}
          <div>
            <h2 className="text-2xl">Keywords:</h2>
            <p>{blogs.at(-1)?.keywords}</p>
          </div>


        </div>

        <div className="bg-gray-800 p-10">
          <form action={handleCompletion}>
            <fieldset className="flex gap-2">
              <label htmlFor="user_prompt"></label>
              <textarea
                name="user_prompt"
                id="user_prompt"
                className="w-full resize-none rounded-md text-black"
                placeholder="Create a blog about..."
              />

              <button type="submit" className="btn">
                Create
              </button>
            </fieldset>
          </form>
        </div>
      </section>
    </main>
  );
}
