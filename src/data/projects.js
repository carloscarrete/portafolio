import git from '../../public/captures/git.png'
import journal from '../../public/captures/journal.png'
import multimarcas from '../../public/captures/multimarcas.png'
import socialtreek from '../../public/captures/socialtreek.png'

export const projects = [
    {
      title: 'SocialTreek',
      subtitle: 'React Developer MERN',
      description: 'SocialTreek es una Aplicación Web desarrollada con el proposito de que los usuarios que quieran utlizarla puedan compartir de una manera fácil, rápida y sencilla sus redes sociales. El usuario puede añadir sus redes sociales y posteriormente compartir su perfil público para que todos puedan encontrar sus redes sociales en un solo lugar.',
      image: `${socialtreek}`,
      alt: 'SocialTreek, Aplicación Web para ayudar administrar redes sociales.',
      link: 'https://social-treek.netlify.app'
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
      link: 'https://www.multi-marcas.com'
    },
    {
      title: 'Git-Tecnologias',
      subtitle: 'Frontend Developer',
      description: 'El desarrollo de esta Aplicación Web se realizo en la empresa Git Tecnologías y el objetivo de esta Aplicación es que los empleados del negocio pudierán contar con un panel de Adminitración para manejar el equipo a reparar de sus clientes de una manera más sencilla. Del mismo modo la Web es visible para los clientes con la finalidad de que puedan ver distintos productos y/o el status de su equipo, en este caso si ya esta reparado o no.',
      image: `${git}`,
      alt: 'Git-Tecnologias, Sitio web para ayudar administrar un negocio mediante status y tickets.',
      link: 'https://www.gitecnologias.com'
    }
  ];