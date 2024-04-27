const menuItems = [
    {name:"HOME", href: "index.html"},
    {name:"BLOG POSTS", href: "blogs.html"},   
    {name:"DESIGNS", href: "designs.html"},
    {name:"ESSAYS", href: "essays.html"},
    {name:"PORTFOLIO", href: "portfolio.html"},  
    {name:"ABOUT ME", href: "about.html"},
]

export function initialise(currentPage)
{
    console.log("worked");
    const h1 = document.querySelector("header > h1")
    h1.innerText = document.title
    const nav = document.querySelector("header > nav")
    const ul = document.createElement("ul")

    for (let menuItem of menuItems){
        const li = document.createElement("li")
        if (currentPage != menuItem.name)
        {
            const a = document.createElement("a")
            a.innerText = menuItem.name
            a.setAttribute("href", menuItem.href)
            li.appendChild(a)
            
        }
        else
        {
            li.innerText = menuItem.name
        }

        ul.appendChild(li)
        
    }

    nav.appendChild(ul) 

}