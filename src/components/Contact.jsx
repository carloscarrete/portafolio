import React from 'react'
import { userForm } from '../hooks/userForm'

export const Contact = () => {


  const { onInputChange, name, email, message } = userForm({
    name: '',
    email: '',
    message: '',
  })

  return (
    <section  data-aos="fade-up-right" data-aos-duration="1000" data-aos-offset="250" id='contact' className='relative'>
      <div className='container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap-reverse sm:mx-auto md:w-4/5 xl:w-4/5 sm:w-3/4 sm:px-0  justify-center'>
        <div className='flex flex-col w-full'>

          <div className='mt-12'>
            <h2 className='text-white sm:text-4xl text-3xl font-medium mb-5'>Contacto</h2>
            <h3 className='font-bold text-white text-2xl'>Corro electrónico:</h3>

            <p className='text-base leading-relaxed xl:w-1/2 lg:w-3/4 mx-auto mb-8'>carloscarrete.sc@gmail.com</p>

            <h3 className='font-bold text-white text-2xl mb-5'>Repositorios:</h3>
          </div>

          <div className='flex items-center justify-around sm:flex-col'>
            <div className='flex w-full items-center flex-col text-center mb-10'>
              <a href="https://gitlab.com/carloscarrete.sc" target='_blank'><img src="../../repositories/gitlab.svg" alt="Repositorio de Gitlab" className='w-24 sm:w-36 md:w-40' /></a>

            </div>
            <div className='flex w-full items-center flex-col text-center mb-10'>
              <a href="https://github.com/carloscarrete" target='_blank'><img src="../../repositories/github.svg" alt="Repositorio de Github" className='w-24 sm:w-36 md:w-40' /></a>
            </div>
          </div>

        </div>


        <form
          name="contact"
          method='POST'
          className='w-full flex flex-col mt-12'
        >
          <input type="hidden" name="form-name" value="contact" />
          <h2 className='text-white sm:text-4xl text-3xl font-medium mb-5 text-left'>Formulario de contacto</h2>
          <p className="text-base leading-relaxed xl:w-4/5 lg:w-3/4 w-full mb-8 text-left">
            Puede utilizar el siguiente formulario de contacto para enviar su consulta o mensaje. Intentaré responder de la manera más manera eficiente y precisa. </p>
          <div className='mb-4 text-left'>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id='name'
              name='name'
              value={name}
              onChange={onInputChange}
              className='lg:w-4/5 md:w-11/12 w-full block bg-gray-800 rounded border border-gray-700 focus:border-gray-400 focus:ring-2 py-1 text-base outline-none text-gray-400 px-4 leading-6 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='mb-4 text-left'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name='email'
              id='email'
              value={email}
              onChange={onInputChange}
              className='lg:w-4/5 md:w-11/12 w-full block bg-gray-800 rounded border border-gray-700 focus:border-gray-400 focus:ring-2 py-1 text-base outline-none text-gray-400 px-4 leading-6 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='mb-4 text-left'>
            <label htmlFor="message">Mensaje</label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={onInputChange}
              className='lg:w-4/5 md:w-11/12 w-full block bg-gray-800 rounded border border-gray-700 focus:border-gray-400 focus:ring-2 transition-colors duration-200 ease-in-out h-32 py-1 px-4 resize-none outline-none text-gray-400 mb-3'
            />
          </div>
          <button
            type='submit'
            className='lg:w-4/5 md:w-11/12 block bg-blue-800 border-0 focus:outline-none hover:bg-blue-900 text-xl rounded-xl text-white py-3 px-5'
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  )
}
