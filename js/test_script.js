document.addEventListener('DOMContentLoaded', function () {
    const flagButtons = document.querySelectorAll('.flag-button');

    const translations = {
        de: {
            Willkommen: 'Willkommen!',
            Produkte: 'Produkte',
            Auszeichnungen: 'Auszeichnungen',
            Wiesfunktioniert: 'Wie´s funktioniert',
            Impressum: 'Impressum',
            Nachhaltigkeit: 'Nachhaltigkeit',
            Willkommen_text: 'Eine neue Generation Nahrungsergänzungsmittel gegen Kater und Langzeitdiabetes',
            Verkatert: 'Verkatert?',
            UnsereProdukte: 'Unsere Produkte',
            Auszeichnungen_text: 'Auszeichnungen',
            JamieFerguson: 'Meine Doktoararbeit und die Idee eines innovativen Nahrungsergänzungsmittels gegen Kater und Langzeitdiabetes wurde mit dem renommierten und heiß umkämpften <i>Jamie Ferguson Chemistry Innovation Award</i> der Universität Oxford ausgezeichnet. <b><a href="https://www.chem.ox.ac.uk/article/the-jamie-ferguson-chemistry-innovation-awards-2023" target="_blank">Zur Preisverkündung</a></b>',
            Nachhaltigkeit_text: 'Nachhaltigkeit',
            Nachhaltigkeit_text2: 'Inhaltsstoffe und Kapsel sind vegan, die Verpackung ist aus wiederverwertbarem Material und der Server dieser Internetseite sowie der Firmensitz werden mit Ökostrom betrieben.'
        },
        es: {
            Willkommen: '¡Bienvenidos!',
            Produkte: 'Productos',
            Auszeichnungen: 'Precios',
            Wiesfunktioniert: 'Como funciona',
            Impressum: 'Contacto',
            Nachhaltigkeit: 'Sostenibilidad',
            Willkommen_text: 'Una nueava generacion de soplementeos de alimentacion contra hangover y diabetes',
            Verkatert: 'Hung over?',
            UnsereProdukte: 'Nuestros products',
            Auszeichnungen_text: 'Precios',
            JamieFerguson: 'Mi trabajo ines innovativen Nahrungsergänzungsmittels gegen Kater und Langzeitdiabetes wurde mit dem renommierten und heiß umkämpften <i>Jamie Ferguson Chemistry Innovation Award</i> der Universität Oxford ausgezeichnet. <b><a href="https://www.chem.ox.ac.uk/article/the-jamie-ferguson-chemistry-innovation-awards-2023" target="_blank">Zur Preisverkündung</a></b>',
            Nachhaltigkeit_text: 'Sostenabilidad',
            Nachhaltigkeit_text2: 'Inhaltsstoffe und Kapsel sind vegan, die Verpackung ist aus wiederverwertbarem Material und der Server dieser Internetseite sowie der Firmensitz werden mit Ökostrom betrieben.'
        },
        en: {
            Willkommen: 'Welcome!',
            Produkte: 'Products',
            Auszeichnungen: 'Awards',
            Wiesfunktioniert: 'How it works',
            Impressum: 'Contact',
            Nachhaltigkeit: 'Sustainability',
            Willkommen_text: 'A new generation supplement against hangover and long-term diabetes',
            Verkatert: 'Hung over?',
            UnsereProdukte: 'Our products',
            Auszeichnungen_text: 'Awards',
            JamieFerguson: 'My thesis  gegen Kater und Langzeitdiabetes wurde mit dem renommierten und heiß umkämpften <i>Jamie Ferguson Chemistry Innovation Award</i> der Universität Oxford ausgezeichnet. <b><a href="https://www.chem.ox.ac.uk/article/the-jamie-ferguson-chemistry-innovation-awards-2023" target="_blank">Zur Preisverkündung</a></b>',
            Nachhaltigkeit_text: 'Sustainability',
            Nachhaltigkeit_text2: 'Ingredients and capsule are vegan, the packaing is made of recyclabe material and both the server of the webpage and the company site are run by ecological electricity.'
        }
    };

    flagButtons.forEach(button => {
        button.addEventListener('click', function () {
            const selectedLanguage = button.getAttribute('data-language');
            const translation = translations[selectedLanguage];

            // Normale Textübersetzungen mit textContent
            document.getElementById('Willkommen').textContent = translation.Willkommen;
            document.getElementById('Produkte').textContent = translation.Produkte;
            document.getElementById('Auszeichnungen').textContent = translation.Auszeichnungen;
            document.getElementById('Wiesfunktioniert').textContent = translation.Wiesfunktioniert;
            document.getElementById('Impressum').textContent = translation.Impressum;
            document.getElementById('Nachhaltigkeit').textContent = translation.Nachhaltigkeit;
            document.getElementById('Willkommen_text').textContent = translation.Willkommen_text;
            document.getElementById('Verkatert').textContent = translation.Verkatert;
            document.getElementById('UnsereProdukte').textContent = translation.UnsereProdukte;
            document.getElementById('Auszeichnungen_text').textContent = translation.Auszeichnungen_text;
            document.getElementById('Nachhaltigkeit_text').textContent = translation.Nachhaltigkeit_text;
            document.getElementById('Nachhaltigkeit_text2').textContent = translation.Nachhaltigkeit_text2;

            // Spezielle Behandlung für JamieFerguson mit HTML-Tags
            document.getElementById('JamieFerguson').innerHTML = translation.JamieFerguson;
        });
    });
});