const navLinks = [
    { text: 'HOME', url:'../index.html' },
    { text: 'BLOGS', url: '../blog-posts/blogs.html' },
    { text: 'DESIGNS', url: '../design/designs.html' },
    { text: 'ESSAYS', url: '../essay/essays.html' },
    { text: 'PORTFOLIO', url: '../portfolio/portfolio.html' },
    { text: 'ABOUT ME', url: '../about/about.html' }
];

function createNavigationBar() {
    const navElement = document.querySelector('nav');
    if (!navElement) return; 

    const navList = document.createElement('ul');
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.textContent = link.text;
        anchor.href = link.url;

        if (link.url.includes(currentPage)) {
            anchor.classList.add('active');
        }

        listItem.appendChild(anchor);
        navList.appendChild(listItem);
    });

    navElement.appendChild(navList);
}

document.addEventListener('DOMContentLoaded', createNavigationBar);

