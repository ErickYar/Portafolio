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
  { name: 'Python', hours: 90 },
  { name: 'Java', hours: 80 }, 

  { name: 'CSS', hours: 150 },
  { name: 'Html', hours: 150 },
  { name: 'React', hours: 110 },
  { name: 'Node.js', hours: 90 },
  { name: 'Django', hours: 80 }, 
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



//carrusel de trabajos realizados
const trabajos = [
  {
    imagen: "./photo/card-pokemon.png",
    alt: "Pokemon",
    tecnologias: "React, Api",
    descripcion: "Esta API es muy útil para desarrolladores que deseen crear aplicaciones, sitios web",
    enlace:"https://lucent-cheesecake-5b5298.netlify.app/"
  },
  {
    imagen: "./photo/card-pokemon.png",
    alt: "Pokemon",
    tecnologias: "React, Api",
    descripcion: "Esta API es muy útil para desarrolladores que deseen crear aplicaciones, sitios web",
    enlace:"https://lucent-cheesecake-5b5298.netlify.app/"
  },
   {
    imagen: "./photo/card-pokemon.png",
    alt: "Pokemon",
    tecnologias: "React, Api",
    descripcion: "Esta API es muy útil para desarrolladores que deseen crear aplicaciones, sitios web",
    enlace:"https://lucent-cheesecake-5b5298.netlify.app/"
  },
  {
    imagen: "./photo/clima.png", 
    alt: "clima",
    tecnologias: "React, Api",
    descripcion: "Existen varias API de clima populares que brindan información meteorológica actualizada",
    enlace:"asd"
  },
  {
    imagen: "./photo/personajes.png",
    alt: "Rick and Morty",
    tecnologias: "React, Api",
    descripcion: "Los desarrolladores pueden realizar consultas para obtener información sobre los personajes de la serie, Rick and Morty",
    enlace:"https://thunderous-empanada-2285b2.netlify.app/"
  },
  {
    imagen: "./photo/ponodoro.png",
    alt: "usuario",
    tecnologias: "JavaScript, Css",
    descripcion: "Técnica de Pomodoro, es un sitio web que proporciona un temporizador para gestión del tiempo",
    enlace:"https://dashing-croquembouche-bb166c.netlify.app/"
  },
  {
    imagen: "./photo/Registro-Usuarios-1.png",
    alt: "usuario",
    tecnologias: "React, Api",
    descripcion: "Una API de usuario para registrar y gestionar nuevos usuarios",
    enlace:"https://rad-capybara-e6ba83.netlify.app/"
  },
  {
    imagen: "./photo/javascript.png",
    alt: "usuario",
    tecnologias: "Javascript, CSS, HTML",
    descripcion: "Es una página dinámica que aumenta de tamaño para un mejor manejo ",
    enlace:"https://erickyar.github.io/Card-Flip-Animation_1/"
  }
];

function renderTrabajos() {
  const carouselContainer = document.querySelector('.carousel');
  carouselContainer.innerHTML = ''; // Limpiar contenido previo
  
  trabajos.forEach(trabajo => {
    const cardHTML = `
      <div class="card">
        <div class="box">
          <div class="carousel-item">
              <a href="${trabajo.enlace}" target="_blank">
                <img src="${trabajo.imagen}" alt="${trabajo.alt}">
              </a>
             <p>Creado por <b>${trabajo.tecnologias}</b><br>
              ${trabajo.descripcion}
            </p>
          </div>
        </div>
      </div>
    `;
    
    carouselContainer.innerHTML += cardHTML;
  });
}

// Llama a la función cuando la página cargue
 document.addEventListener('DOMContentLoaded', renderTrabajos);


//escribir guión de animacióncon mecanografia 
const options = {
  strings: ["Habilidades Sociales", "Comunicación Asertiva", "Trabajo en equipo", "Paciencia", "Perseverancia", "Resiliencia", "Creatividad ", "Pasión por aprender", "Pensamiento lógico", "Pensamiento Analítico", "Resolución de conflictos"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
};

const typed = new Typed(".mecanografía", options);


const options_2 = {
  strings: ["Habilidades Sociales","Trabajo en equipo", "Paciencia", "Perseverancia", "Curiosidad", "Pasión por aprender",  "Creatividad ", "Comunicación Asertiva", "Investigar", "Pensamiento Analítico", "Resolución de conflictos"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
};

const typed_2 = new Typed(".mecanografía_2", options_2);



document.addEventListener('DOMContentLoaded', () => {
  const elementosCarousel = document.querySelectorAll('.carousel');
  M.Carousel.init(elementosCarousel, {
    duration: 8000   // duracion  de tiempo al momento de girar
    // duration: 150    duracion  de tiempo al momento de girar
  });
});



