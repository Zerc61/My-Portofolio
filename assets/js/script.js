document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});



function showContact() {
    document.getElementById("contact-box").classList.add("show");
    document.getElementById("overlay").classList.add("show");
  }

  function hideContact() {
    document.getElementById("contact-box").classList.remove("show");
    document.getElementById("overlay").classList.remove("show");
  }






    AOS.init();