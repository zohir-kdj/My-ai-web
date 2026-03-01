// Database Array: Add your new articles here!
const projectsData = [
    {
        title: "Audifort: Advanced Hearing Science",
        description: "An analytical review on natural auditory triggers and neural health in modern environments.",
        image: "https://drive.google.com/thumbnail?id=17RoGQoc9n9Xkehndpa0yA-YGapTNsXFk",
        link: "audifort-review.html",
        category: "Biological Wellness"
    },
    {
        title: "The Hero Instinct Decoding",
        description: "A psychological study on male commitment triggers and evolutionary relationship drives.",
        image: "https://s3.amazonaws.com/bei/hso/Products/HSO_Book_Phone.png",
        link: "secret-obsession.html",
        category: "Human Psychology"
    }
];

// Injections function
function initExpertAI() {
    const grid = document.getElementById('dynamic-grid');
    if (!grid) return;

    grid.innerHTML = projectsData.map(item => `
        <div class="card" onclick="window.location.href='${item.link}'">
            <img src="${item.image}" class="card-img" alt="${item.title}">
            <div class="card-content">
                <span class="category-tag">${item.category}</span>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div style="color: var(--cyan); font-weight: bold; font-size: 0.9rem;">
                    Read Analysis →
                </div>
            </div>
        </div>
    `).join('');
}

// Mobile Menu Toggle Logic
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    const nav = document.getElementById('mobile-nav');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Run on load
document.addEventListener('DOMContentLoaded', initExpertAI);
