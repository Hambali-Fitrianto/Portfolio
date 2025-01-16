document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Menambahkan event listener untuk setiap link
    navLinks.forEach((link) => {
        link.addEventListener('click', function (event) {
            // Menghentikan default behavior dari link
            event.preventDefault();

            // Menggulung ke bagian yang dituju
            const targetSection = document.querySelector(link.getAttribute('href'));
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Mengatur posisi scroll agar lebih pas (mengurangi navbar)
                behavior: 'smooth'
            });

            // Menambahkan kelas 'active' pada link yang diklik
            navLinks.forEach((otherLink) => {
                otherLink.classList.remove('active');
            });
            link.classList.add('active');
        });
    });
});
