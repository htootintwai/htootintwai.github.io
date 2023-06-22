//LOADING

window.addEventListener("load", function() {
  var loadingContainer = document.getElementById("loading-container");

  setTimeout(function() {
    loadingContainer.style.display = "none";
    content.style.display = "block";
  }, 3000);
});

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
    handler: function (direction) {

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


// ABOUT

const text = document.getElementById('text');
const texts = ['Web Developer', 'Network Engineer'];
let index = 0;

function animateText() {
  text.classList.add('fade-out');
  setTimeout(() => {
    text.textContent = texts[index];
    text.classList.remove('fade-out');
    text.classList.add('fade-in');
    index = (index + 1) % texts.length;
    setTimeout(() => {
      text.classList.remove('fade-in');
      animateText();
    }, 1000);
  }, 3000);
}

animateText();

//Project

var cardCarousel = new bootstrap.Carousel(document.getElementById('cardCarousel'), {
  interval: 10000,
  wrap: true
});

//SERVICES

const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});

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












