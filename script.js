document.addEventListener('DOMContentLoaded', function() {
    // Initialize ScrollReveal animations
    ScrollReveal().reveal('.hero h1', { delay: 200 });
    ScrollReveal().reveal('.hero p', { delay: 400 });
    ScrollReveal().reveal('section h2', { delay: 200, origin: 'left', distance: '50px' });
    ScrollReveal().reveal('.experience-card, .project-card', { delay: 300, origin: 'bottom', distance: '50px', interval: 200 });
    ScrollReveal().reveal('.skill', { delay: 300, origin: 'bottom', distance: '30px', interval: 100 });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Theme switcher
    const themeSwitcher = document.getElementById('theme-switcher');
    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', switchTheme);
        loadThemeFromLocalStorage();
    }

    // Update view counter on page load
    updateViewCounter();
});

function updateViewCounter() {
    let views = localStorage.getItem('resumeViews');
    if (!views) {
        views = 0;
    } else {
        views = parseInt(views);
    }

    views++;
    localStorage.setItem('resumeViews', views);

    const viewCounterElement = document.getElementById('view-counter');
    if (viewCounterElement) {
        viewCounterElement.innerText = 'Views: ' + views;
    }
}

function switchTheme() {
    document.body.classList.toggle('dark-theme');
    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
}

function loadThemeFromLocalStorage() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme + '-theme');
    }
}