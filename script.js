// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Add simple animations
window.addEventListener('scroll', function() {
  let elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach(element => {
      if (element.getBoundingClientRect().top < window.innerHeight) {
          element.classList.add('fade-in');
      }
  });
});
