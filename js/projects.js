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

// Cria menu
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

    const items = {
        "Home": "hero",
        "Sobre": "about",
        "Projetos": "projects",
        "Contato": "contact"
    }

    menuContainer.className = "header-menu-container"
    menuList.className = "header-menu-list"

    const isInsideProjects = window.location.pathname
        .split("/")
        .includes("projects")

    Object.entries(items).forEach(([label, id]) => {
        const menuItem = document.createElement("li")
        menuItem.className = "header-menu-item"
        menuItem.textContent = label

        menuItem.addEventListener("click", () => {
            const target = isInsideProjects
                ? "../index.html#" + id
                : "./index.html#" + id

            window.location.href = target
        })

        menuList.appendChild(menuItem)
    })

    menuContainer.appendChild(menuList)
    return menuContainer
}


function acessPreviusPage() {
    let previusIndex = currentPageIndex - 1
    if (previusIndex < 0) previusIndex = projectNumbers - 1 

    const previusProjectPage = projectPages[previusIndex]
    const path = "../projects/" + previusProjectPage
    window.location.href = path;
}

function acessNextPage() {
    let nextIndex = currentPageIndex + 1
    if (nextIndex > (projectNumbers - 1)) nextIndex = 0 

    const nextProjectPage = projectPages[nextIndex]
    const path = "../projects/" + nextProjectPage
    window.location.href = path;
}

function showProjectNumber() {
    const content = `${currentPageIndex + 1} / ${projectNumbers}`
    projectNumberEl.textContent = content
}

showProjectNumber()
