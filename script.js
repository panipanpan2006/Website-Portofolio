// Data for projects and experiences
const projectsData = {
    project1: {
        title: "Laravel CRUD Application",
        overview: "A full-featured data management system for lecturers and courses with analytics dashboard, search, filters, and real-time validation.",
        description: [
            "A Laravel-based CRUD system to manage lecturer and course data. Features include a Chart.js-powered dashboard for data visualization, advanced search and filtering, real-time form validation, responsive UI with Tailwind CSS, and database seeding for testing.",
            "The main goal is to provide an easy-to-use system for faculty admins or staff to manage academic data efficiently, speed up administrative processes, and minimize manual errors."
        ],
        technologies: ["Laravel", "PHP", "MySQL", "Blade", "Tailwind CSS", "Chart.js", "GitHub Pages"],
        images: [
            "assets/project1-1.png", "assets/project1-2.png", "assets/project1-3.png",
            "assets/project1-4.png", "assets/project1-5.png", "assets/project1-6.png",
            "assets/project1-7.png", "assets/project1-8.png"
        ],
        github: "https://github.com/panipanpan2006/crud-app"
    },
    project2: {
        title: "Simple Grade Converter (PHP)",
        overview: "A web app to manage student grades and automatically convert numerical scores to letter grades (A-E).",
        description: [
            "This project manages student grade data and automatically converts numerical scores to letter grades (A-E) for efficiency. I developed this Student Grade List app using pure PHP as practice in building simple yet functional web systems.",
            "The app allows users to add, view, and manage student data efficiently, complete with automatic score-to-letter grade conversion.",
            "The interface is built with external HTML and CSS for a clean and user-friendly design. Through this project, I practiced programming logic, data management, and basic CRUD concepts without frameworks, while strengthening my ability to write structured and scalable code.",
            "This project serves as a strong foundation for understanding web application workflows and prepares me to build more complex systems in the future."
        ],
        technologies: ["PHP", "HTML", "CSS", "JavaScript"],
        images: ["assets/project2-1.png", "assets/project2-2.png", "assets/project2-3.png", "assets/project2-4.png"],
        github: "https://github.com/panipanpan2006/php-daftar-mahasiswa"
    },
    project3: {
        title: "Book Management System",
        overview: "A simple Laravel-based book management app with CRUD, search, and year-based filtering.",
        description: [
            "A simple book management app built with Laravel featuring CRUD operations, search, and publication year filtering.",
            "This Digital Book Management project is a simple web application built with PHP to help users efficiently manage book collections. Through CRUD operations (Create, Read, Update, Delete), users can add, view, update, and delete book information such as title, author, and publication year.",
            "The interface is designed to be simple and user-friendly, while the backend logic processes data dynamically and connects to a database. This project demonstrates how PHP can be used to build practical data-driven applications and serves as a foundation for developing a more comprehensive digital library system in the future."
        ],
        technologies: ["Laravel", "PHP", "MySQL", "Blade", "Bootstrap"],
        images: [
            "assets/project3-1.png", "assets/project3-2.png", "assets/project3-3.png",
            "assets/project3-4.png", "assets/project3-5.png", "assets/project3-6.png"
        ],
        github: "https://github.com/panipanpan2006/manage-buku"
    }
};

const experienceData = {
    kepanitiaan1: {
        title: "Freshman Orientation (PMB)",
        role: "Evaluation",
        date: "August 2024",
        location: "Electrical Engineering Department, Faculty of Engineering, Diponegoro University",
        description: "Worked behind the scenes to develop evaluation parameters for each participant and compile scores for PMB 2024. Responsible for assessing new student activities during the orientation period. Evaluated participation and performance in various campus introduction activities. Coordinated with other divisions to ensure smooth event execution.",
        images: [
            "assets/kepanitiaan1-1.png",
            "assets/kepanitiaan1-2.png",
            "assets/kepanitiaan1-3.png"
        ]
    },
    kepanitiaan2: {
        title: "Basic Leadership Training (LKMM-Pra Dasar) Electrical Engineering 2024",
        role: "Facilitator",
        date: "November 2024",
        location: "Electrical Engineering Department, Faculty of Engineering, Diponegoro University",
        description: "Facilitated discussions and activities in the Student Leadership and Management Training program. Guided participants in understanding leadership and organizational concepts. Helped participants develop essential soft skills for organizational involvement. Shaped students into responsible, independent leaders with clear vision and effective teamwork skills.",
        images: [
            "assets/kepanitiaan2-1.png",
            "assets/kepanitiaan2-2.png",
            "assets/kepanitiaan2-3.png"
        ]
    },
    magang: {
        title: "Internship at PT. Lentera Bumi Nusantara",
        role: "Data Logger Team",
        date: "June - July 2024",
        location: "Ciheras, Cipatujah District, Tasikmalaya Regency, West Java 46189",
        description: "Interned at PT. Lentera Bumi Nusantara as part of the Data Logger team for 1 month. Responsible for collecting and analyzing wind speed data using anemometers at 5m and 10m heights. Activities included: Learning fundamentals of data logging and renewable energy power plants, Creating data analysis reports using CR850 data logger at different heights, Weekly presentation of analysis results, and Collaborating with the data logger team.",
        images: [
            "assets/magang-1.png",
            "assets/magang-2.png",
            "assets/magang-3.png",
            "assets/magang-4.png",
            "assets/magang-5.png",
            "assets/magang-6.png",
            "assets/magang-7.png",
            "assets/magang-8.png",
            "assets/magang-9.png"
        ]
    },
    prestasi1: {
        title: "1st Place - Table Tennis POR FT 2025",
        role: "Men's Doubles Athlete",
        date: "20-21 September 2025",
        location: "Student Center UNDIP, Jl. Prof. Eko Budihardjo, Tembalang, Semarang, Central Java 50275",
        description: "Won 1st place in the men's doubles table tennis competition at the Faculty of Engineering Sports Week 2025. Defeated multiple teams from various faculties over a 2-day tournament. Successfully advanced through quarterfinals, semifinals, and finals against strong opponents from different faculties.",
        images: [
            "assets/prestasi1-1.png",
            "assets/prestasi1-2.png",
            "assets/prestasi1-3.png"
        ]
    },
    prestasi2: {
        title: "3rd Place - Band Category, Engineering Festival 2023",
        role: "Guitarist",
        date: "17 November 2023",
        location: "Atap Langit Coffee n Eatery, Jl. Durian Raya, Pedalangan, Banyumanik, Semarang, Central Java 50268",
        description: "Won 3rd place in the band competition at Engineering Festival UNDIP 2023. Performed two designated songs and got evaluated by the judge. Competed against 10 bands from various faculties at Diponegoro University. Performance evaluated on musicality, stagecraft, creativity, and originality.",
        images: [
            "assets/prestasi2-1.png",
            "assets/prestasi2-2.png",
            "assets/prestasi2-3.png"
        ]
    }
};

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    updateActiveNavLink();
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    
    const spans = menuToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(7px, 7px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Smooth scroll
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        navMenu.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

// Nav link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Update active nav
function updateActiveNavLink() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
}

// Open Project Modal
function openProjectModal(projectId) {
    console.log("Mencari proyek:", projectId);
    const project = projectsData[projectId];
    
    if (!project) {
        console.error("ERROR: Proyek tidak ditemukan!", projectId);
        return;
    }
    
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${project.title}</h2>
                <button class="modal-close" onclick="closeModal(this)">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <div class="modal-body">
                <div class="modal-overview">
                    <h3>Project Overview</h3>
                    <p>${project.overview}</p>
                </div>

                <div class="modal-gallery">
                    <h3>Galeri</h3>
                    <div class="modal-images">
                        ${project.images.map(img => `
                            <img src="${img}" alt="${project.title}" class="modal-image" onclick="openLightbox('${img}')">
                        `).join('')}
                    </div>
                </div>

                <div class="modal-technologies">
                    <h3>Technology Used</h3>
                    <div class="tech-badges">
                        ${project.technologies.map(tech => `
                            <span class="tech-badge">${tech}</span>
                        `).join('')}
                    </div>
                </div>

                <div class="modal-description">
                    <h3>Deskripsi Lengkap</h3>
                    ${Array.isArray(project.description) 
                        ? project.description.map(p => `<p class="description-paragraph">${p}</p>`).join('')
                        : `<p class="description-paragraph">${project.description}</p>`
                }
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('modalContainer').appendChild(modal);
    document.body.style.overflow = 'hidden';
}

// Open Experience Modal
function openExperienceModal(experienceId) {
    const exp = experienceData[experienceId];
    if (!exp) return;
    
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${exp.title}</h2>
                <button class="modal-close" onclick="closeModal(this)">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <div class="modal-body">
                <div class="modal-info">
                    <div class="modal-info-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <span><strong>Role :</strong> ${exp.role}</span>
                    </div>
                    <div class="modal-info-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span><strong>Time :</strong> ${exp.date}</span>
                    </div>
                    <div class="modal-info-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span><strong>Location :</strong> ${exp.location}</span>
                    </div>
                </div>
                <div class="modal-description">
                    <h3>Description</h3>
                    <p>${exp.description}</p>
                </div>
                <div class="modal-gallery">
                    <h3>Documentation</h3>
                    <div class="modal-images">
                        ${exp.images.map(img => `
                            <img src="${img}" alt="${exp.title}" class="modal-image" onclick="openLightbox('${img}')">
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('modalContainer').appendChild(modal);
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal(button) {
    const modal = button.closest('.modal-overlay');
    modal.remove();
    document.body.style.overflow = 'auto';
}

// Lightbox
function openLightbox(imageSrc) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `<img src="${imageSrc}" alt="Preview">`;
    lightbox.onclick = function() { this.remove(); };
    document.body.appendChild(lightbox);
}

// Click outside modal
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.remove();
        document.body.style.overflow = 'auto';
    }
});

// Intersection Observer for animations
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Progress Bar Animation
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            progressObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

// DOM Loaded
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.card, .skill-card, .project-card, .experience-card, .contact-card');
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Progress bar animation
    document.querySelectorAll('.skill-card').forEach(card => {
        progressObserver.observe(card);
    });

    // Ripple effect
    document.querySelectorAll('.btn-view, .btn-github').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    console.log('%c👋 Welcome to Ivan\'s Portfolio!', 'color: #06b6d4; font-size: 20px; font-weight: bold;');
    console.log('%c💻 Built with HTML, CSS, and JavaScript', 'color: #3b82f6; font-size: 14px;');
});