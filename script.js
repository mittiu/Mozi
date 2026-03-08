// ===================================
// Playlist "Músicas que me lembram você"
// Animações e interações
// ===================================

// --- Dust Particles ---
(function createDust() {
  var container = document.getElementById("dustContainer");
  for (var i = 0; i < 15; i++) {
    var dot = document.createElement("div");
    dot.className = "dust";
    var size = Math.random() * 3 + 1;
    dot.style.width = size + "px";
    dot.style.height = size + "px";
    dot.style.left = Math.random() * 100 + "%";
    dot.style.top = (Math.random() * 100 + 100) + "%";
    dot.style.animation =
      "float-dust " + (Math.random() * 15 + 20) + "s linear infinite";
    dot.style.animationDelay = Math.random() * 20 + "s";
    container.appendChild(dot);
  }
})();

// --- Scroll Reveal ---
(function setupReveal() {
  var elements = document.querySelectorAll(".reveal");

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var delay = parseInt(entry.target.getAttribute("data-delay") || "0", 10);
          setTimeout(function () {
            entry.target.classList.add("visible");
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "-30px" }
  );

  elements.forEach(function (el) {
    observer.observe(el);
  });
})();
