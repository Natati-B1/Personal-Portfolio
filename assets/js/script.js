document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll(".nav li a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });


  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav li a");

  window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY + 100; 

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });

  
  const skillItems = document.querySelectorAll(".skills-grid div");

  skillItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
      item.classList.add("hovered");
    });

    item.addEventListener("mouseleave", () => {
      item.classList.remove("hovered");
    });
  });
});
