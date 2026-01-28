const cards = document.querySelectorAll(".card");
const sections = document.querySelectorAll(".content-section");
const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", () => {
    document.querySelector(".container").scrollIntoView({
        behavior: "smooth"
    });
});

cards.forEach(card => {
    card.addEventListener("click", () => {
        const targetId = card.dataset.target;

        sections.forEach(section => {
            section.classList.remove("active");
        });

        const targetSection = document.getElementById(targetId);
        targetSection.classList.add("active");

        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

const langToggle = document.getElementById("langToggle");

let currentLang = "en";

const translations = {
    en: {
        heroSubtitle: "Data Engineer · New Media Design Student",
        exploreBtn: "Explore my profile",
        viewProjects: "View Data Projects"
    },
    sv: {
        heroSubtitle: "Dataingenjör · Student i New Media Design",
        exploreBtn: "Utforska min profil",
        viewProjects: "Se dataprojekt"
    }
};

langToggle?.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "sv" : "en";
    langToggle.textContent = currentLang === "en" ? "SV" : "EN";

    applyTranslations();
});

function applyTranslations() {
    const subtitle = document.querySelector(".subtitle");
    const exploreBtn = document.getElementById("exploreBtn");
    const projectsLink = document.querySelector(".primary-link");

    if (subtitle) subtitle.textContent = translations[currentLang].heroSubtitle;
    if (exploreBtn) exploreBtn.textContent = translations[currentLang].exploreBtn;
    if (projectsLink) projectsLink.textContent = translations[currentLang].viewProjects;
}
