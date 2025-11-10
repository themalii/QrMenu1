document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');
  const header = document.querySelector('header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Header gizle/göster
    if (currentScroll > lastScroll && currentScroll > 50) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;

    // Nav active link
    let current = '';
    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (pageYOffset >= sectionTop) current = section.getAttribute('id');
    });
    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) link.classList.add('active');
    });

    // Yukarı dön butonu
    const topBtn = document.getElementById("topBtn");
    if (currentScroll > 300) topBtn.style.display = "block";
    else topBtn.style.display = "none";
  });

  document.getElementById("topBtn").addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
});