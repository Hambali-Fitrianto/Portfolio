// Menambahkan kelas 'active' pada navbar link yang sesuai
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const sections = document.querySelectorAll('section');

    function setActiveLink() {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY <= sectionBottom) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);
    setActiveLink(); // Memanggil fungsi untuk menetapkan link aktif saat halaman dimuat
});

// Menambahkan atau menghapus kelas 'scrolled' pada navbar ketika scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
