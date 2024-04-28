const navLinks = [
    { text: 'HOME', url:'/index.html' },
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

    navLinks.forEach(link => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.textContent = link.text;
        anchor.href = link.url;
        listItem.appendChild(anchor);
        navList.appendChild(listItem);
    });

    navElement.appendChild(navList);
}

document.addEventListener('DOMContentLoaded', createNavigationBar);

