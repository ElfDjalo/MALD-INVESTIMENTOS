const translations = {
    pt: {
        navHome: "Início",
        navAbout: "Sobre",
        navServices: "Serviços",
        navContact: "Contactos",

        heroTitle: "Importação e Exportação de Produtos Agrícolas",
        heroText: "Qualidade, confiança e crescimento para o sector agrícola.",
        heroButton: "Contactar Agora",

        aboutTitle: "Sobre Nós",
        aboutText: "A MALD INVESTIMENTOS, SARL é uma empresa especializada na importação, exportação e comercialização de produtos agrícolas.",

        servicesTitle: "Os Nossos Serviços",

        service1Title: "Importação",
        service1Text: "Fornecimento de produtos agrícolas e equipamentos para diversos mercados.",

        service2Title: "Exportação",
        service2Text: "Ligação entre produtores e mercados internacionais.",

        service3Title: "Consultoria",
        service3Text: "Apoio estratégico para investimentos agrícolas.",

        contactsTitle: "Contactos",

        formName: "Nome",
        formEmail: "E-mail",
        formSubject: "Assunto",
        formMessage: "Escreva a sua mensagem...",
        formButton: "Enviar Mensagem",

        footer: "© 2026 MALD INVESTIMENTOS, SARL. Todos os direitos reservados."
    },

    en: {
        navHome: "Home",
        navAbout: "About",
        navServices: "Services",
        navContact: "Contacts",

        heroTitle: "Import and Export of Agricultural Products",
        heroText: "Quality, trust and growth for the agricultural sector.",
        heroButton: "Contact Us",

        aboutTitle: "About Us",
        aboutText: "MALD INVESTIMENTOS, SARL specializes in importing, exporting and marketing agricultural products.",

        servicesTitle: "Our Services",

        service1Title: "Import",
        service1Text: "Supply of agricultural products and equipment to various markets.",

        service2Title: "Export",
        service2Text: "Connection between producers and international markets.",

        service3Title: "Consulting",
        service3Text: "Strategic support for agricultural investments.",

        contactsTitle: "Contacts",

        formName: "Full Name",
        formEmail: "Email",
        formSubject: "Subject",
        formMessage: "Write your message...",
        formButton: "Send Message",

        footer: "© 2026 MALD INVESTMENTS, LTD. All rights reserved."
    },
    fr: {
    navHome: "Accueil",
    navAbout: "À Propos",
    navServices: "Services",
    navContact: "Contacts",

    heroTitle: "Importation et Exportation de Produits Agricoles",
    heroText: "Qualité, confiance et croissance pour le secteur agricole.",
    heroButton: "Contactez-Nous",

    aboutTitle: "À Propos de Nous",
    aboutText: "MALD INVESTIMENTOS, SARL est spécialisée dans l'importation, l'exportation et la commercialisation de produits agricoles.",

    servicesTitle: "Nos Services",

    service1Title: "Importation",
    service1Text: "Fourniture de produits agricoles et d'équipements pour divers marchés.",

    service2Title: "Exportation",
    service2Text: "Connexion entre producteurs et marchés internationaux.",

    service3Title: "Conseil",
    service3Text: "Soutien stratégique aux investissements agricoles.",

    contactsTitle: "Contacts",

    formName: "Nom Complet",
    formEmail: "E-mail",
    formSubject: "Sujet",
    formMessage: "Écrivez votre message...",
    formButton: "Envoyer le Message",

    footer: "© 2026 MALD INVESTIMENTOS, SARL. Tous droits réservés."
},
};

function changeLanguage(lang) {
    const t = translations[lang];

    // Menu
    document.getElementById("nav-home").textContent = t.navHome;
    document.getElementById("nav-about").textContent = t.navAbout;
    document.getElementById("nav-services").textContent = t.navServices;
    document.getElementById("nav-contact").textContent = t.navContact;

    // Hero
    document.getElementById("hero-title").textContent = t.heroTitle;
    document.getElementById("hero-text").textContent = t.heroText;
    document.getElementById("hero-button").textContent = t.heroButton;

    // Sobre
    document.getElementById("about-title").textContent = t.aboutTitle;
    document.getElementById("about-text").textContent = t.aboutText;

    // Serviços
    document.getElementById("services-title").textContent = t.servicesTitle;

    document.getElementById("service1-title").textContent = t.service1Title;
    document.getElementById("service1-text").textContent = t.service1Text;

    document.getElementById("service2-title").textContent = t.service2Title;
    document.getElementById("service2-text").textContent = t.service2Text;

    document.getElementById("service3-title").textContent = t.service3Title;
    document.getElementById("service3-text").textContent = t.service3Text;

    // Contactos
    document.getElementById("contacts-title").textContent = t.contactsTitle;

    // Formulário
    document.getElementById("nome").placeholder = t.formName;
    document.getElementById("email").placeholder = t.formEmail;
    document.getElementById("assunto").placeholder = t.formSubject;
    document.getElementById("mensagem").placeholder = t.formMessage;

    document.getElementById("submit-btn").textContent = t.formButton;

    // Rodapé
    document.getElementById("footer-text").textContent = t.footer;

    // Guardar idioma
    localStorage.setItem("language", lang);
}

// Menu Mobile
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}
const aboutBtn = document.getElementById("about-btn");
const aboutDetails = document.getElementById("about-details");

if (aboutBtn) {
    aboutBtn.addEventListener("click", () => {

        if (aboutDetails.style.display === "none") {

            aboutDetails.style.display = "block";
            aboutBtn.textContent = "Mostrar Menos";

        } else {

            aboutDetails.style.display = "none";
            aboutBtn.textContent = "Ler Mais";

        }
    });
}

// Carregar idioma guardado
document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("language") || "pt";
    changeLanguage(savedLanguage);
});