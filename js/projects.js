const projectCards = document.querySelectorAll(".project-card");
const projectDetails = document.querySelectorAll(".project-detail");

projectCards.forEach(card => {
    card.addEventListener("click", () => {
        const targetId = card.dataset.project;

        // Reset active states
        projectCards.forEach(c => c.classList.remove("active"));
        projectDetails.forEach(detail => detail.classList.remove("active"));

        // Activate selected
        card.classList.add("active");
        const targetDetail = document.getElementById(targetId);
        targetDetail.classList.add("active");

        // Smooth scroll to detail
        targetDetail.scrollIntoView({
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
