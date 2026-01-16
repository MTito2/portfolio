const btnTalkEl = document.getElementById("btnTalk")

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

btnTalkEl.addEventListener("click", () => {
    window.open("https://wa.me/5531971295631?text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20projetos%2C%20oportunidades%20ou%20ideias.");
})