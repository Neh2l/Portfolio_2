const sidebarLinks = document.querySelectorAll('.sidebar a');

sidebarLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    sidebarLinks.forEach(l => l.classList.remove('active'));
    e.currentTarget.classList.add('active');
  });
});