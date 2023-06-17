// NAVBAR
function changeTextColor(element) {
    element.classList.add('text-dark');
  }
  
  function resetTextColor(element) {
    element.classList.remove('text-dark');
  }

  var sections = document.getElementsByClassName('section');

  for (var i = 0; i < sections.length; i++) {
    new Waypoint({
      element: sections[i],
      handler: function(direction) {
        
        var sectionId = this.element.id;

        
        var navLinks = document.querySelectorAll('#main-nav a');
        for (var j = 0; j < navLinks.length; j++) {
          var link = navLinks[j];
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.toggle('active', direction === 'down');
          }
        }
      },
      offset: '50%' 
    });
  }


// HOME
const headerText = document.getElementById('header-text');
const headerSubtitle = document.querySelector('.header-subtitle');

const texts = ['Web Developer', 'Network Engineer'];
let index = 0;

function typeWriter() {
  if (index < texts.length) {
    const text = texts[index];
    let i = 0;

    const type = setInterval(() => {
      if (i < text.length) {
        headerSubtitle.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(type);
        setTimeout(() => {
          headerSubtitle.classList.add('fade-out');
          setTimeout(() => {
            headerSubtitle.textContent = '';
            headerSubtitle.classList.remove('fade-out');
            index = (index + 1) % texts.length;
            typeWriter();
          }, 1000);
        }, 5000); 
      }
    }, 100);
  }
}

typeWriter();

// PROJECTS

const projectSlider = document.querySelector('.project-slider');
const slides = projectSlider.getElementsByClassName('col-4');


const projectsPerSlide = 3;


for (let i = 0; i < slides.length; i += projectsPerSlide) {
  const slideGroup = Array.from(slides).slice(i, i + projectsPerSlide);
  slideGroup.forEach((slide) => slide.classList.add('active'));
}

// SLIDE SHOW

  

// Contact Me

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    document.getElementById('success-message').textContent = 'Thank you for contacting us! We will get back to you soon.';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  });


//   Loading

window.addEventListener('load', function() {
    var loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none';
    document.body.style.overflow = 'auto';
});


// FOOTER


  
  

  



  