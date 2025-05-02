document.addEventListener('DOMContentLoaded', function () {
    // Language switcher functionality
    const flagButtons = document.querySelectorAll('.flag-button');

const translations = {
    de: {
        Willkommen: 'Willkommen!',
        Produkte: 'Produkte',
        Auszeichnungen: 'Auszeichnungen',
        Wiesfunktioniert: 'Wie´s funktioniert',
        Impressum: 'Impressum',
        Nachhaltigkeit: 'Nachhaltigkeit',
        Verkatert: 'Verkatert?',
        UnsereProdukte: 'Unsere Produkte',
        Auszeichnungen_text: 'Auszeichnungen',
        JamieFerguson: 'test',
        WarumJederTropfenZaehlt: 'Warum jeder Tropfen zählt'
    },
    es: {
        Willkommen: '¡Bienvenidos!',
        Produkte: 'Productos',
        Auszeichnungen: 'Precios',
        Wiesfunktioniert: 'Como funciona',
        Impressum: 'Contacto',
        Nachhaltigkeit: 'Sostenibilidad',
        Verkatert: '¿Resaca?',
        UnsereProdukte: 'Nuestros productos',
        Auszeichnungen_text: 'Precios',
        JamieFerguson: 'Spanisch',
        WarumJederTropfenZaehlt: 'Por qué cada gota cuenta'
    },
    en: {
        Willkommen: 'Welcome!',
        Produkte: 'Products',
        Auszeichnungen: 'Awards',
        Wiesfunktioniert: 'How it works',
        Impressum: 'Contact',
        Nachhaltigkeit: 'Sustainability',
        Verkatert: 'Hung over?',
        UnsereProdukte: 'Our products',
        Auszeichnungen_text: 'Awards',
        JamieFerguson: 'english',
        WarumJederTropfenZaehlt: 'Why every drop counts'
    },
    pt: {
        Willkommen: 'Bem-vindo!',
        Produkte: 'Produtos',
        Auszeichnungen: 'Prêmios',
        Wiesfunktioniert: 'Como funciona',
        Impressum: 'Contato',
        Nachhaltigkeit: 'Sustentabilidade',
        Verkatert: 'Ressaca?',
        UnsereProdukte: 'Nossos produtos',
        Auszeichnungen_text: 'Prêmios',
        JamieFerguson: 'português',
        WarumJederTropfenZaehlt: 'Por que cada gota conta'
    },
    it: {
        Willkommen: 'Benvenuto!',
        Produkte: 'Prodotti',
        Auszeichnungen: 'Premi',
        Wiesfunktioniert: 'Come funziona',
        Impressum: 'Contatti',
        Nachhaltigkeit: 'Sostenibilità',
        Verkatert: 'Postumi di una sbornia?',
        UnsereProdukte: 'I nostri prodotti',
        Auszeichnungen_text: 'Premi',
        JamieFerguson: 'italiano',
        WarumJederTropfenZaehlt: 'Perché ogni goccia conta'
    },
    uk: {
        Willkommen: 'Ласкаво просимо!',
        Produkte: 'Продукти',
        Auszeichnungen: 'Нагороди',
        Wiesfunktioniert: 'Як це працює',
        Impressum: 'Контакти',
        Nachhaltigkeit: 'Сталий розвиток',
        Verkatert: 'Похмілля?',
        UnsereProdukte: 'Наші продукти',
        Auszeichnungen_text: 'Нагороди',
        JamieFerguson: 'українська',
        WarumJederTropfenZaehlt: 'Чому кожна крапля важлива'
    }
};



    // Language switch functionality
    flagButtons.forEach(button => {
        button.addEventListener('click', function () {
            const selectedLanguage = button.getAttribute('data-language');
            const translation = translations[selectedLanguage];

            // Debugging to ensure the translation is selected correctly
            console.log(`Changing language to: ${selectedLanguage}`);

            // Hide all language content and show the selected one
            document.querySelectorAll('.lang-de, .lang-en, .lang-es, .lang-pt, .lang-it, .lang-uk').forEach(el => {
                el.style.display = 'none';  // Hide all language versions
            });

            // Show the selected language's content
            document.querySelectorAll('.lang-' + selectedLanguage).forEach(el => {
                el.style.display = 'inline';  // Show content in the selected language
            });

            // Optionally, update specific text content if needed
            document.getElementById('Willkommen').textContent = translation.Willkommen;
            document.getElementById('Produkte').textContent = translation.Produkte;
            document.getElementById('Auszeichnungen').textContent = translation.Auszeichnungen;
            document.getElementById('Wiesfunktioniert').textContent = translation.Wiesfunktioniert;
            document.getElementById('Verkatert').textContent = translation.Verkatert;
            document.getElementById('UnsereProdukte').textContent = translation.UnsereProdukte;
            document.getElementById('Auszeichnungen_text').textContent = translation.Auszeichnungen_text;
            document.getElementById('WarumJederTropfenZaehlt').textContent = translation.WarumJederTropfenZaehlt;

            // Debugging to see if JamieFerguson is found
            const jamieFergusonElement = document.getElementById('JamieFerguson');
            if (jamieFergusonElement) {
                console.log("Updating JamieFerguson element");
                jamieFergusonElement.innerHTML = translation.JamieFerguson;
            } else {
                console.log("JamieFerguson element not found");
            }
        });
    });

    // Toggle functionality for footer links
    document.querySelectorAll('.toggle-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            const content = document.getElementById(targetId);
            const isVisible = content.style.display === 'block';

            document.querySelectorAll('.footer-expandable').forEach(el => el.style.display = 'none');
            content.style.display = isVisible ? 'none' : 'block';

            // Re-run carousel setup if needed
            if (typeof setupCarousel === 'function') {
                setupCarousel();
            }
        });
    });
});
