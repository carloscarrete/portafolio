import React from 'react'

export const Navbar = () => {
  return (
    <header className='md:sticky  bg-cyan-950 top-0 z-10'>
      <div className="container mx-auto flex flex-wrap p-5 flex-col sm:flex-row items-center">
        <a href='#about' className='hidden md:block font-bold text-white xs:text-2xl sm:text-lg'>
          Carlos Carrete
        </a>

        <nav className='sm:mr-auto sm:ml-5 pl-4 md:border-l flex flex-wrap items-center justify-center'>
          <a href="#projects" className="mr-5 hover:text-white xs:text-2xl sm:text-lg w-full sm:w-auto">
            Proyectos
          </a>
          <a href="#skills" className="mr-5 hover:text-white xs:text-2xl sm:text-lg">
            Tecnologías
          </a>
        </nav>

        <a href="#contact" className='inline-flex hover:text-white xs:text-2xl sm:text-lg'>
          Contacto
          <div className='sm:ml-2 hover:text-white xs:text-2xl'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
          </div>
        </a>

        <a href="http://129.153.100.18:8080/api/public/dl/QpWYf8X4?inline=true" target='_blank' className='font-bold inline-flex hover:text-white xs:text-2xl sm:text-lg ml-6'>
          Descargar CV
          <div className='sm:ml-2 hover:text-white xs:text-2xl'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>

          </div>
        </a>
      </div>
    </header>
  )
}


/*  
<a className="title-font font-medium text-white mb-4 sm:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Reed Barger
          </a>
        </a>
*/