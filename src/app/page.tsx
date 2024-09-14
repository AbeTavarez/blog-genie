import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <nav className="flex justify-between items-center p-5 bg-slate-800 text-white">
        <div className="text-4xl font-bold">BlogGen</div>
        <Link href="/blog" className="font-bold">Login</Link>
      </nav>

      <section className="mt-20 p-10">
        <h1 className="text-4xl font-bold mb-10">AI Blog Generator: Automating Content Creation with AI</h1>
        <p className="text-3xl font-semibold">
          Discover the future of content creation with my AI Blog Generator.
          This project automates blog post generation, delivering high-quality,
          SEO-friendly articles in seconds. Built using Next.js, TypeScript,
          Tailwind CSS, and powered by OpenAI&apos;s API, this tool showcases my
          ability to develop innovative solutions for modern challenges.
        </p>
      </section>

      <section className="flex justify-center mt-40">
        <div className="bg-slate-800 p-10 text-white font-bold rounded text-center h-72 flex flex-col justify-center">
          <h2 className="text-3xl mb-5">Start your free trial today</h2>
          <Link href="/blog" className="btn">
            Try it for Free!
          </Link>
        </div>
      </section>
    </main>
  );
}
