// Scroll behavior for anchor links (smooth scroll)
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Toggle navbar for mobile (optional if you add hamburger)
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    toggleBtn.classList.toggle("active");
  });

  // Tutup menu saat salah satu link diklik (opsional)
  const links = navLinks.querySelectorAll("a, button");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      toggleBtn.classList.remove("active");
    });
  });
});

// Replace placeholders for dynamic avatars or ratings (if needed)
document.querySelectorAll(".avatar").forEach((el, index) => {
  el.style.zIndex = 10 - index;
});
