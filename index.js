// Tailwind script already included via CDN

function initTailwind() {
    // Custom colors if needed, but using inline
}

// Smooth scroll
function smoothScrollTo(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Mobile menu
let mobileOpen = false;

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('mobile-menu-button').querySelector('i');

    mobileOpen = !mobileOpen;

    if (mobileOpen) {
        menu.classList.remove('hidden');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        menu.classList.add('hidden');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
    }
}

// Project data
const projects = [
    {
        id: 1,
        title: "Nimotallahi",
        category: "School Management",
        image: "./assets/Nimotallahi.png",
        description: "A comprehensive school management system frontend. Built to handle student records, administrative tasks, and academic tracking. Designed for seamless institutional workflow.",
        tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
        live: "https://nimotallahi.vercel.app/",
        github: "https://github.com/PrinceBiola/Nimotallahi-School",
        codeSnippet: `// Student Enrollment Logic\nconst enrollStudent = (data) => {\n  const student = { ...data, enrolledAt: new Date() };\n  // ...\n};`,
        impact: "Streamlined administrative tasks for educational institutions"
    },
    {
        id: 2,
        title: "Flow Space 2.0",
        category: "AI Infinite Canvas",
        image: "./assets/FlowSpace.png",
        description: "The infinite canvas for your best ideas. Brainstorm, wireframe, and diagram in real-time. Features AI-flowchart generation, smart shapes, and zero-latency sync.",
        tech: ["React", "Node.js", "MongoDB", "Tailwind", "Yjs", "AI"],
        live: "https://flow-space-two.vercel.app/",
        github: "https://github.com/PrinceBiola/FlowSpace",
        codeSnippet: `// AI Flowchart Generation\nasync function generateFlowchart(prompt) {\n  const response = await ai.generate(prompt);\n  renderDiagram(response);\n}`,
        impact: "Zero-latency collaboration with integrated AI brainstorming"
    }
];

// Render projects
function renderProjects() {
    const container = document.getElementById('projects-grid');
    container.innerHTML = '';

    projects.forEach(project => {
        const cardHTML = `
            <div onclick="showProjectModal(${project.id})" 
                 class="project-card group bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden cursor-pointer">
                <div class="relative h-56 overflow-hidden">
                    <img src="${project.image}" 
                         class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                    <div class="absolute top-4 right-4 bg-black/70 text-[10px] font-mono px-3 py-1 rounded-full">
                        ${project.category}
                    </div>
                </div>
                <div class="p-6">
                    <div class="font-semibold text-xl mb-2">${project.title}</div>
                    <p class="text-zinc-400 text-sm line-clamp-3 mb-6">${project.description}</p>
                    
                    <div class="flex flex-wrap gap-2">
                        ${project.tech.slice(0, 3).map(t => `
                            <span class="bg-zinc-800 text-emerald-400 text-[10px] px-4 py-1.5 rounded-2xl">${t}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// Show modal
let currentProject = null;

function showProjectModal(id) {
    currentProject = projects.find(p => p.id === id);
    if (!currentProject) return;

    // Title
    document.getElementById('modal-title').textContent = currentProject.title;

    // Image
    const imgContainer = document.getElementById('modal-image');
    imgContainer.innerHTML = `<img src="${currentProject.image}" class="w-full h-full object-cover">`;

    // Description
    document.getElementById('modal-description').innerHTML = `
        <p>${currentProject.description}</p>
        <p class="mt-6 text-emerald-400 font-medium">Built from the ground up to solve real pain points in the African tech ecosystem.</p>
    `;

    // Tech
    const techContainer = document.getElementById('modal-tech');
    techContainer.innerHTML = currentProject.tech.map(t => `
        <span class="inline-block bg-zinc-800 text-xs px-5 py-2 rounded-3xl">${t}</span>
    `).join('');

    // Links
    document.getElementById('modal-live').href = currentProject.live;
    document.getElementById('modal-github').href = currentProject.github;

    // Impact
    document.getElementById('modal-impact').textContent = currentProject.impact;

    // Code
    document.getElementById('modal-code').textContent = currentProject.codeSnippet;

    // Show modal
    document.getElementById('project-modal').classList.remove('hidden');
    document.getElementById('project-modal').classList.add('flex');
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// Fake form submit
function submitForm() {
    const form = document.getElementById('contact-form');
    const btn = form.querySelector('button');

    btn.innerHTML = `
        <span class="inline-block animate-spin mr-2">⟳</span>
        SENDING...
    `;

    setTimeout(() => {
        btn.innerHTML = `
            MESSAGE SENT ✓
        `;
        btn.classList.add('!bg-emerald-500', '!text-white');

        setTimeout(() => {
            // Reset
            form.reset();
            btn.innerHTML = `
                SEND MESSAGE
                <i class="fa-solid fa-arrow-right"></i>
            `;
            btn.classList.remove('!bg-emerald-500', '!text-white');
        }, 2000);
    }, 1500);
}

// Keyboard escape for modal
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('project-modal');
        if (!modal.classList.contains('hidden')) {
            closeModal();
        }
    }
});

// Initialize everything
window.onload = function () {
    renderProjects();

    // Mobile menu listener
    document.getElementById('mobile-menu-button').addEventListener('click', toggleMobileMenu);

    // Close mobile menu on link click (already handled)

    console.log('%cPortfolio template loaded successfully ✨', 'color: #10b981; font-family: monospace');
};
