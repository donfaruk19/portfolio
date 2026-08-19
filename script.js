// Repository data
const repositories = [
    {
        name: 'crypto-cipher',
        description: 'Advanced CLI tool for encryption and decryption using Caesar Cipher algorithm. Demonstrates fundamental cryptographic principles and robust Python programming practices.',
        language: 'Python',
        url: 'https://github.com/donfaruk19/crypto-cipher',
        stars: 12
    },
    {
        name: 'PixelFlow',
        description: 'Image encryption tool using pixel manipulation. Implements advanced image processing techniques for secure visual data protection with multiple encryption methods.',
        language: 'Python',
        url: 'https://github.com/donfaruk19/PixelFlow',
        stars: 8
    },
    {
        name: 'dsn-bct-agent',
        description: 'Containerized LLM agent for Nigerian consumer market simulation. Analyzes market dynamics and consumer behavior.',
        language: 'Python',
        url: 'https://github.com/donfaruk19/dsn-bct-agent',
        stars: 5
    },
    {
        name: 'passchecker',
        description: 'Password complexity checker with enhanced security features. Evaluates password strength and provides recommendations.',
        language: 'Python',
        url: 'https://github.com/donfaruk19/passchecker',
        stars: 7
    },
    {
        name: 'G-eye',
        description: 'Threat map and security analysis tools. Provides visualization and analysis of security threats with comprehensive reporting capabilities.',
        language: 'TypeScript',
        url: 'https://github.com/donfaruk19/G-eye',
        stars: 6
    },
    {
        name: 'Smart_audiobook_converter',
        description: 'Transform book content into engaging audio format with reverse conversion capability. Accessible information in multiple forms.',
        language: 'Python',
        url: 'https://github.com/donfaruk19/Smart_audiobook_converter',
        stars: 10
    },
    {
        name: 'basic_keylogger',
        description: 'Educational implementation of a basic keylogger for understanding cybersecurity concepts related to keystroke logging.',
        language: 'Python',
        url: 'https://github.com/donfaruk19/basic_keylogger',
        stars: 4
    },
    {
        name: 'regcs',
        description: 'Landing page for cybersecurity seminar registration that generates QR codes and verifies entry.',
        language: 'HTML',
        url: 'https://github.com/donfaruk19/regcs',
        stars: 3
    },
    {
        name: 'Exam_simulation',
        description: 'Interactive exam simulation platform with tracking and analytics.',
        language: 'JavaScript',
        url: 'https://github.com/donfaruk19/Exam_similation',
        stars: 5
    },
    {
        name: 'level3',
        description: 'Local system chat application for peer-to-peer communication within a local network.',
        language: 'HTML',
        url: 'https://github.com/donfaruk19/level3',
        stars: 6
    },
    {
        name: 'unspoken_love',
        description: 'Interactive story-telling web application with an engaging narrative experience.',
        language: 'HTML',
        url: 'https://github.com/donfaruk19/unspoken_love',
        stars: 2
    },
    {
        name: 'herrbirthday',
        description: 'Special birthday celebration web application with interactive features.',
        language: 'HTML',
        url: 'https://github.com/donfaruk19/herrbirthday',
        stars: 3
    }
];

// Repository filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const reposContainer = document.getElementById('reposContainer');

// Function to render repositories
function renderRepositories(filter = 'all') {
    reposContainer.innerHTML = '';
    
    let filtered = repositories;
    if (filter !== 'all') {
        filtered = repositories.filter(repo => repo.language === filter);
    }

    filtered.forEach(repo => {
        const repoCard = document.createElement('div');
        repoCard.className = 'repo-card';
        repoCard.innerHTML = `
            <div class="repo-header">
                <a href="${repo.url}" target="_blank" class="repo-name">
                    <i class="fas fa-code-branch"></i> ${repo.name}
                </a>
                ${repo.language ? `<span class="repo-language">${repo.language}</span>` : ''}
            </div>
            <p class="repo-description">${repo.description}</p>
            <div class="repo-footer">
                <div class="repo-stars">
                    <i class="fas fa-star"></i> ${repo.stars}
                </div>
                <a href="${repo.url}" target="_blank" class="repo-link">
                    View <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        `;
        reposContainer.appendChild(repoCard);
    });
}

// Filter button event listeners
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filter = button.getAttribute('data-filter');
        renderRepositories(filter);
    });
});

// Initial render
renderRepositories();

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
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
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

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(this);
        const data = {
            name: this.querySelector('input[placeholder="Your Name"]').value,
            email: this.querySelector('input[placeholder="Your Email"]').value,
            subject: this.querySelector('input[placeholder="Subject"]').value,
            message: this.querySelector('textarea').value
        };

        // Show success message
        alert(`Thank you for your message, ${data.name}! I'll get back to you soon.`);
        this.reset();
    });
}
