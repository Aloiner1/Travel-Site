let navLinks = document.querySelectorAll('.nav_links a');
console.log(navLinks);

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].onmouseenter = function () {
        navLinks[i].style.color = "red";
    }

    navLinks[i].onmouseleave = function () {
        navLinks[i].style.color = "white";
    }
}

const footer = document.querySelector('footer');
const footerObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                footer.classList.add('visible');
            } else {
                footer.classList.remove('visible');
            }
        });
    },
    { threshold: 0.1 }
);
footerObserver.observe(footer);

const sectionAnimations = {
    'main_screen': {
        text: 'fadeIn 1s ease-out',
        images: 'slideInUp 1s ease-out'
    },
    'our_tours_block': {
        text: 'slideInLeft 1s ease-out',
        images: 'zoomIn 1s ease-out'
    },
    'discoveries_section': {
        text: 'slideInRight 1s ease-out',
        images: 'slideInUp 1s ease-out'
    },
    'user_reviews_section': {
        text: 'fadeIn 1s ease-out',
        images: 'slideInRight 1s ease-out'
    }
};

let animatedSections = new Set();
const totalSections = Object.keys(sectionAnimations).length;
let whiteBackgroundApplied = false;

function applyWhiteBackground() {
    if (!whiteBackgroundApplied) {
        const sections = document.querySelectorAll('section:not(footer)');
        sections.forEach(section => {
            section.classList.add('white-background');
        });
        whiteBackgroundApplied = true;
    }
}

function resetElementAnimations(elements) {
    elements.forEach(el => {
        el.classList.remove('animated');
        el.classList.add('reset-animation');
        el.style.animation = 'none';
        el.style.opacity = '0';
        el.style.visibility = 'visible';
    });
}

const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            const section = entry.target;
            const sectionClass = section.className.split(' ')[0];
            const animConfig = sectionAnimations[sectionClass];

            if (animConfig) {
                const textElements = section.querySelectorAll('p, h1, h2, h3, h4, .main_screen__button, .discoveries_block__buttons-get, .discoveries_block__buttons-more, .other_tours');
                const imageElements = section.querySelectorAll('img');

                if (entry.isIntersecting) {
                    textElements.forEach(el => {
                        el.classList.add('animated');
                        el.classList.remove('reset-animation');
                        el.style.animation = animConfig.text;
                        el.style.visibility = 'visible';
                        el.style.opacity = '1';
                    });

                    imageElements.forEach(el => {
                        el.classList.add('animated');
                        el.classList.remove('reset-animation');
                        el.style.animation = animConfig.images;
                        el.style.visibility = 'visible';
                        el.style.opacity = '1';
                    });

                    if (!animatedSections.has(sectionClass)) {
                        animatedSections.add(sectionClass);
                        if (animatedSections.size === totalSections) {
                            setTimeout(applyWhiteBackground, 1000);
                        }
                    }
                } else {
                    resetElementAnimations(textElements);
                    resetElementAnimations(imageElements);
                }
            }
        });
    },
    { threshold: 0.1 }
);

const sections = document.querySelectorAll('.main_screen, .our_tours_block, .discoveries_section, .user_reviews_section');
sections.forEach(section => {
    sectionObserver.observe(section);
});

window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        animatedSections.clear();
        whiteBackgroundApplied = false;
        sections.forEach(section => {
            const textElements = section.querySelectorAll('p, h1, h2, h3, h4, .main_screen__button, .discoveries_block__buttons-get, .discoveries_block__buttons-more, .other_tours');
            const imageElements = section.querySelectorAll('img');
            resetElementAnimations(textElements);
            resetElementAnimations(imageElements);
            section.classList.remove('white-background');
            sectionObserver.observe(section);
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const mainScreen = document.querySelector('.main_screen');
    if (mainScreen) {
        const textElements = mainScreen.querySelectorAll('p, h1, h2, h3, h4, .main_screen__button');
        const imageElements = mainScreen.querySelectorAll('img');
        textElements.forEach(el => {
            el.classList.add('animated');
            el.classList.remove('reset-animation');
            el.style.animation = sectionAnimations['main_screen'].text;
            el.style.visibility = 'visible';
            el.style.opacity = '1';
        });
        imageElements.forEach(el => {
            el.classList.add('animated');
            el.classList.remove('reset-animation');
            el.style.animation = sectionAnimations['main_screen'].images;
            el.style.visibility = 'visible';
            el.style.opacity = '1';
        });
        animatedSections.add('main_screen');
    }
});