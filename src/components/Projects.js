import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id: 1,
    title: 'Projeto 1: Jogo em Unity',
    description: 'Um simples jogo de plataforma construído com Unity',
    image: '/images/project1.jpg',
  },
  {
    id: 2,
    title: 'Projeto 2: App de Criptografia',
    description: 'Um app de criptografia construído com TypeScript',
    image: '/images/project2.jpg',
  },
  {
    id: 3,
    title: 'Projeto 3: Planejador Financeiro Pessoal',
    description: 'Um app de planejamento financeiro construído com TypeScript',
    image: '/images/project3.jpg',
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-gray-100" id="projetos">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Nossos Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;