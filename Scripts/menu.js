const menuItems = [
    {name:"Home", href: "index.html"},
    {name:"About", href: "about.html"},
    {name:"Porfolio", href: "porfolio.html"},
    {name:"Blog", href: "Blog.html"},
    {name:"Essay", href: "Essay.html"},
    {name:"Design", href: "Design.html"},
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