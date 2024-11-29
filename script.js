window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");

  if (window.pageYOffset > 30) {
    // document.getElementById("sticky").classList.add("navbar");
    navbar.classList.add("sticky");
  } else {
    // document.getElementById("sticky").classList.remove("navbar");
    navbar.classList.remove("sticky");
  }

  /* Este código es para mover la barra 
  y cambiar de clase, cuando pasa de 150pxs
  y salga un botón */
  if (window.pageYOffset > 150) {
    document.querySelector('.scroll-up-btn').classList.add('show');
  } else {
    document.querySelector('.scroll-up-btn').classList.remove('show');
  }

});

  document.querySelector('.menu-btn').addEventListener('click', function () {
  document.querySelector('.navbar .menu').classList.toggle('active');
  document.querySelector('.menu-btn i').classList.toggle('active');
});
//carrusel de habilidades
//Para que aumente el color de rojo se tiene que poner en
// el CSS desde la linea 402 
const skills = [
  { name: 'Javascript', hours: 180 },
  { name: 'Css', hours: 150 },
  { name: 'Html', hours: 150 },
  { name: 'React', hours: 110 },
  { name: 'Node.js', hours: 90 },
  { name: 'Python', hours: 90 },
  { name: 'Java', hours: 80 },
  { name: 'Django', hours: 80 },
  { name: 'Php', hours: 60 },
  { name: 'Postgresql', hours: 50 },
  { name: 'AutoCAD', hours: 200 }
];
function renderSkills() {
  const container = document.querySelector('.carousel1.column.right');
  const skillsHtml = skills.map(skill => `
    <div class="bars">
      <div class="card">
        <div class="infor">
          <span>${skill.name}:</span>
          <span>${skill.hours} Horas</span>
        </div>
        <div class="line ${skill.name.toLowerCase().replace('.', '')}"></div>
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="skills">
      ${skillsHtml}
    </div>
  `;
}

// Renderizar al cargar la página
document.addEventListener('DOMContentLoaded', renderSkills);





  // Datos de los proyectos
  const projects = [
    {
    id: 1,
    title: "Registro de Personal para Empresa o Instituciones",
    description: "Este proyecto es una aplicación web desarrollada con React que permite a las organizaciones registrar y gestionar la información de su personal de manera eficiente. La aplicación utiliza una API para interactuar con una base de datos, asegurando que todos los datos del personal estén actualizados y sean accesibles en tiempo real.",
    image: "./photo/Registro-Usuarios-1.png",
    technologies: ["HTML5", "CSS3", "JavaScript(ES6)", "React","RESTful API desarrollada con Express"],
    liveUrl: "https://rad-capybara-e6ba83.netlify.app/#",
    githubUrl: "#"
    },

    // verificar en donde te has equivocado
    {
        id: 2,
        title: "Pokemon Api",
        description: "Este proyecto es una aplicación web interactiva desarrollada con React que permite a los usuarios explorar y visualizar datos de Pokémon utilizando una API externa. La aplicación hace uso de la API de Pokémon para obtener información detallada sobre diferentes Pokémon y presentarla de manera intuitiva y accesible.",
        image: "./photo/card-pokemon.png",
        technologies: ["HTML5", "CSS3", "JavaScript(ES6)", "React","RESTful API desarrollada con Express"],
        liveUrl: "https://lucent-cheesecake-5b5298.netlify.app/",
        githubUrl: "#"
    },
    {
        id: 3,
        title: "Clima del Mundo",
        description: "Este proyecto es una aplicación web interactiva diseñada para proporcionar información meteorológica detallada y actualizada. Desarrollada con tecnologías modernas, la aplicación permite a los usuarios consultar el clima actual, pronósticos futuros y datos históricos en cualquier parte del mundo.",
        image: "./photo/ponodoro.png",
        technologies: ["HTML5", "CSS3", "JavaScript(ES6)", "React","RESTful API desarrollada con Express"],
        liveUrl: "https://dashing-croquembouche-bb166c.netlify.app/",
        githubUrl: "#"
    },
    {
      id: 4,
      title: "Clima del Mundo",
      description: "Este proyecto es una aplicación web interactiva diseñada para proporcionar información meteorológica detallada y actualizada. Desarrollada con tecnologías modernas, la aplicación permite a los usuarios consultar el clima actual, pronósticos futuros y datos históricos en cualquier parte del mundo.",
      image: "./photo/personajes.png",
      technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
      liveUrl: "https://thunderous-empanada-2285b2.netlify.app/",
      githubUrl: "#"
  }

    
];

// Función para crear las tarjetas de proyectos
function createProjectCard(project) {
    return `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="technologies">
                    ${project.technologies.map(tech => `
                        <span class="tech-tag">${tech}</span>
                    `).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.liveUrl}" target="_blank">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        Demo en vivo
                    </a>
                    <a href="${project.githubUrl}" target="_blank">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        Código
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Función para cargar los proyectos
function loadProjects() {
    const container = document.getElementById('projects-container');
    const projectsHTML = projects.map(project => createProjectCard(project)).join('');
    container.innerHTML = projectsHTML;
}

// Cargar los proyectos cuando la página esté lista
document.addEventListener('DOMContentLoaded', loadProjects);




















//carrusel de trabajos realizados
// const trabajos = [
//   {
//     id: 1,
//     title: "E-commerce Moderno",
//     description: "Tienda en línea responsive con carrito de compras y panel de administración.",
//     image: "./photo/Registro-Usuarios-1.png",
//     technologies: ["HTML", "CSS", "JavaScript", "React","Api"],
//     liveUrl: "#",
//     githubUrl: "#"
// }, 
// {
//   imagen: "./photo/Registro-Usuarios-1.png",
//   alt: "usuario",
//   tecnologias: "React, Api",
//   descripcion: "Una API de usuario para registrar y gestionar nuevos usuarios",
//   enlace: "https://rad-capybara-e6ba83.netlify.app/"
// },

//   {
//     imagen: "./photo/card-pokemon.png",
//     alt: "Pokemon",
//     tecnologias: "React, Api",
//     descripcion: "Esta API es muy útil para desarrolladores que deseen crear aplicaciones, sitios web",
//     enlace: "https://lucent-cheesecake-5b5298.netlify.app/"
//   },
//   {
//     imagen: "./photo/card-pokemon.png",
//     alt: "Pokemon",
//     tecnologias: "React, Api",
//     descripcion: "Esta API es muy útil para desarrolladores que deseen crear aplicaciones, sitios web",
//     enlace: "https://lucent-cheesecake-5b5298.netlify.app/"
//   },
//   {
//     imagen: "./photo/card-pokemon.png",
//     alt: "Pokemon",
//     tecnologias: "React, Api",
//     descripcion: "Esta API es muy útil para desarrolladores que deseen crear aplicaciones, sitios web",
//     enlace: "https://lucent-cheesecake-5b5298.netlify.app/"
//   },
//   {
//     imagen: "./photo/clima.png",
//     alt: "clima",
//     tecnologias: "React, Api",
//     descripcion: "Existen varias API de clima populares que brindan información meteorológica actualizada",
//     enlace: "asd"
//   },
//   {
//     imagen: "./photo/personajes.png",
//     alt: "Rick and Morty",
//     tecnologias: "React, Api",
//     descripcion: "Los desarrolladores pueden realizar consultas para obtener información sobre los personajes de la serie, Rick and Morty",
//     enlace: "https://thunderous-empanada-2285b2.netlify.app/"
//   },
//   {
//     imagen: "./photo/ponodoro.png",
//     alt: "usuario",
//     tecnologias: "JavaScript, Css",
//     descripcion: "Técnica de Pomodoro, es un sitio web que proporciona un temporizador para gestión del tiempo",
//     enlace: "https://dashing-croquembouche-bb166c.netlify.app/"
//   },
 
//   {
//     imagen: "./photo/javascript.png",
//     alt: "usuario",
//     tecnologias: "Javascript, CSS, HTML",
//     descripcion: "Es una página dinámica que aumenta de tamaño para un mejor manejo ",
//     enlace: "https://erickyar.github.io/Card-Flip-Animation_1/"
//   }
// ];

  // Función para crear las tarjetas de proyectos
//   function createProjectCard(project) {
//     return `
//         <div class="project-card">
//             <img src="${project.image}" alt="${project.title}" class="project-image">
//             <div class="project-info">
//                 <h3 class="project-title">${project.title}</h3>
//                 <p class="project-description">${project.description}</p>
//                 <div class="technologies">
//                     ${project.technologies.map(tech => `
//                         <span class="tech-tag">${tech}</span>
//                     `).join('')}
//                 </div>
//                 <div class="project-links">
//                     <a href="${project.liveUrl}" target="_blank">
//                         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
//                             <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
//                             <polyline points="15 3 21 3 21 9"></polyline>
//                             <line x1="10" y1="14" x2="21" y2="3"></line>
//                         </svg>
//                         Demo en vivo
//                     </a>
//                     <a href="${project.githubUrl}" target="_blank">
//                         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
//                             <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
//                         </svg>
//                         Código
//                     </a>
//                 </div>
//             </div>
//         </div>
//     `;
// }

      // Función para cargar los proyectos
    //   function loadProjects() {
    //     const container = document.getElementById('projects-container');
    //     const projectsHTML = projects.map(project => createProjectCard(project)).join('');
    //     container.innerHTML = projectsHTML;
    // }

    // Cargar los proyectos cuando la página esté lista
    // document.addEventListener('DOMContentLoaded', loadProjects);





// function renderTrabajos() {
//   const carouselContainer = document.querySelector('.carousel');
//   carouselContainer.innerHTML = ''; // Limpiar contenido previo

//   trabajos.forEach(trabajo => {
//     const cardHTML = `
//       <div class="card">
//         <div class="box">
//           <div class="carousel-item">
//               <a href="${trabajo.enlace}" target="_blank">
//                 <img src="${trabajo.imagen}" alt="${trabajo.alt}">
//               </a>
//              <p>Creado por <b>${trabajo.tecnologias}</b><br>
//               ${trabajo.descripcion}
//             </p>
//           </div>
//         </div>
//       </div>
//     `;

//     carouselContainer.innerHTML += cardHTML;
//   });
// }

// Llama a la función cuando la página cargue
// document.addEventListener('DOMContentLoaded', renderTrabajos);


//escribir guión de animacióncon mecanografia 
const options = {
  strings: ["Habilidades Sociales", "Comunicación Asertiva", "Trabajo en equipo", "Paciencia", "Perseverancia", "Resiliencia", "Creatividad ", "Pasión por aprender", "Pensamiento lógico", "Pensamiento Analítico", "Resolución de conflictos"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
};

const typed = new Typed(".mecanografía", options);


const options_2 = {
  strings: ["Habilidades Sociales", "Trabajo en equipo", "Paciencia", "Perseverancia", "Curiosidad", "Pasión por aprender", "Creatividad ", "Comunicación Asertiva", "Investigar", "Pensamiento Analítico", "Resolución de conflictos"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
};

const typed_2 = new Typed(".mecanografía_2", options_2);



const presentation={ 
    strings:["Hi, I'm Erick R. Yarleque B."], 
    typeSpeed:100, 
    backSpeed:60, 
    loop:false 
  }; 
  
  const typed_3 = new Typed(".mecanografía_3",presentation);









// document.addEventListener('DOMContentLoaded', () => {
//   const elementosCarousel = document.querySelectorAll('.carousel');
//   M.Carousel.init(elementosCarousel, {
//     duration: 8000   // duracion  de tiempo al momento de girar
//     // duration: 150    duracion  de tiempo al momento de girar
//   });
// });



