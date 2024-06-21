const navLinks = [
    { text: 'HOME', url:'../index.html' },
    { text: 'BLOGS', url: '../blog-posts/blogs.html' },
    { text: 'DESIGNS', url: '../Design/index.html' },
    { text: 'ESSAYS', url: '../Essay/index.html' },
    { text: 'PORTFOLIO', url: '../Portfolio/index.html' },
    { text: 'ABOUT ME', url: '../About/index.html' }
];

// Function to create and insert the navigation bar into the page
function createNavigationBar() {
    const navElement = document.querySelector('nav');
     // If there is no <nav> element, exit the function
    if (!navElement) return; 

     // Create an unordered list (<ul>) element for the navigation links
    const navList = document.createElement('ul');
    // Get the current page's filename (e.g., 'index.html') from the URL
    const currentPage = window.location.pathname.split("/").pop();

     // Iterate over the navLinks array to create list items and links
    navLinks.forEach(link => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.textContent = link.text;
        anchor.href = link.url;

         // If the link's URL matches the current page, add the 'active' class to the anchor
        if (link.url.includes(currentPage)) {
            anchor.classList.add('active');
        }

        // Append the anchor to the list item
        listItem.appendChild(anchor);
        // Append the list item to the unordered list
        navList.appendChild(listItem);
    });

    navElement.appendChild(navList);
}

// Wait for the DOM to fully load before running the createNavigationBar function
document.addEventListener('DOMContentLoaded', createNavigationBar);

