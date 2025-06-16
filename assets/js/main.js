/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function () {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function (direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
      filters.addEventListener('click', function () {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();




// practice

const experienceData = {
  1: {
    company: "INFOTRIXS",
    role: "Backend Developer Intern",
    location: "Remote",
    date: "Jul 2023 - Aug 2023",
    description: [
      "Developed and maintained RESTful APIs using Django framework.",
      "Integrated PostgreSQL databases for data storage and retrieval.",
      "Designed API endpoints for seamless communication between services.",
      "Ensured backend functionality was robust and scalable.",
      "Collaborated with team members to optimize performance and resolve issues."
    ]
  },
  2: {
    company: "Postulate",
    role: "Full Stack Web Development Intern",
    location: "Remote",
    date: "Jun 2023 - Aug 2023",
    description: [
      "Built dynamic user interfaces using HTML, CSS, and JavaScript.",
      "Developed backend services and APIs with Python and Django.",
      "Collaborated on database schema design and implementation.",
      "Integrated frontend with backend for seamless user experience.",
      "Participated in full stack development and debugging processes."
    ]
  },
  3: {
    company: "The Sparks Foundation",
    role: "Web Development Intern",
    location: "Remote",
    date: "Apr 2023 - May 2023",
    description: [
      "Designed and developed responsive web pages using HTML, CSS, and JavaScript.",
      "Improved user experience through clean and interactive UI design.",
      "Implemented client-side functionality using JavaScript.",
      "Contributed to testing and debugging for reliable code delivery."
    ]
  }
};

for (let key in experienceData) {
  const experienceData = experienceData[key];
  console.log(`\n${experienceData.company} (${experienceData.role})`);
 experienceData.description.forEach(bullet => console.log("• " + bullet));
}






function showDetails(id, withImage, event) {
  event.stopPropagation(); // Prevent global click
  const data = experienceData[id];

  const detailsBox = document.getElementById('detailsBox');
  document.getElementById('companyName').innerText = data.company;
  document.getElementById('companyLocation').innerText = data.location;
  document.getElementById('companyDate').innerText = data.date;
  document.getElementById('companyDesc').innerText = data.description;
  detailsBox.style.display = 'block';

  if (withImage) {
    const imgSrc = event.target.closest('.exp-card').querySelector('img').src;
    document.getElementById('previewImg').src = imgSrc;
    document.getElementById('previewOverlay').style.display = 'flex';
  }

  setTimeout(() => {
    window.scrollTo({ top: detailsBox.offsetTop - 20, behavior: 'smooth' });
  }, 200);
}

function hidePreview() {
  document.getElementById('previewOverlay').style.display = 'none';
}

// Hide details if clicked outside
document.addEventListener('click', function (e) {
  const detailsBox = document.getElementById('detailsBox');
  if (detailsBox.style.display === 'block' && !detailsBox.contains(e.target)) {
    detailsBox.style.display = 'none';
  }
});



// contact practice
// Optional - Form handler
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Message sent successfully!");
});
