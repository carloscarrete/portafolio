import React from 'react'
import { userForm } from '../hooks/userForm'

export const Contact = () => {


  const { onInputChange, name, email, message } = userForm({
    name: '',
    email: '',
    message: '',
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message)
  }


  return (
    <section id='contact' className='relative'>
      <div className='container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap sm:mx-auto lg:w-4/5'>
        <div className='w-1/4 text-left'>
          <h2 className='text-white text-2xl mb-5'>Contacto</h2>
          <h3 className='font-bold text-white text-xl'>Corro electrónico:</h3>
          <p className='mb-10'>carloscarrete.sc@gmail.com</p>
          <div className='flex w-36 flex-col text-center mb-10'>
              <a href="https://gitlab.com/carloscarrete.sc" target='_blank'><img src="../../public/repositories/gitlab.svg" alt="Repositorio de Gitlab" className='w-100' /></a>
          </div>
          <div className='flex w-36 flex-col text-center mb-10'>
              <a href="https://github.com/carloscarrete" target='_blank'><img src="../../public/repositories/github-icon.svg" alt="Repositorio de Github" className='w-100' /></a>
              
          </div>
        </div>
        <form
          name="contact"
          method='POST'
          className='lg:w-3/4 md:w-1/2 flex flex-col md:ml-auto w-full mt-8 md:mt-0'
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <h2 className='text-white sm:text-4xl text-3xl font-medium mb-5'>Formulario de contacto</h2>
          <h2 className='text-2xl font-bold mb-4'>Puedes enviar tu consulta o mensaje mediante el siguiente formulario</h2>
          <div className='mb-4 text-left'>
            <label htmlFor="name">Nombre</label>
            <input 
            type="text"
            id='name'
            name='name'
            value={name}
            onChange={onInputChange}
            className='w-full bg-gray-800 rounded border border-gray-700 focus:border-gray-400 focus:ring-2 py-1 text-base outline-none text-gray-400 px-4 leading-6 transition-colors duration-200 ease-in-out'
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
            className='w-full bg-gray-800 rounded border border-gray-700 focus:border-gray-400 focus:ring-2 py-1 text-base outline-none text-gray-400 px-4 leading-6 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='mb-4 text-left'>
            <label htmlFor="message">Mensaje</label>
            <textarea 
            name="message" 
            id="message" 
            value={message}
            onChange={onInputChange}
            className='w-full bg-gray-800 rounded border border-gray-700 focus:border-gray-400 focus:ring-2 transition-colors duration-200 ease-in-out h-32 py-1 px-4 resize-none outline-none text-gray-400'
            />
          </div>
          <button
            type='submit'
            className='bg-blue-800 border-0 focus:outline-none hover:bg-blue-900 text-xl rounded-xl text-white py-3 px-5'
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  )
}
