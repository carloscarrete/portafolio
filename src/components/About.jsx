import React from 'react'

export const About = () => {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center sm:flex-col">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hola, soy Carlos Carrete
                        <br className="hidden lg:inline-block" /> Frontend React Developer
                    </h1>
                    <p className="mb-8 leading-6">
                        Desarrollador Frontend especializado en React JS. Con experiencia en el desarrollo de Aplicaciones Web utilizando distintas tecnoloǵias. Apasionado por la creación de interfaces de usuario intuitivas y funcionales. Graduado de la Carrera de Ingeniería en Sistemas Computacionales.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="rounded-3xl inline-flex text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-blue-950 rounded text-lg">
                            Contacto
                        </a>
                        <a
                            href="#projects"
                            className="rounded-3xl ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            Mis Proyectos
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:mb-9">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="../../logo.svg"
                    />
                </div>
            </div>
        </section>
    )
}
