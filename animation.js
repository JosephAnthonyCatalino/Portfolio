// Section popup animation
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));
});

// Hire Me jumpscare logic
document.addEventListener("DOMContentLoaded", () => {
  const hireMeBtn = document.getElementById('hireMeBtn');
  const jumpscare = document.getElementById('jumpscare');
  const backBtn = document.getElementById('backBtn');

  hireMeBtn.addEventListener('click', () => {
    jumpscare.style.display = 'flex';
  });

  backBtn.addEventListener('click', () => {
    jumpscare.style.display = 'none';
  });
});
// Work card image popup logic
document.querySelectorAll('.work-card').forEach(card => {
  card.addEventListener('click', () => {
    const fullImgSrc = card.getAttribute('data-full');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    modal.style.display = "block";
    modalImg.src = fullImgSrc;
  });
});

document.querySelector('.modal-close').addEventListener('click', () => {
  document.getElementById('imageModal').style.display = "none";
});
