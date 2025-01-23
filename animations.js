
// You can use GSAP or AOS for more complex animations. This is just for simple fade-in.
document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.animate__animated');
  elements.forEach(el => {
    el.classList.add('animate__fadeIn');
  });
});
    