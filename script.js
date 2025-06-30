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
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Replace placeholders for dynamic avatars or ratings (if needed)
document.querySelectorAll(".avatar").forEach((el, index) => {
  el.style.zIndex = 10 - index;
});
