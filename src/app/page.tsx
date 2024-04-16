import Link from "next/link";


export default function Home() {
  return (
    <main className="min-h-screen">
     <nav className="flex justify-between p-5 bg-slate-600 text-white">
      <div>Blog Genie</div>
      <Link href='#'>Login</Link>
     </nav>

     <section className="flex justify-center mt-80">
      <div className="bg-indigo-500 p-10 text-white font-bold rounded text-center">
        <h2 className="text-3xl mb-5">Start your free trial!</h2>
        <Link href='#' className="btn">Sign Up</Link>
      </div>
     </section>
    </main>
  );
}
