//LOADING

window.addEventListener("load", function () {
  var loadingContainer = document.getElementById("loading-container");

  setTimeout(function () {
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
  text.classList.add('slide-out');
  setTimeout(() => {
    text.textContent = texts[index];
    text.classList.remove('slide-out');
    text.classList.add('slide-in');
    index = (index + 1) % texts.length;
    setTimeout(() => {
      text.classList.remove('slide-in');
      animateText();
    }, 2000);
  }, 2000);
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

//Mobile View
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links a");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s `;
      }
    });
    burger.classList.toggle("toggle");
  });
  //
};

navSlide();



window.addEventListener('resize', removeTextJustify);

function removeTextJustify() {
  var paragraph = document.getElementById('myText');

  if (window.innerWidth <= 767) {
    paragraph.classList.remove('text-justify');
  } else {
    paragraph.classList.add('text-justify');
  }
}

removeTextJustify();

function swapFooterElements() {
  var footer = document.querySelector('#footer');
  var footerLeft = footer.querySelector('.footer-left');
  var footerRight = footer.querySelector('.footer-right');

  if (window.innerWidth <= 767) {
    footer.appendChild(footerRight);
  } else {
    footer.insertBefore(footerRight, footerLeft);
  }
}

window.addEventListener('resize', swapFooterElements);

// Call the function on page load
swapFooterElements();

























