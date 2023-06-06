import React from 'react'
import { projects } from '../data/projects'


export const Projects = () => {
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className='container px-5 py-5 mx-auto text-center '>
                <div className="flex flex-col w-full mb-20">
                    <div className='mx-auto mb-14 w-10 inline-block'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                        </svg>
                    </div>
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Aplicaciones
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    A continuación, me complace compartir una selección de los proyectos que he llevado a cabo, utilizando diversas tecnologías y enfoques. Cada proyecto ha sido una oportunidad emocionante para aplicar mis habilidades y conocimientos en el desarrollo de soluciones innovadoras. A continuación, encontrarás descripciones breves de algunos de mis proyectos más destacados:
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {
                        projects.map((project) =>
                        (
                            <a
                                href={project.link}
                                key={project.image}
                                target='_blank'
                                className="sm:w-1/2 w-100 p-4">
                                <div className="flex relative h-[290px]">
                                    <img
                                        alt={project.alt}
                                        className="absolute inset-0 w-full h-full object-cover object-center"
                                        src={project.image}
                                    />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 transform transition duration-500">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-blue-800 font-bold mb-1">
                                            {project.subtitle}
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-white mb-3">
                                            {project.title}
                                        </h1>
                                        <p className="leading-relaxed">{project.description}</p>
                                    </div>
                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
