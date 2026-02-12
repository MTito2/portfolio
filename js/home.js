const hero = document.querySelector(".hero")
const menuEl = document.querySelector(".hero__menu")
const btnTalkElDesktop = document.getElementById("btnTalkDesktop")
const btnTalkElMobile = document.getElementById("btnTalkMobile")

const projectsItem = document.querySelectorAll(".projects__item")
const pageList = new Array
const actuallyPage = window.location.pathname.replace("/", "")

function createMenuContainer() {
    const menuContainer = document.createElement("div")
    const menuList = document.createElement("ul")
    const items = ["Sobre", "Projetos", "Contato"]
    
    menuContainer.className = "hero__menu-container"
    menuList.className = "hero__menu-list" 
    
    items.forEach(item => {
        const menuItem = document.createElement("li")
        menuItem.className = "hero__menu-item"

        menuItem.textContent = item
        menuList.appendChild(menuItem)
    })

    menuContainer.appendChild(menuList)

    return menuContainer
}

const menuContainer = createMenuContainer()
hero.appendChild(menuContainer) 

menuEl.addEventListener("click", () => {
    menuContainer.classList.toggle("hero__menu-container-show")
})

document.addEventListener("click", (event) => {
    if (!menuContainer.contains(event.target) &&
    !menuEl.contains(event.target)) {
        menuContainer.classList.remove("hero__menu-container-show")
    }
})


projectsItem.forEach(element => {
    pageList.push(element.dataset.title + ".html")
});

localStorage.setItem("page_projects", JSON.stringify(pageList))


projectsItem.forEach(element => {
    element.addEventListener("click", () => {
        const projectTitle = element.dataset.title
        
        if (projectTitle === "bot-grm") {
            window.location.href = "./projects/bot-grm.html";
        }

        else if (projectTitle === "bot-pessoal") {
            window.location.href = "./projects/bot-pessoal.html";
        }

        else if (projectTitle === "easyfocus") {
            window.location.href = "./projects/easyfocus.html";
        }

        else if (projectTitle === "focus-timer") {
            window.location.href = "./projects/focus-timer.html";
        }

        else if (projectTitle === "flash-gen") {
            window.location.href = "./projects/flash-gen.html";
        }

        else if (projectTitle === "assistente-do-tempo") {
            window.location.href = "./projects/assistente-do-tempo.html";
        }

    })
});

btnTalkElDesktop.addEventListener("click", () => {
    window.open("https://wa.me/5531971295631?text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20projetos%2C%20oportunidades%20ou%20ideias.");
})

btnTalkElMobile.addEventListener("click", () => {
    window.open("https://wa.me/5531971295631?text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20projetos%2C%20oportunidades%20ou%20ideias.");
})