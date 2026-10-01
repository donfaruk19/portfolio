// Certificate filtering functionality
const certFilterButtons = document.querySelectorAll('.cert-filter-btn');
const certCards = document.querySelectorAll('.cert-card');

certFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
        certFilterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-cert-filter');
        
        certCards.forEach(card => {
            const cardCategory = card.getAttribute('data-cert-category');
            
            if (filterValue === 'all' || cardCategory === filterValue) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Add transition styles to cert cards
certCards.forEach(card => {
    card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    card.style.opacity = '1';
    card.style.transform = 'scale(1)';
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        }
    });
}

// Intersection Observer for animations
// ✅ FIX: threshold 0 so tall sections reveal reliably
const observerOptions = {
    threshold: 0,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            // Stop observing once revealed (performance + prevents flicker)
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Endorsement bars animation
const endorsementCards = document.querySelectorAll('.endorsement');
endorsementCards.forEach(card => {
    const fill = card.querySelector('.endorsement-fill');
    if (fill) {
        const width = fill.style.width;
        fill.style.width = '0';
        
        const barObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    fill.style.width = width;
                    barObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0 });

        barObserver.observe(card);
    }
});

// Add active nav link styling
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.style.color = 'var(--text-main)';
        const href = link.getAttribute('href');
        if (href && href.includes(current) && current) {
            link.style.color = 'var(--accent)';
        }
    });
});