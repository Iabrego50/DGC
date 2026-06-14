// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for anchor links
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

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Simple validation
        if (!formObject.name || !formObject.email || !formObject.message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formObject.email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Show success message (in a real app, this would send to a server)
        alert('Thank you for your message! I\'ll get back to you soon.');
        this.reset();
    });
}

// Newsletter Form Handling
const newsletterForms = document.querySelectorAll('.newsletter-form');
newsletterForms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Show success message
        alert('Thank you for subscribing! You\'ll receive my latest insights in your inbox.');
        this.reset();
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Animate work cards
    const workCards = document.querySelectorAll('.work-card');
    workCards.forEach(card => {
        observer.observe(card);
    });
    
    // Animate expertise items
    const expertiseItems = document.querySelectorAll('.expertise-item');
    expertiseItems.forEach(item => {
        observer.observe(item);
    });
    
    // Animate article cards
    const articleCards = document.querySelectorAll('.article-card');
    articleCards.forEach(card => {
        observer.observe(card);
    });
    
    // Animate service items
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        observer.observe(item);
    });
    
    // Animate skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        observer.observe(category);
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Stats counter animation
const animateStats = () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent);
        const increment = target / 100;
        let current = 0;
        
        const updateCount = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.floor(current) + '+';
                requestAnimationFrame(updateCount);
            } else {
                stat.textContent = target + '+';
            }
        };
        
        updateCount();
    });
};

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// Typing effect for hero text
const typeWriter = (element, text, speed = 50) => {
    let i = 0;
    element.textContent = '';
    
    const typing = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    };
    
    typing();
};

// Add loading animation
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to page elements
    const pageElements = document.querySelectorAll('section');
    pageElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Form field focus effects
document.addEventListener('DOMContentLoaded', () => {
    const formFields = document.querySelectorAll('input, textarea, select');
    
    formFields.forEach(field => {
        field.addEventListener('focus', () => {
            field.parentElement.classList.add('focused');
        });
        
        field.addEventListener('blur', () => {
            if (!field.value) {
                field.parentElement.classList.remove('focused');
            }
        });
    });
});

// Lazy loading for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
});

// Back to top button
const createBackToTopButton = () => {
    const button = document.createElement('button');
    button.textContent = '↑';
    button.classList.add('back-to-top');
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #2563eb;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1000;
        font-size: 20px;
    `;
    
    document.body.appendChild(button);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.opacity = '1';
        } else {
            button.style.opacity = '0';
        }
    });
    
    // Smooth scroll to top
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

// Initialize back to top button
document.addEventListener('DOMContentLoaded', createBackToTopButton);

// ============================================================
// Research Brief Tool
// ============================================================
(() => {
    const form = document.getElementById('briefForm');
    const preview = document.getElementById('briefPreview');
    if (!form || !preview) return;

    const STORAGE_KEY = 'sc-research-brief-v1';

    const escapeHtml = (str) => String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    const formatDate = (value) => {
        if (!value) return '';
        const d = new Date(value + 'T00:00:00');
        if (Number.isNaN(d.getTime())) return value;
        return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
    };

    const splitLines = (value) => (value || '')
        .split('\n')
        .map(s => s.trim())
        .filter(Boolean);

    const getMethods = () => {
        const checked = Array.from(form.querySelectorAll('input[name="methods"]:checked')).map(i => i.value);
        const other = (form.methodsOther.value || '')
            .split(',')
            .map(s => s.trim())
            .filter(Boolean);
        return [...checked, ...other];
    };

    const getData = () => ({
        projectTitle: form.projectTitle.value.trim(),
        owner: form.owner.value.trim(),
        stakeholders: form.stakeholders.value.trim(),
        briefDate: form.briefDate.value,
        status: form.status.value,
        background: form.background.value.trim(),
        businessGoal: form.businessGoal.value.trim(),
        objectives: splitLines(form.objectives.value),
        questions: splitLines(form.questions.value),
        hypotheses: splitLines(form.hypotheses.value),
        methods: getMethods(),
        audience: form.audience.value.trim(),
        sampleSize: form.sampleSize.value.trim(),
        incentive: form.incentive.value.trim(),
        recruitment: form.recruitment.value.trim(),
        startDate: form.startDate.value,
        endDate: form.endDate.value,
        milestones: splitLines(form.milestones.value),
        deliverables: splitLines(form.deliverables.value),
        successMetrics: form.successMetrics.value.trim(),
        outOfScope: form.outOfScope.value.trim(),
        assumptions: form.assumptions.value.trim(),
        risks: form.risks.value.trim(),
    });

    const hasAnyInput = (d) => {
        const values = Object.values(d);
        return values.some(v => Array.isArray(v) ? v.length > 0 : Boolean(v && v !== 'Draft'));
    };

    const renderPreview = (d) => {
        if (!hasAnyInput(d)) {
            preview.innerHTML = '<p class="brief-placeholder">Your research brief will appear here as you fill in the form.</p>';
            return;
        }

        const title = d.projectTitle || 'Untitled Research Brief';
        const metaBits = [];
        if (d.owner) metaBits.push(`<span><strong>Lead:</strong>${escapeHtml(d.owner)}</span>`);
        if (d.stakeholders) metaBits.push(`<span><strong>Stakeholders:</strong>${escapeHtml(d.stakeholders)}</span>`);
        if (d.briefDate) metaBits.push(`<span><strong>Date:</strong>${escapeHtml(formatDate(d.briefDate))}</span>`);
        if (d.status) metaBits.push(`<span><strong>Status:</strong>${escapeHtml(d.status)}</span>`);

        const section = (heading, body) => body ? `<h2>${escapeHtml(heading)}</h2>${body}` : '';
        const para = (text) => text ? `<p>${escapeHtml(text).replace(/\n/g, '<br>')}</p>` : '';
        const list = (items) => items.length ? `<ul>${items.map(i => `<li>${escapeHtml(i)}</li>`).join('')}</ul>` : '';

        const timelineRange = [d.startDate, d.endDate].filter(Boolean).map(formatDate).join(' → ');

        let html = `<h1>${escapeHtml(title)}</h1>`;
        if (metaBits.length) html += `<div class="brief-meta">${metaBits.join('')}</div>`;

        html += section('Background', para(d.background));
        html += section('Business goal', para(d.businessGoal));
        html += section('Research objectives', list(d.objectives));
        html += section('Research questions', list(d.questions));
        html += section('Hypotheses', list(d.hypotheses));

        let methodBlock = '';
        if (d.methods.length) methodBlock += list(d.methods);
        if (d.audience) methodBlock += `<p><strong>Audience:</strong> ${escapeHtml(d.audience)}</p>`;
        const sampleLine = [d.sampleSize && `Sample: ${d.sampleSize}`, d.incentive && `Incentive: ${d.incentive}`].filter(Boolean).join(' · ');
        if (sampleLine) methodBlock += `<p>${escapeHtml(sampleLine)}</p>`;
        if (d.recruitment) methodBlock += `<p><strong>Recruitment:</strong> ${escapeHtml(d.recruitment)}</p>`;
        html += section('Method & participants', methodBlock);

        let timelineBlock = '';
        if (timelineRange) timelineBlock += `<p><strong>Window:</strong> ${escapeHtml(timelineRange)}</p>`;
        if (d.milestones.length) timelineBlock += list(d.milestones);
        html += section('Timeline', timelineBlock);

        html += section('Deliverables', list(d.deliverables));
        html += section('Success metrics', para(d.successMetrics));
        html += section('Out of scope', para(d.outOfScope));
        html += section('Assumptions & constraints', para(d.assumptions));
        html += section('Risks', para(d.risks));

        preview.innerHTML = html;
    };

    const toMarkdown = (d) => {
        const lines = [];
        lines.push(`# ${d.projectTitle || 'Untitled Research Brief'}`);
        lines.push('');
        const metaRows = [];
        if (d.owner) metaRows.push(`- **Research lead:** ${d.owner}`);
        if (d.stakeholders) metaRows.push(`- **Stakeholders:** ${d.stakeholders}`);
        if (d.briefDate) metaRows.push(`- **Date:** ${formatDate(d.briefDate)}`);
        if (d.status) metaRows.push(`- **Status:** ${d.status}`);
        if (metaRows.length) {
            lines.push(...metaRows, '');
        }

        const addSection = (heading, body) => {
            if (!body) return;
            lines.push(`## ${heading}`, '', body, '');
        };
        const bullets = (items) => items.map(i => `- ${i}`).join('\n');

        if (d.background) addSection('Background', d.background);
        if (d.businessGoal) addSection('Business goal', d.businessGoal);
        if (d.objectives.length) addSection('Research objectives', bullets(d.objectives));
        if (d.questions.length) addSection('Research questions', bullets(d.questions));
        if (d.hypotheses.length) addSection('Hypotheses', bullets(d.hypotheses));

        const methodParts = [];
        if (d.methods.length) methodParts.push(bullets(d.methods));
        if (d.audience) methodParts.push(`**Audience:** ${d.audience}`);
        const sampleLine = [d.sampleSize && `Sample: ${d.sampleSize}`, d.incentive && `Incentive: ${d.incentive}`].filter(Boolean).join(' · ');
        if (sampleLine) methodParts.push(sampleLine);
        if (d.recruitment) methodParts.push(`**Recruitment:** ${d.recruitment}`);
        if (methodParts.length) addSection('Method & participants', methodParts.join('\n\n'));

        const timelineParts = [];
        const timelineRange = [d.startDate, d.endDate].filter(Boolean).map(formatDate).join(' → ');
        if (timelineRange) timelineParts.push(`**Window:** ${timelineRange}`);
        if (d.milestones.length) timelineParts.push(bullets(d.milestones));
        if (timelineParts.length) addSection('Timeline', timelineParts.join('\n\n'));

        if (d.deliverables.length) addSection('Deliverables', bullets(d.deliverables));
        if (d.successMetrics) addSection('Success metrics', d.successMetrics);
        if (d.outOfScope) addSection('Out of scope', d.outOfScope);
        if (d.assumptions) addSection('Assumptions & constraints', d.assumptions);
        if (d.risks) addSection('Risks', d.risks);

        return lines.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n';
    };

    const slugify = (text) => (text || 'research-brief')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .slice(0, 60) || 'research-brief';

    const showToast = (message) => {
        let toast = document.querySelector('.brief-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'brief-toast';
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.classList.add('show');
        clearTimeout(showToast._t);
        showToast._t = setTimeout(() => toast.classList.remove('show'), 1800);
    };

    const saveState = () => {
        try {
            const state = {
                values: Object.fromEntries(new FormData(form).entries()),
                methods: Array.from(form.querySelectorAll('input[name="methods"]:checked')).map(i => i.value),
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch (_) { /* ignore quota errors */ }
    };

    const loadState = () => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return;
            const state = JSON.parse(raw);
            Object.entries(state.values || {}).forEach(([key, value]) => {
                if (key === 'methods') return;
                const field = form.elements.namedItem(key);
                if (field && !field.length) field.value = value;
            });
            (state.methods || []).forEach(val => {
                const cb = form.querySelector(`input[name="methods"][value="${val}"]`);
                if (cb) cb.checked = true;
            });
        } catch (_) { /* ignore parse errors */ }
    };

    const update = () => {
        const data = getData();
        renderPreview(data);
        saveState();
    };

    const sample = {
        projectTitle: 'Checkout Abandonment Discovery Study',
        owner: 'Sarah Chen, Director of UX Research',
        stakeholders: 'PM: Alex Rivera, Design Lead: Priya Shah, Eng Manager: Dan Okafor',
        briefDate: new Date().toISOString().slice(0, 10),
        status: 'Draft',
        background: 'Checkout conversion dropped 8% QoQ after the May redesign. Analytics show abandonment concentrated on the payment step, but we lack qualitative signal on why.',
        businessGoal: 'Inform the Q3 checkout roadmap by identifying the top 3 causes of payment-step abandonment.',
        objectives: 'Understand why users abandon at the payment step\nIdentify trust and comprehension breakdowns\nSurface the highest-leverage design opportunities',
        questions: 'What causes hesitation when users reach payment?\nWhich elements of the new form reduce trust?\nHow do users expect saved payment methods to behave?',
        hypotheses: 'Users do not trust the new inline card form\nThe promo-code field is pulling attention away from the CTA',
        methods: ['User interviews', 'Usability testing', 'Analytics review'],
        audience: 'Returning shoppers who added an item to cart in the last 30 days but did not complete purchase.',
        sampleSize: '10 participants',
        incentive: '$100 gift card per 60-min session',
        recruitment: 'US-based, age 25-55, mix of mobile/desktop, exclude employees of direct competitors.',
        startDate: '',
        endDate: '',
        milestones: 'Week 1 — Screener live\nWeek 2 — Sessions\nWeek 3 — Synthesis & readout',
        deliverables: 'Readout deck with top 3 opportunities\nHighlight reel (8-10 clips)\nOpportunity map tied to checkout funnel',
        successMetrics: 'Team agrees on top 3 opportunities; at least 2 ship on the Q3 roadmap.',
        outOfScope: 'Post-purchase flows, account creation, subscription checkout.',
        assumptions: 'Access to recent abandoners via our CRM list; legal review of screener completed before fielding.',
        risks: 'Recruitment timing overlaps with holiday week; mitigate by over-recruiting 30%.',
    };

    const applySample = () => {
        form.projectTitle.value = sample.projectTitle;
        form.owner.value = sample.owner;
        form.stakeholders.value = sample.stakeholders;
        form.briefDate.value = sample.briefDate;
        form.status.value = sample.status;
        form.background.value = sample.background;
        form.businessGoal.value = sample.businessGoal;
        form.objectives.value = sample.objectives;
        form.questions.value = sample.questions;
        form.hypotheses.value = sample.hypotheses;
        form.audience.value = sample.audience;
        form.sampleSize.value = sample.sampleSize;
        form.incentive.value = sample.incentive;
        form.recruitment.value = sample.recruitment;
        form.startDate.value = sample.startDate;
        form.endDate.value = sample.endDate;
        form.milestones.value = sample.milestones;
        form.deliverables.value = sample.deliverables;
        form.successMetrics.value = sample.successMetrics;
        form.outOfScope.value = sample.outOfScope;
        form.assumptions.value = sample.assumptions;
        form.risks.value = sample.risks;
        form.methodsOther.value = '';
        form.querySelectorAll('input[name="methods"]').forEach(cb => {
            cb.checked = sample.methods.includes(cb.value);
        });
        update();
    };

    form.addEventListener('input', update);
    form.addEventListener('change', update);

    const briefDateInput = form.briefDate;
    if (briefDateInput && !briefDateInput.value) {
        briefDateInput.value = new Date().toISOString().slice(0, 10);
    }

    loadState();
    update();

    document.getElementById('loadSampleBtn').addEventListener('click', applySample);

    document.getElementById('resetBriefBtn').addEventListener('click', () => {
        if (!confirm('Clear all fields in the brief?')) return;
        form.reset();
        form.querySelectorAll('input[name="methods"]').forEach(cb => { cb.checked = false; });
        if (briefDateInput) briefDateInput.value = new Date().toISOString().slice(0, 10);
        localStorage.removeItem(STORAGE_KEY);
        update();
        showToast('Brief cleared');
    });

    document.getElementById('copyBriefBtn').addEventListener('click', async () => {
        const md = toMarkdown(getData());
        try {
            await navigator.clipboard.writeText(md);
            showToast('Markdown copied');
        } catch (_) {
            const ta = document.createElement('textarea');
            ta.value = md;
            document.body.appendChild(ta);
            ta.select();
            try { document.execCommand('copy'); showToast('Markdown copied'); }
            catch (_) { showToast('Copy failed'); }
            document.body.removeChild(ta);
        }
    });

    document.getElementById('downloadBriefBtn').addEventListener('click', () => {
        const data = getData();
        const md = toMarkdown(data);
        const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${slugify(data.projectTitle)}.md`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast('Download started');
    });

    document.getElementById('printBriefBtn').addEventListener('click', () => window.print());
})();