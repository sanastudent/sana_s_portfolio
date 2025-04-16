
// export default function ProjectsPage() {
//     return (
//       <main className="min-h-screen p-8 bg-white">
//         <h1 className="text-4xl font-bold text-indigo-600 text-center">My Projects</h1>
//         <p className="mt-4 text-center">Here are some of my awesome projects! 🚀</p>
//         {/* Add your project cards here later */}
//       </main>
//     );
//   }
  
import Link from 'next/link';

export default function ProjectsPage() {
    const projects = [
        {
          title: 'Portfolio Website',
          description: 'My personal portfolio built with Next.js and Tailwind CSS.',
          link: 'https://github.com/sanastudent/tailwind-based-portfolio.git',
        },
        {
          title: 'School Website',
          description: 'A complete school website with pages, contact form, and announcements.',
          link: 'https://github.com/sanastudent/simple-webiste.git',
        },
        {
          title: 'Blog Website',
          description: 'A blog system built using Next.js and Markdown for content.',
          link: 'https://github.com/sanastudent/Blog-website.git',
        },
        {
          title: 'Ecommerce Website',
          description: 'An e-commerce frontend with product listings, cart and checkout pages.',
          link: 'https://github.com/sanastudent/eCommerce-web.git',
        },
      ];
      

  return (
    <main className="min-h-screen bg-gray-900 text-white px-4 py-12">
      <h1 className="text-4xl font-bold text-indigo-400 text-center mb-8">My Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-indigo-300 mb-2">{project.title}</h2>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
            ← Back to Home
          </button>
        </Link>
      </div>
    </main>
  );
}
