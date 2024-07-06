//* initialize swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor:true,
  spaceBetween :30,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    //! responsive breakpoints
  breakpoints:{
    0:{
        slidesPerView:1
    },
    480:{
slidesPerView:2
    },
    768:{
        slidesPerView:2
    },
    1400:{
        slidesPerView:2
    },
    1440:{
        slidesPerView:3
    }


  }
  });
// Function to update the active state of navigation links based on scroll position
function updateNavbar() {
  const sections = document.querySelectorAll('section'); // Select all sections
  const navbarLinks = document.querySelectorAll('.nav-item a'); // Select all navigation links

  sections.forEach(section => {
      const sectionTop = section.offsetTop; // Get the top offset of the section
      const sectionHeight = section.clientHeight; // Get the height of the section

      // Check if the scroll position is within the bounds of the section
      if (document.documentElement.scrollTop >= sectionTop && document.documentElement.scrollTop < sectionTop + sectionHeight) {
          const sectionId = section.getAttribute('id'); // Get the ID of the section
          navbarLinks.forEach(link => {
              if (link.getAttribute('href') === `#${sectionId}`) {
                  link.parentElement.classList.add('active'); // Add 'active' class to the corresponding navigation link
              } else {
                  link.parentElement.classList.remove('active'); // Remove 'active' class from other navigation links
              }
          });
      }
  });
}

// Event listener for scroll events to trigger the updateNavbar function
window.addEventListener('scroll', updateNavbar);

// Initial call to updateNavbar to set initial state
updateNavbar();
