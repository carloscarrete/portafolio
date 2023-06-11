import { skills } from "../data/skills"
export const Skills = () => {
  return (
    <section  data-aos="zoom-in-left" data-aos-duration="1000" data-aos-offset="250" id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-10">
          <div className="w-10 inline-block mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
          </div>
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Tecnologías &amp; Skills
          </h1>
          <p className="text-base leading-relaxed xl:w-1/2 lg:w-3/4 mx-auto ">
            En la siguiente sección muestro las tecnologías con las que he tenido oportunidad de trabajar en algunos de los proyectos mostrados anteriormente.
          </p>
        </div>
        <div className="sm:mx-auto flex flex-wrap lg:w-4/5 -mx-2 sm:mb-3">
          {
            skills.map((skill) => (
              <div key={skill} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-700 rounded flex p-4 h-full items-center">
                  <div className="text-blue-800 w-5 h-6 flex-shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <span className="text-white font-bold">
                    {skill}
                  </span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

/* 
<div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div> */
