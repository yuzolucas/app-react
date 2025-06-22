import React from 'react';

const teamMembers = [
    {
        id: 1,
        name: 'Membro 1',
        photo: '../images/member1.jpg',
        description: 'Olá, sou o Pedro Japiassu, e minha paixão é o desenvolvimento front-end, transformando designs em experiências de usuário interativas e responsivas. Sou especialista em criar interfaces elegantes e funcionais.',
        skills: ['JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Figma'],
        imageLeft: true,
    },
    {
        id: 2,
        name: 'Membro 2',
        photo: '../images/member2.jpg',
        description: 'Olá, sou a Marcus Cruseiro, e sou desenvolvedor de games, com uma paixão inegável por dar vida a mundos e histórias interativas. Busco transformar ideias criativas em experiências de jogo envolventes, construindo a arquitetura robusta e o código eficiente que impulsionam a diversão.',
        skills: ['Unity', 'C#', 'Python', 'Unreal Engine'],
        imageLeft: false,
    },
    {
        id: 3,
        name: 'Membro 3',
        photo: '../images/member3.jpg',
        description: 'Olá, sou o Lucas Yuzo, e sou focado no desenvolvimento back-end e desenvolvimento de sistemas. Adoro resolver problemas complexos e construir APIs robustas e escaláveis que impulsionam aplicações dinâmicas.',
        skills: ['React.js', 'Node.js', 'TypeScript', 'Next.js', 'MongoDB'],
        imageLeft: true,
    },
];

const About = () => {
  return (
    <section className="py-20 bg-white" id="sobre">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Sobre Nós</h2>
            {teamMembers.map((member, index) => (
                <div key={member.id} className={`flex flex-col ${member.imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center bg-gray-50 p-8 rounded-lg shadow-md mb-12`}>
                    <div className="flex-shrink-0 mb-6 md:mb-0 md:w-1/3 flex justify-center">
                        <img src={member.photo} alt={`Foto de ${member.name}`} className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-blue-400"/>
                    </div>
                    <div className="md:w-2/3 md:ml-8 text-center md:text-left">
                        <p className="text-lg text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: member.description }}></p>
                        <h3 className="text-xl font-semibold mb-3">Habilidades:</h3>
                        <ul className="flex flex-wrap justify-center md:justify-start gap-3">
                            {member.skills.map((skill, skillIndex) => (
                                <li key={skillIndex} className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium"> {skill} </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </section>
)};

export default About;