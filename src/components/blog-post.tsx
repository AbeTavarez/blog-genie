"use client";
import { useState, useEffect, FormEvent } from "react";
import { handleCompletion, getBlogs } from "@/actions";
import { Blog } from "@/types";
import Generating from "./generating";

export default function BlogPost() {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState<Blog[] | null>(null);
  const [userPrompt, setUserPrompt] = useState("");

  const fetchBlogs = async () => {
    const data = await getBlogs();
    setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await handleCompletion(userPrompt);
      await fetchBlogs();
      setLoading(false);
      setUserPrompt("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loading ? (
        <Generating />
      ) : (
        blogs && (
          <>
            <div className="flex-1 p-5 overflow-y-hidden hover:overflow-y-auto">
              {/* TITLE  */}
              <h2 className="text-2xl mb-2">{blogs.at(-1)?.title}</h2>

              {/* METADATA  */}
              <div className="mb-5">
                <h2 className="text-2xl">Metadata:</h2>
                <p>{blogs.at(-1)?.metaInfo}</p>
              </div>

              {/* CONTENT  */}
              <div className="mb-5">
                <h2 className="text-2xl">Content: </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: blogs.at(-1)?.content || "",
                  }}
                />
              </div>

              {/* KEYWORDS  */}
              <div>
                <h2 className="text-2xl">Keywords:</h2>
                <p>{blogs.at(-1)?.keywords}</p>
              </div>
            </div>
          </>
        )
      )}

      <div className="bg-gray-800 p-10">
        <form onSubmit={handleSubmit}>
          <fieldset className="flex gap-2">
            <label htmlFor="user_prompt"></label>
            <textarea
              name="user_prompt"
              id="user_prompt"
              className="w-full resize-none rounded-md text-black"
              placeholder="Create a blog about..."
              value={userPrompt}
              onChange={(e) => setUserPrompt(e.target.value)}
              required
            />

            <button type="submit" className="btn">
              Create
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
}
