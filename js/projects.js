const menuEl = document.querySelector(".header-menu")
const main = document.querySelector(".main")

const prevBtn = document.getElementById("prev-project")
const nextBtn = document.getElementById("next-project")

const projectPages = JSON.parse(localStorage.getItem("page_projects")) || []

if (!projectPages.length) {
    console.warn("Lista de projetos vazia")
}

const projectNumbers = projectPages.length
const currentPath = window.location.pathname
const currentPage = currentPath.split("/").at(-1)
const currentPageIndex = projectPages.indexOf(currentPage)

const projectNumberEl = document.getElementById("project-number")


const menuContainer = createMenuContainer()
main.appendChild(menuContainer) 

menuEl.addEventListener("click", () => {
    menuContainer.classList.toggle("header-menu-container-show")
})

prevBtn?.addEventListener("click", () => {
    acessPreviusPage()
})

nextBtn?.addEventListener("click", () => {
    acessNextPage()
})

function createMenuContainer() {
    const menuContainer = document.createElement("div")
    const menuList = document.createElement("ul")
    const items = ["Home", "Sobre", "Projetos", "Contato"]
    
    menuContainer.className = "header-menu-container"
    menuList.className = "header-menu-list" 
    
    items.forEach(item => {
        const menuItem = document.createElement("li")
        menuItem.className = "header-menu-item"
        menuItem.textContent = item

        menuItem.addEventListener("click", () => {
            let targetId = ""

            if (item === "Home") targetId = "#hero"
            if (item === "Sobre") targetId = "#about"
            if (item === "Projetos") targetId = "#projects"
            if (item === "Contato") targetId = "#contact"

            const section = document.querySelector(targetId)
            section.scrollIntoView({ behavior: "smooth" })
        })

        menuList.appendChild(menuItem)
    })

    menuContainer.appendChild(menuList)
    return menuContainer
}

function acessPreviusPage() {
    let previusIndex = currentPageIndex - 1

    if (previusIndex < 0) {
        previusIndex = projectNumbers - 1 
    }
    
    const previusProjectPage = projectPages[previusIndex]
    const path = "../projects/" + previusProjectPage

    window.location.href = path;
}

function acessNextPage() {
    let nextIndex = currentPageIndex + 1

    if (nextIndex > (projectNumbers - 1)) {
        nextIndex = 0 
    }
    
    const nextProjectPage = projectPages[nextIndex]
    const path = "../projects/" + nextProjectPage

    window.location.href = path;
}

function showProjectNumber() {
    const content = `${currentPageIndex + 1} / ${projectNumbers}`
    projectNumberEl.textContent = content
}

showProjectNumber()