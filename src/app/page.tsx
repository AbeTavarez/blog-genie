import Link from "next/link";


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
     <nav className="flex justify-between p-5 bg-slate-800 text-white">
      <div>Blog Genie</div>
      <Link href='#'>Login</Link>
     </nav>

     <section className="flex justify-center mt-80">
      <div className="bg-slate-800 p-10 text-white font-bold rounded text-center h-72 flex flex-col justify-center">
        <h2 className="text-3xl mb-5">Start your free trial!</h2>
        <Link href='/blogs' className="btn">Sign Up</Link>
      </div>
     </section>
    </main>
  );
}
