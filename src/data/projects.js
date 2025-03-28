import git from '../../public/captures/git.png'
import journal from '../../public/captures/journal.png'
import multimarcas from '../../public/captures/multimarcas.png'
import socialtreek from '../../public/captures/socialtreek.png'
import crypto from '../../public/captures/crypto.gif'
import telebot from '../../public/captures/telebot.gif'
import promptlyhub from '../../public/captures/promptlyhub.gif'
import calendario from '../../public/captures/calendario.gif'
import flixmovie from '../../public/captures/flixmovie.gif'
import player from '../../public/captures/player.gif'

export const projects = [
    {
      title: 'SocialTreek',
      subtitle: 'React Developer MERN',
      description: 'SocialTreek es una Aplicación Web desarrollada con el proposito de que los usuarios que quieran utlizarla puedan compartir de una manera fácil, rápida y sencilla sus redes sociales. El usuario puede añadir sus redes sociales y posteriormente compartir su perfil público para que todos puedan encontrar sus redes sociales en un solo lugar.',
      image: `${socialtreek}`,
      alt: 'SocialTreek, Aplicación Web para ayudar administrar redes sociales.',
      link: 'https://github.com/carloscarrete/tree'
    },
    {
      title: 'Nouty App',
      subtitle: 'React Frontend Developer',
      description: 'Noty App es una Aplicación Web en donde el usuario puede utilizarla para subir sus notas personales y/o utilizarlo como un Diario. Es bastante útil, pues además permite la subida de múltiples imágenes par acompañar la nota que se desea subir, además de que se pueden realizar cambios a la nota.',
      image: `${journal}`,
      alt: 'Noty App, Aplicación Web para ayudar administrar notas.',
      link: 'https://jvx.netlify.app/'
    },
    {
      title: 'Multimarcas',
      subtitle: 'React Frontend Developer',
      description: 'Multi-marcas fue una Aplicación Web creada para un negocio con el mismo nombre, esta Aplicación fue creeada con el proposito de hacer crecer el negocio y llegar a mas mercado en toda la República Mexicana. Con esta Web, los clientes podián buscar entre una gran cantidad de catálogos de diferentes marcas. Además de poder ver los catálogos en formato PDF y realizar compra de esos artículos en línea.',
      image: `${multimarcas}`,
      alt: 'Multimarcas, Sitio web donde puedes encontrar muchos catálogos de ropa y calzado, además de poder comprar.',
      link: 'https://gitlab.com/carloscarrete.sc/multi-marcas-shop'
    },
    {
      title: 'Git-Tecnologias',
      subtitle: 'Frontend Developer',
      description: 'El desarrollo de esta Aplicación Web se realizo en la empresa Git Tecnologías y el objetivo de esta Aplicación es que los empleados del negocio pudierán contar con un panel de Adminitración para manejar el equipo a reparar de sus clientes de una manera más sencilla. Del mismo modo la Web es visible para los clientes con la finalidad de que puedan ver distintos productos y/o el status de su equipo, en este caso si ya esta reparado o no.',
      image: `${git}`,
      alt: 'Git-Tecnologias, Sitio web para ayudar administrar un negocio mediante status y tickets.',
      link: 'https://github.com/gitdurango/web'
    },
    {
      title: 'Crypt - Lookup',
      subtitle: 'Frontend React Developer',
      description: 'Crypt-Lookup es una aplicación web construida con React que permite a los usuarios buscar y explorar información sobre varias criptomonedas. Utiliza la API de CoinGecko para obtener datos en tiempo real y proporciona una interfaz amigable para descubrir y seguir activos digitales.',
      image: `${crypto}`,
      alt: 'Crypto-Lookup',
      link: 'https://crypto-lookup-cb.netlify.app/'
    },
    {
      title: 'ATT - KRTBOT',
      subtitle: 'Python - Telegram',
      description: 'ATT-KRT es un bot de Telegram que utiliza tecnología de procesamiento de lenguaje natural para generar resúmenes de archivos de audio en español.',
      image: `${telebot}`,
      alt: 'ATT-KRTBOT',
      link: 'https://github.com/carloscarrete/att-krt'
    },
    {
      title: 'PromptlyHub',
      subtitle: 'Spark Your Imagination with PromptlyHub',
      description: 'Expand your creative horizons with PromptlyHub, the ultimate AI prompt hub. Discover, create, and share prompts to fuel your imagination and connect with a vibrant community of artists. Unleash your creativity today!',
      image: `${promptlyhub}`,
      alt: 'promptlyhub prompt ai chatgpt',
      link: 'https://promptly-hub.vercel.app/'
    },
    {
      title: 'Calenova',
      subtitle: 'React Fullstack Developer',
      description: 'Calenova es una aplicación web personal diseñada para la gestión de calendarios y eventos.',
      image: `${calendario}`,
      alt: 'Calenova, aplicación web para la gestión de calendarios y eventos.',
      link: 'https://calendar-backend-upmt.onrender.com'
    },
    {
      title: 'FlixMovie',
      subtitle: 'React Native',
      description: 'FlixMovie es una aplicación móvil de para poder encontrar información sobre películas y series de televisión. Además muestra cuales son las próximas películas y series de televisión que se estrenaránFlixMovies es una aplicación móvil desarrollada con React Native que permite a los usuarios explorar películas populares, buscar películas por título, ver detalles de películas, actores y guardar películas favoritas. La aplicación consume la API de The Movie Database (TMDb) para obtener información sobre películas y actores.',
      image: `${flixmovie}`,
      alt: 'FlixMovie, aplicación móvil para encontrar información sobre películas y series de televisión.',
      link: 'https://github.com/carloscarrete/flixmovies'
    },
    {
      title: 'SP - Melodic',
      subtitle: 'React Fullstack Developer',
      description: 'SP Melodic is a modern web application for playing music based on Spotify, developed using React, TypeScript, Vite, TailwindCSS, and Zustand on the frontend, and Node.js, Express, MongoDB/MySQL, and JWT on the backend. The app allows users to authenticate, search for songs, play music, mark songs as favorites, and, if they have admin permissions, manage the song catalog (upload, edit, and delete).',
      image: `${player}`,
      alt: 'SP Melodic, aplicación web para reproducir música basada en Spotify.',
      link: 'https://sp-melodic.netlify.app/'
    }
  ];