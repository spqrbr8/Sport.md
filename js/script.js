document.addEventListener('DOMContentLoaded', function() {
  // Elements
  const themeToggle = document.getElementById('themeToggle');
  const menuToggle = document.querySelector('.menu-toggle');
  const sideMenu = document.querySelector('.side-menu');
  const backdrop = document.querySelector('.backdrop');
  const video = document.querySelector('.intro-video');
  const header = document.querySelector('.site-header');
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');

  // Theme Toggle Functionality
  themeToggle.addEventListener('change', function() {
      if (this.checked) {
          document.body.classList.add('dark-theme');
          localStorage.setItem('theme', 'dark');
      } else {
          document.body.classList.remove('dark-theme');
          localStorage.setItem('theme', 'light');
      }
  });

  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
      themeToggle.checked = true;
  }
  

  // Menu Toggle Functionality
  function toggleMenu() {
      sideMenu.classList.toggle('open');
      if (sideMenu.classList.contains('open')) {
          backdrop.style.display = 'block';
          menuIcon.style.display = 'none';
          closeIcon.style.display = 'block';
      } else {
          backdrop.style.display = 'none';
          menuIcon.style.display = 'block';
          closeIcon.style.display = 'none';
      }
  }

  menuToggle.addEventListener('click', toggleMenu);
  backdrop.addEventListener('click', toggleMenu);

  // Video loaded event
  if (video) {
      video.addEventListener('loadeddata', function() {
          video.classList.add('loaded');
      });
  }
  // Active nav links
  const navLinks = document.querySelectorAll('.side-menu a, .desktop-nav a');
  const currentLocation = window.location.pathname;
  
  navLinks.forEach(link => {
      const linkPath = link.getAttribute('href');
      if (linkPath === '/' && currentLocation === '/') {
          link.classList.add('active');
      } else if (linkPath !== '/' && currentLocation.includes(linkPath)) {
          link.classList.add('active');
      }
  });
});