// مصفوفة المقالات - أضف مقالاتك الجديدة هنا فقط
const articles = [
    {
        title: "Audifort: The Science of Healthy Hearing",
        description: "Explore how natural ingredients like Maca and Grape Seed support auditory clarity in 2026.",
        image: "https://drive.google.com/thumbnail?id=17RoGQoc9n9Xkehndpa0yA-YGapTNsXFk",
        link: "audifort-review.html",
        category: "WELLNESS"
    },
    {
        title: "The Hero Instinct: Decoding Connection",
        description: "A deep dive into the psychological triggers that define modern relationship commitment.",
        image: "https://s3.amazonaws.com/bei/hso/Products/HSO_Book_Phone.png",
        link: "secret-obsession.html",
        category: "PSYCHOLOGY"
    }
];

// دالة عرض المقالات في الصفحة الرئيسية
function renderArticles() {
    const container = document.getElementById('articles-container');
    if (!container) return; // لضمان عدم حدوث خطأ في الصفحات الأخرى

    container.innerHTML = articles.map(post => `
        <article class="article-card">
            <img src="${post.image}" alt="${post.title}" class="article-img">
            <div class="article-body">
                <span style="color: #00d4ff; font-size: 0.75rem; font-weight: bold; letter-spacing: 1px;">${post.category}</span>
                <h3 style="color: #ffffff; margin: 10px 0; font-size: 1.4rem;">${post.title}</h3>
                <p style="color: #adb5bd; font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px;">${post.description}</p>
                <a href="${post.link}" style="color: #00d4ff; text-decoration: none; font-weight: bold; display: flex; align-items: center; gap: 5px;">
                    Read Analysis <span>&rarr;</span>
                </a>
            </div>
        </article>
    `).join('');
}

// نظام القائمة المنسدلة (Mobile Menu)
const hamburger = document.getElementById('hamburger-menu');
const nav = document.getElementById('dropdown-nav');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        hamburger.classList.toggle('open');
    });
}

// تشغيل الوظائف عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    renderArticles();
});
