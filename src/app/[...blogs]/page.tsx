import { handleCompletion } from "@/actions";
import Link from "next/link";

export default async function BlogsPage() {
  return (
    <main className="grid h-screen grid-cols-[.2fr_1fr]">
      {/* SECTION 1  */}
      <section className="bg-gray-700 text-white">
        <h2 className="mb-5">Blogs</h2>
        <Link href="#" className="btn">
          Sign out
        </Link>
      </section>

      {/* SECTION 2  */}
      <section className="bg-gray-950 text-white flex flex-col">
        <div className="flex-1">
          <h2>Create a new Blog Post</h2>
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
