// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Console welcome
console.log("%cHey there 👋 Welcome to my portfolio!", "color: #1ae0ff; font-size: 16px;");

// Dark mode toggle
const toggle = document.getElementById("theme-toggle");
toggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});