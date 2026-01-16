const projectsItem = document.querySelectorAll(".projects__item")
const pageList = new Array
const actuallyPage = window.location.pathname.replace("/", "")

projectsItem.forEach(element => {
    pageList.push(element.dataset.title + ".html")
});

localStorage.setItem("page_projects", JSON.stringify(pageList))

projectsItem.forEach(element => {
    element.addEventListener("click", () => {
        const projectTitle = element.dataset.title
        
        if (projectTitle === "bot-grm") {
            window.location.href = "/projects/bot-grm.html";
        }

        else if (projectTitle === "bot-pessoal") {
            window.location.href = "/projects/bot-pessoal.html";
        }

        else if (projectTitle === "easyfocus") {
            window.location.href = "/projects/easyfocus.html";
        }

        else if (projectTitle === "focus-timer") {
            window.location.href = "/projects/focus-timer.html";
        }

        else if (projectTitle === "flash-gen") {
            window.location.href = "/projects/flash-gen.html";
        }

        else if (projectTitle === "assistente-do-tempo") {
            window.location.href = "/projects/assistente-do-tempo.html";
        }

    })
});