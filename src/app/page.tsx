

// // import Link from 'next/link'



// // export default function Home() {
// //   return (
// //     <main className="flex min-h-screen items-center justify-center bg-gray-100 text-center">
// //       <div>
// //         <h1 className="text-4xl font-bold text-indigo-600">Hi, I’m Sana 👋</h1>
// //         <p className="mt-4 text-lg">
// //           I’m a Frontend Developer passionate about creating clean and user-friendly websites.
// //         </p>

// //         <Link href="/projects">
// //           <button className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700">
// //             View My Work
// //           </button>
// //         </Link>
// //       </div>
// //     </main>
// //   )
// // }



import Link from 'next/link';

export default function Home() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'];

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-900 text-white text-center">
      <div>
        <h1 className="text-4xl font-bold text-indigo-400">Hi, I’m Sana 👋</h1>
        <p className="mt-4 text-lg text-gray-300">
          I’m a Frontend Developer passionate about creating clean and user-friendly websites.
        </p>

        <Link href="/projects">
          <button className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
            View My Work
          </button>
        </Link>

        {/* Tech Stack Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-indigo-400 mb-4">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-800 text-white rounded-full border border-indigo-500"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
