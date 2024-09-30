let sections = document.querySelectorAll(".section");

  window.onscroll = () => {
    let top = window.scrollY;
    
    sections.forEach(sec => {
      let offset = sec.offsetTop -300;
      let height = sec.offsetHeight;
      
      if (top >= offset && top < offset + height) {
        sec.classList.add('show-animate');
      } else {
        sec.classList.remove('show-animate');
      }
    });
  };

Icon = document.querySelector(".icon");
nav = document.querySelector("nav");
Icon.onclick = function () {
  nav.classList.toggle("active");
};
