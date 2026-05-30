# Sligro lokaal – GitHub Pages website

Maak een complete, professionele, statische GitHub Pages-website voor een Sligro-geïnspireerd concept rondom lokale producten voor MKB-horecaondernemers.

De website moet voelen als een echte online inspiratieomgeving, alsof het een mogelijke uitbreiding is van het Sligro ZiN Inspiratielab. Het mag niet voelen als een schoolopdracht of theoretische campagnepagina. Gebruik dus geen zichtbare termen als briefing, communicatiedoelstelling, Touch/Tell/Sell, campagnehub of marketingtheorie.

Centraal concept:

**Van boer tot borrelplank.**

Doel van de website:

Help horecaondernemers lokale producten ontdekken, herkennen, toepassen op hun menukaart en vertalen naar een verhaal voor hun gasten.

Doelgroep:

MKB-horecaondernemers, restauranteigenaren, fastservice-ondernemers, cateraars en hotelmanagers. Spreek hen aan als trotse vakmensen die weinig tijd hebben en praktische inspiratie zoeken.

Look & feel:

Sluit aan op de Sligro/ZiN-uitstraling:

- wit als basis;
- donkergrijze tekst;
- warme geel/gouden accenten;
- donkergroen subtiel als ondersteunende kleur;
- rustige cards;
- veel witruimte;
- afgeronde hoeken;
- premium, zakelijke maar warme uitstraling.

Gebruik:

- koppen: `"Aptos Slab", Rockwell, Georgia, serif`;
- bodytekst: `Aptos, "Segoe UI", Arial, sans-serif`.

Gebruik het officiële Sligro-logo:

https://www.sligrofoodgroup.nl/sites/default/files/download/sligro-logo.jpeg

Gebruik veel ultrarealistische, professionele en warme beelden. De foto’s moeten passen bij de tekst en mogen geen generieke stock- of AI-uitstraling hebben. Gebruik onder andere beelden van borrelplanken, streekkaas, lokale telers, bakkers, horecaondernemers, proeverijen, sampleboxen, winkelherkenning en lokale producten. Gebruik WebP waar mogelijk.

Verwerk daarnaast drie korte reclamevideo’s als lokale assets in `assets/videos/`:

- `Reclamevideo_Feestdagen_Gemini.mp4`
- `Reclamevideo_Herfst_Gemini.mp4`
- `Reclamevideo_WK_Gemini.mp4`

Gebruik op de website nette, korte bestandsnamen, bijvoorbeeld:

- `reclamevideo-feestdagen.mp4`
- `reclamevideo-herfst.mp4`
- `reclamevideo-wk.mp4`

De video’s zijn landscape-video’s. Toon ze daarom in een 16:9-container, gecentreerd en zonder verkeerde uitsnede. Gebruik `object-fit: contain` of een vergelijkbare oplossing zodat de volledige video zichtbaar blijft. De video’s mogen automatisch muted afspelen wanneer ze in beeld komen en moeten pauzeren wanneer ze uit beeld verdwijnen. Houd controls zichtbaar, zodat bezoekers de video zelf kunnen starten of pauzeren.

Maak deze bestanden:

- `index.html`
- `van-boer-tot-borrelplank.html`
- `inspiratie.html`
- `recepten.html`
- `assortiment.html`
- `herkennen.html`
- `verhalen.html`
- `contact.html`
- `404.html`
- `styles.css`
- `script.js`
- `assets/`
- `assets/images/`
- `assets/videos/`
- `assets/scss/styles.scss`
- `README.md`
- `LINK_CHECK.txt`

De site moet volledig statisch zijn, responsive werken en geschikt zijn voor GitHub Pages. Gebruik HTML, CSS/SCSS en lichte JavaScript, geen frameworks.

## Pagina’s

### Homepage

Maak een sterke homepage met hero, introductie van “Van boer tot borrelplank”, routes naar recepten/inspiratie/assortiment/herkennen/verhalen, voordelen van lokaal werken, een uitgelicht recept en CTA-blokken.

### Van boer tot borrelplank

Maak een centrale conceptpagina met uitleg over lokale producten, voordelen, de route van maker naar menukaart, productcategorieën, receptinspiratie, leveranciersverhalen, samplebox en proeverij.

### Inspiratie

Maak een inspiratiepagina met menukaartideeën, lunchspecials, borrelconcepten, dessertideeën, tafelkaart/social-postideeën, een ultrarealistisch krijtbordbeeld en een aparte videosectie voor seizoenscampagnes.

Het krijtbordbeeld bevat deze kreten:

- Van boer tot borrelplank
- Lokaal op de lunchkaart
- Proef Limburg op je bord
- Onze seizoensspecial met streekgroenten
- Vraag naar de streekkaas van deze week

Voeg op deze pagina ook een sectie **Seizoenscampagnes** toe met drie video-cards:

- **Feestdagen** – video voor lokale producten rondom kerst, feestdagen, borrelmomenten en eindejaarsarrangementen.
- **Herfst** – video voor seizoensgroenten, comfortfood, warme gerechten en herfstige kaartinspiratie.
- **WK** – video voor borrelplanken, samen kijken, cafés, sportmomenten en deelbare bites.

De video’s moeten in landscape-formaat worden getoond, netjes gecentreerd in hun containers en niet als verticale/portrait-video worden uitgesneden.

### Recepten

Voeg echte uitgewerkte recepten toe, minimaal:

- Limburgse borrelplank;
- Streeklunch voor fastservice;
- Cateringplank uit de regio;
- Gegrilde seizoensgroenten met kruidenolie en zachte kaas;
- Mini-vlaaiproeverij bij koffie of dessert.

Per recept: intro, ingrediënten, bereiding, serveertip, toepassing voor horeca, menukaarttekst en passende afbeelding.

### Assortiment

Maak geen webshop, maar een inspiratiepagina met lokale productcategorieën zoals kaas, vleeswaren, brood, groenten, sauzen/garnituren, dranken, vlaai, samplebox en herkomstkaartjes.

Per categorie: foto, uitleg, toepassing, label “Lokaal uit Limburg” en knop “Bekijk toepassing”. Zorg dat foto’s inhoudelijk kloppen bij de categorie.

### Herkennen

Maak een praktische pagina “Zo herken je lokale producten in de winkel”. Toon vijf visuele herkenningspunten met ultrarealistische beelden:

1. schapkaart “Lokaal uit Limburg”;
2. hangkaart bij krat/display;
3. vaste afdelingen;
4. vraag het een medewerker;
5. herkomstkaartje of QR-code.

### Verhalen

Maak een uitgebreide verhalenpagina met geloofwaardige verhalen van makers en ondernemers:

- kaasmaker;
- lokale teler;
- bakker;
- horecaondernemer die meer lokaal is gaan gebruiken;
- proeverij/leveranciersdag.

Elk verhaal bevat een quote, ultrarealistische foto, meerdere alinea’s tekst en een duidelijke link met hoe ondernemers het verhaal richting gasten kunnen gebruiken. Vermijd overdreven reclamecopy.

### Contact

Maak een verder-lezen/contactpagina met links naar:

- https://zin.sligro.nl/
- https://www.sligro.nl/

Gebruik geen echt Sligro-mailadres of telefoonnummer. Gebruik dummygegevens:

- `studieproject@placeholder.local`
- `+31 000 000 0000`

Samplebox- en proeverijknoppen moeten zichtbaar zijn maar niets doen, omdat dit een studieproject is. Maak ze disabled en vermeld dat de acties bewust gedeactiveerd zijn.

### 404

Maak een nette 404-pagina in dezelfde stijl.

## Belangrijke disclaimer

Zet in de footer duidelijk:

> Studieproject Avans: deze website is ontwikkeld als studieproject voor Avans. Hoewel het concept is gemaakt binnen een leercontext met Sligro als leerbedrijf, is deze website niet gemaakt in opdracht van Sligro en betreft dit geen officiële Sligro-publicatie.

Plaats dezelfde strekking ook als wegklikbare melding bovenaan de site. Deze melding moet één keer per browser verschijnen en daarna verdwijnen via `localStorage`. Sluiten moet kunnen met een kruisje, een knop “Akkoord” en Escape.

## Footer

Voeg naast de disclaimer ook een link toe naar de GitHub-broncode met klein GitHub-icoon:

https://github.com/RoelD/MarcomSligro

## Techniek

- Gebruik nette semantische HTML.
- Maak `styles.css` als gecompileerde stylesheet.
- Voeg `assets/scss/styles.scss` toe als SCSS-bronbestand.
- Houd CSS professioneel gestructureerd.
- Maak `script.js` voor mobiele navigatie, de studieprojectmelding en het automatisch afspelen/pauzeren van de seizoensvideo’s wanneer ze in of uit beeld komen.
- Zorg dat alle links, ankers, afbeeldingen en video-assets werken.

Controleer ook:

- video’s staan in landscape 16:9 en zijn gecentreerd;
- video’s worden niet gecropt alsof ze portrait zijn;
- video’s spelen alleen af wanneer dit logisch is, bijvoorbeeld wanneer ze in beeld komen;
- video-assets staan lokaal in `assets/videos/`.

Lever de volledige website op als downloadbare zip met alle bestanden direct in de root van de zip.