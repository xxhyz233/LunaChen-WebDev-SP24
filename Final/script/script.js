// Fullscreen image script
const columnItem = document.querySelectorAll(".column-item");
const fullscreenView = document.querySelector(".fullscreen-view");
const fullscreenImage = document.querySelector(".fullscreen-image");
const closeBtn = document.querySelector(".close");

if (!fullscreenView || !fullscreenImage || !closeBtn) {
  console.error("Necessary elements not found");
}

columnItem.forEach((item) => {
  item.addEventListener("click", () => {
    const imgSrc = item.querySelector("img").src;
    fullscreenImage.src = imgSrc;
    fullscreenView.classList.add("show");
    gsap.fromTo(
      fullscreenImage,
      { opacity: 0, ease: "none" },
      { opacity: 1, duration: 0.2 }
    );
  });
});

if (closeBtn) {
  closeBtn.addEventListener("click", closeFullscreen);
} else {
  console.error("Close button element not found.");
}

fullscreenView.addEventListener("click", (event) => {
  console.log("Clicked element:", event.target); // Debugging line
  if (event.target === fullscreenView || event.target === closeBtn) {
    closeFullscreen();
  }
});

fullscreenImage.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent clicks on the image from bubbling to fullscreenView
});

function closeFullscreen() {
  fullscreenView.classList.remove("show");
}


// DOM load before GSAP animation 
document.addEventListener("DOMContentLoaded", (event) => {
  // Header scroll animation
  let lastScrollTop = 0;
  const header = document.querySelector('.sticky'); // Select your header class
  window.addEventListener('scroll', function() {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
          // Scroll down animation
          gsap.to(header, { y: '-100%', duration: 0.3 });
      } else {
          // Scroll up animation
          gsap.to(header, { y: '0%', duration: 0.3 });
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }, false);

  // Page load animation
  const ani = gsap.utils.toArray(".ani");
  gsap.fromTo(
    ani,
    {
      opacity: 0,
      ease: "power2.out",
    },
    {
      opacity: 1,
      delay: 0.5,
      duration: 0.8,
      stagger: 0.1,
    }
  );
  
  // For slower pages like FILM/INFO
  const slowAni = gsap.utils.toArray(".slowAni");
  gsap.fromTo(
    slowAni,
    {
      opacity: 0,
      ease: "power2.out",
    },
    {
      opacity: 1,
      delay: 1,
      duration: 2.4,
      stagger: 0.8,
    }
  );
});
