function scrollToContact(){
  document.getElementById("contact").scrollIntoView({behavior:"smooth"});
}

const sections = document.querySelectorAll(".fade-in");

/* SHOW SECTIONS ON PAGE LOAD */
window.addEventListener("load", () => {
  sections.forEach(sec => {
    sec.classList.add("show");
  });
});

/* ANIMATE ON SCROLL */
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const pos = sec.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});