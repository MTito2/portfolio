const prevBtn = document.getElementById("prev-project")
const nextBtn = document.getElementById("next-project")

const projectPages = JSON.parse(localStorage.getItem("page_projects"))
const projectNumbers = projectPages.length
const currentPath = window.location.pathname
const currentPage = currentPath.split("/").at(-1)
const currentPageIndex = projectPages.indexOf(currentPage)

const projectNumberEl = document.getElementById("project-number")

prevBtn.addEventListener("click", () => {
    acessPreviusPage()
})

nextBtn.addEventListener("click", () => {
    acessNextPage()
})

function acessPreviusPage() {
    let previusIndex = currentPageIndex - 1

    if (previusIndex < 0) {
        previusIndex = projectNumbers - 1 
    }
    
    const previusProjectPage = projectPages[previusIndex]
    const path = "/projects/" + previusProjectPage

    window.location.href = path;
}

function acessNextPage() {
    let nextIndex = currentPageIndex + 1

    if (nextIndex > (projectNumbers - 1)) {
        nextIndex = 0 
    }
    
    const nextProjectPage = projectPages[nextIndex]
    const path = "/projects/" + nextProjectPage

    window.location.href = path;
}

function showProjectNumber() {
    const content = `${currentPageIndex + 1} / ${projectNumbers}`
    projectNumberEl.textContent = content
}

showProjectNumber()