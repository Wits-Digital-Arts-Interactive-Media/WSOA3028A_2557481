const navLinks = [
    { text: 'HOME', url:'/WSOA3018A_2557481/index.html' },
    { text: 'BLOGS', url: '../Blog-Posts/blogs.html' },
    { text: 'DESIGNS', url: '../Design/designs.html' },
    { text: 'ESSAYS', url: '../Essay/essays.html' },
    { text: 'PORTFOLIO', url: '../Portfolio/portfolio.html' },
    { text: 'ABOUT ME', url: '../About/about.html' }
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

