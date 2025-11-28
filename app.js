 document.addEventListener('DOMContentLoaded', () => {
            // === 1. Dark Mode Logic ===
            const toggleButton = document.getElementById('mode-toggle');
            const body = document.body;

            const storedTheme = localStorage.getItem('theme');

            if (storedTheme === 'dark') {
                body.classList.remove('light-mode');
                toggleButton.innerHTML = '<i class="ti ti-sun">';
            } else {
                body.classList.add('light-mode');
                toggleButton.innerHTML = '<i class="ti ti-moon">';
            }

            toggleButton.addEventListener('click', () => {
                const isLightMode = body.classList.toggle('light-mode');

                if (isLightMode) {
                    toggleButton.innerHTML = '<i class="ti ti-sun">';
                    localStorage.setItem('theme', 'light');
                } else {
                    toggleButton.innerHTML = '<i class="ti ti-moon">';
                    localStorage.setItem('theme', 'dark');
                }
            });

            // === 2. MOBILE MENU TOGGLE LOGIC (New Feature) ===
            const menuToggle = document.getElementById('menu-toggle');
            const navLinks = document.querySelector('.nav-links');

            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('nav-open');
                // Optional: Change icon to X when open
                menuToggle.innerHTML = navLinks.classList.contains('nav-open') ? '&times;' : '&#9776;';
            });

            // Close menu when a link is clicked (for better mobile UX)
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if (navLinks.classList.contains('nav-open')) {
                        navLinks.classList.remove('nav-open');
                        menuToggle.innerHTML = '&#9776;';
                    }
                });
            });


            // === 3. Preloader Hide Feature ===
            const preloader = document.getElementById('preloader');
            setTimeout(() => {
                preloader.classList.add('hidden');
            }, 500);

            // === 4. Scroll Reveal Animation ===
            const sections = document.querySelectorAll('section');

            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                observer.observe(section);
            });

            // === 5. Back-to-Top Button Control ===
            const backToTopButton = document.getElementById('back-to-top');

            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    backToTopButton.classList.add('visible');
                } else {
                    backToTopButton.classList.remove('visible');
                }
            });

            backToTopButton.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });