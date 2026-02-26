import Contact from '@/components/home/Contact';
import projects from '@/data/projects';

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const project = projects.find(p => p.link === `/projects/${slug}`);

  if (!project) {
    return <div className="text-center py-16 text-gray-600">Project not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 pb-16 pt-48">
      <h1 className="text-6xl font-bold text-white text-center">{project.title}</h1>
      <p className="text-xl text-gray-500 mt-2 text-center">{project.description}</p>
      <div className="mt-6 text-white leading-relaxed text-lg">
        {project.details}
      </div>
      <div className="mt-12">
        <Contact />
      </div>
    </div>
  );
}
