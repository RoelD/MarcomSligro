# Sligro lokaal – GitHub Pages website

Maak een complete, professionele, statische GitHub Pages-website voor een Sligro-geïnspireerd concept rondom lokale producten voor MKB-horecaondernemers.

De website moet aanvoelen als een echte online inspiratieomgeving, vergelijkbaar met een mogelijke uitbreiding van het Sligro ZiN Inspiratielab. Het mag niet voelen als een theoretische campagnepagina of schoolopdracht. Gebruik dus geen zichtbare termen als briefing, communicatiedoelstelling, Touch/Tell/Sell, campagnehub of marketingtheorie.

Het centrale concept is:

**Van boer tot borrelplank.**

De website helpt horecaondernemers om lokale producten te ontdekken, te herkennen in de winkel, toe te passen op hun menukaart en te vertalen naar een verhaal richting gasten.

## Doelgroep

De doelgroep bestaat uit MKB-horecaondernemers, restauranteigenaren, fastservice-ondernemers, cateraars en hotelmanagers. Spreek hen aan als trotse vakmensen die weinig tijd hebben en praktische inspiratie zoeken.

## Look & feel

Sluit aan op de Sligro/ZiN-uitstraling:

- wit als basis;
- donkergrijze tekst;
- warme geel/gouden accenten;
- donkergroen subtiel als ondersteunende kleur;
- rustige cards;
- veel witruimte;
- afgeronde hoeken;
- premium, zakelijke maar warme foodservice-uitstraling.

Gebruik:

- koppen: `"Aptos Slab", Rockwell, Georgia, serif`;
- bodytekst: `Aptos, "Segoe UI", Arial, sans-serif`.

Gebruik het officiële Sligro-logo:

https://www.sligrofoodgroup.nl/sites/default/files/download/sligro-logo.jpeg

Sla het logo lokaal op als asset. Maak geen nagemaakt logo.

## Afbeeldingen en video’s

Gebruik ultrarealistische, professionele en warme beelden. De beelden moeten passen bij de inhoud en mogen geen generieke stock- of duidelijke AI-uitstraling hebben. Gebruik afbeeldingen van lokale producten, borrelplanken, streekkaas, seizoensgroenten, lokale telers, bakkers, horecaondernemers, proeverijen, sampleboxen, winkelherkenning en duurzaamheidscontext.

Gebruik WebP waar mogelijk.

Verwerk daarnaast deze video’s als lokale assets in `assets/videos/`:

- `Reclamevideo_Feestdagen_Gemini.mp4`
- `Reclamevideo_Herfst_Gemini.mp4`
- `Reclamevideo_WK_Gemini.mp4`
- `Reclamevideo_Kerst_Gemini.mp4`
- `Testimonial_Asperges_Gemini.mp4`
- `Testimonial_Limousin_Gemini.mp4`

Gebruik op de website nette bestandsnamen, bijvoorbeeld:

- `reclamevideo-feestdagen.mp4`
- `reclamevideo-herfst.mp4`
- `reclamevideo-wk.mp4`
- `reclamevideo-kerst.mp4`
- `testimonial-asperges.mp4`
- `testimonial-limousin.mp4`

De reclamevideo’s zijn bedoeld voor de inspiratiepagina. Toon ze in een aparte sectie **Seizoenscampagnes**. De video’s zijn landscape-video’s en moeten daarom in een 16:9-container staan. Centreer ze goed en voorkom dat ze als portrait-video worden uitgesneden. Gebruik bijvoorbeeld `object-fit: contain`. Laat ze muted afspelen wanneer ze in beeld komen en pauzeren wanneer ze uit beeld verdwijnen. Laat controls zichtbaar.

De testimonialvideo’s over asperges en Limousin-runderen horen op de pagina **Verhalen**, in een aparte sectie **Makers aan het woord** of vergelijkbaar.

## Bestandsstructuur

Maak minimaal deze bestanden:

- `index.html`
- `van-boer-tot-borrelplank.html`
- `inspiratie.html`
- `recepten.html`
- `assortiment.html`
- `herkennen.html`
- `duurzaamheid.html`
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

De website moet volledig statisch zijn en direct werken op GitHub Pages. Gebruik HTML, CSS/SCSS en lichte JavaScript. Gebruik geen frameworks.

## Navigatie

Gebruik op alle pagina’s dezelfde hoofdnavigatie:

- Home
- Van boer tot borrelplank
- Inspiratie
- Recepten
- Assortiment
- Herkennen
- Duurzaamheid
- Verhalen
- Verder lezen

Zorg dat de actieve pagina visueel wordt gemarkeerd. Controleer expliciet dat **Duurzaamheid** ook zichtbaar is op de pagina **Verhalen**.

## Pagina’s

### 1. Homepage – `index.html`

Maak een sterke homepage met:

- hero-sectie;
- introductie van “Van boer tot borrelplank”;
- routes naar recepten, inspiratie, assortiment, herkennen, duurzaamheid en verhalen;
- voordelen van lokaal werken;
- uitgelicht recept;
- concrete inspiratieblokken;
- CTA-blok onderaan.

Voorbeeldtitel:

**Maak lokale producten zichtbaar op je kaart.**

Voorbeeldlead:

“Ontdek praktische recepten, productideeën, herkenningspunten in de winkel en verhalen waarmee je gasten een echt lokaal verhaal kunt vertellen.”

### 2. Centrale conceptpagina – `van-boer-tot-borrelplank.html`

Maak een centrale inspiratiepagina rond het concept.

Hero:

**Van boer tot borrelplank.**

Subtitel:

“Lokale producten voor horecaondernemers die hun gasten meer willen serveren dan alleen smaak.”

Inhoud:

- uitleg over lokale producten met een verhaal;
- waarom lokaal werkt voor de zaak;
- route van maker naar menukaart;
- productcategorieën;
- receptinspiratie;
- leveranciersverhalen;
- samplebox;
- proeverij;
- CTA naar assortiment, recepten, duurzaamheid en verhalen.

Voordelen die terug mogen komen:

- herkenbare herkomst;
- onderscheidende menukaart;
- korte keten;
- smaak en beleving;
- praktische toepasbaarheid via Sligro.

### 3. Inspiratie – `inspiratie.html`

Maak een inspiratiepagina met:

- menukaartideeën;
- lunchspecials;
- borrelconcepten;
- dessertideeën;
- tafelkaart- en social-postideeën;
- ultrarealistisch krijtbordbeeld;
- sectie **Seizoenscampagnes** met vier video’s.

Krijtbordkreten:

- Van boer tot borrelplank
- Lokaal op de lunchkaart
- Proef Limburg op je bord
- Onze seizoensspecial met streekgroenten
- Vraag naar de streekkaas van deze week

Video-cards:

- **Feestdagen** – voor borrelmomenten, eindejaarsarrangementen en lokale feestdageninspiratie.
- **Kerst** – voor kerstmenu’s, feestelijke borrelplanken en decemberarrangementen.
- **Herfst** – voor seizoensgroenten, comfortfood en warme kaartinspiratie.
- **WK** – voor borrelplanken, sportmomenten, cafés en deelbare bites.

### 4. Recepten – `recepten.html`

Voeg echte uitgewerkte recepten toe, minimaal:

- Limburgse borrelplank;
- Streeklunch voor fastservice;
- Cateringplank uit de regio;
- Gegrilde seizoensgroenten met kruidenolie en zachte kaas;
- Mini-vlaaiproeverij bij koffie of dessert.

Per recept:

- korte intro;
- ingrediënten;
- bereiding;
- serveertip;
- toepassing voor horeca;
- menukaarttekst;
- passende afbeelding;
- link naar assortiment of inspiratie.

### 5. Assortiment – `assortiment.html`

Maak geen webshop, maar een inspiratiepagina met lokale productcategorieën.

Categorieën:

- Limburgse streekkaas;
- regionale charcuterie;
- streekbrood en banket;
- seizoensgroenten;
- mosterd, chutney en appelstroop;
- lokale dranken en arrangementen;
- samplebox/proefpakket;
- herkomstkaartjes/storytellingmateriaal.

Per categorie:

- passende foto;
- korte uitleg;
- toepassing op de kaart;
- label “Lokaal uit Limburg”;
- knop naar een relevant recept of inspiratieblok.

### 6. Herkennen – `herkennen.html`

Maak een praktische pagina **Zo herken je lokale producten in de winkel**.

Toon vijf herkenningspunten met ultrarealistische beelden:

1. schapkaart “Lokaal uit Limburg”;
2. hangkaart bij krat of display;
3. vaste afdelingen zoals groente & fruit, zuivel, bakkerij en borrel;
4. vraag het een medewerker;
5. herkomstkaartje of QR-code bij producten.

Maak dit visueel met cards, nummers, korte uitleg en passende afbeeldingen.

### 7. Duurzaamheid – `duurzaamheid.html`

Maak een aparte duurzaamheidspagina. Benoem de ecologische en duurzame voordelen van lokale producten genuanceerd en professioneel.

Belangrijke inhoud:

- lokale producten zijn niet automatisch altijd duurzamer, maar bieden duidelijke duurzaamheidskansen;
- kortere ketens kunnen zorgen voor minder schakels tussen producent, groothandel en horecaondernemer;
- kortere ketens kunnen bijdragen aan minder transportkilometers en daarmee mogelijk een kleinere CO₂-footprint;
- de exacte impact hangt af van teeltwijze, logistiek, verpakking, koeling en schaalgrootte;
- seizoensgericht werken sluit beter aan op natuurlijke beschikbaarheid;
- transparantie over herkomst helpt ondernemers en gasten bewuster kiezen;
- sampleboxen en proeverijen kunnen helpen om gerichter te testen en verspilling te beperken;
- lokale producten versterken verbinding met de regio, makers en het landschap.

Gebruik concrete blokken zoals:

- Kortere keten;
- Minder schakels tussen maker en menukaart;
- Seizoensgericht werken;
- Meer transparantie;
- Gerichter testen;
- Van impact naar gastbeleving.

Voeg passende ultrarealistische afbeeldingen toe.

### 8. Verhalen – `verhalen.html`

Maak een uitgebreide verhalenpagina met geloofwaardige verhalen van makers, leveranciers en ondernemers.

Geschreven verhalen:

- kaasmaker;
- lokale teler;
- bakker;
- horecaondernemer die meer lokale producten gebruikt;
- proeverij/leveranciersdag.

Elk verhaal bevat:

- quote;
- ultrarealistische foto;
- meerdere alinea’s tekst;
- uitleg over samenwerking, herkomst of toepassing;
- uitleg hoe een ondernemer het verhaal richting gasten kan gebruiken;
- geen overdreven reclamecopy.

Voeg daarnaast een videosectie toe:

**Makers aan het woord**

Met twee testimonialvideo’s:

- **Asperges uit de regio** – testimonial over lokale teelt, seizoen, kwaliteit en samenwerking.
- **Limousin en aandacht voor dieren** – testimonial over runderen, dierenwelzijn, herkomst, vertrouwen en samenwerking.

De video’s moeten dezelfde nette landscape-weergave gebruiken als de reclamevideo’s.

### 9. Contact – `contact.html`

Maak een verder-lezen/contactpagina met links naar:

- https://zin.sligro.nl/
- https://www.sligro.nl/

Gebruik geen echt Sligro-mailadres of echt Sligro-telefoonnummer.

Gebruik dummygegevens:

- `studieproject@placeholder.local`
- `+31 000 000 0000`

Samplebox- en proeverijknoppen mogen zichtbaar zijn, maar moeten niets doen. Maak ze disabled en vermeld dat de acties bewust gedeactiveerd zijn omdat dit een statisch studieproject is.

### 10. 404 – `404.html`

Maak een nette 404-pagina in dezelfde stijl met:

- korte foutmelding;
- knop terug naar homepage;
- knop naar recepten of assortiment.

## Disclaimer

Zet in de footer duidelijk:

> Studieproject Avans: deze website is ontwikkeld als studieproject voor Avans. Hoewel het concept is gemaakt binnen een leercontext met Sligro als leerbedrijf, is deze website niet gemaakt in opdracht van Sligro en betreft dit geen officiële Sligro-publicatie.

Plaats dezelfde strekking ook als wegklikbare melding bovenaan de site. Deze melding moet:

- één keer per browser verschijnen;
- verdwijnen via `localStorage`;
- te sluiten zijn met een kruisje;
- te sluiten zijn met een knop “Akkoord”;
- ook sluiten met Escape ondersteunen.

Gebruik als localStorage-key:

`sligroLocalStudyNoticeDismissed`

## Footer

Plaats in de footer:

- korte omschrijving van de site;
- studieprojectdisclaimer;
- links naar belangrijke pagina’s;
- link naar ZiN Inspiratielab;
- link naar de GitHub-broncode met klein GitHub-icoon:

https://github.com/RoelD/MarcomSligro

## Techniek

- Gebruik nette semantische HTML.
- Maak `styles.css` als gecompileerde stylesheet.
- Voeg `assets/scss/styles.scss` toe als SCSS-bronbestand.
- Houd CSS logisch en professioneel gestructureerd.
- Maak `script.js` voor mobiele navigatie, de studieprojectmelding en video autoplay/pauze.
- Gebruik `IntersectionObserver` om video’s muted af te spelen wanneer ze in beeld komen en te pauzeren wanneer ze uit beeld verdwijnen.
- Zorg dat de video’s in landscape 16:9 worden weergegeven.
- Zorg dat alle interne links, ankers, afbeeldingen en video-assets werken.
- Voeg een README toe met uploadinstructies voor GitHub Pages.

## Eindcontrole

Controleer voor oplevering:

- alle interne links werken;
- alle ankers bestaan;
- alle lokale afbeeldingen bestaan;
- alle lokale video’s bestaan;
- de website is responsive;
- de contactpagina bevat geen echt Sligro-mailadres of telefoonnummer;
- samplebox- en proeverijknoppen zijn gedeactiveerd;
- de studieprojectmelding verschijnt één keer en is wegklikbaar;
- de GitHub-link staat in de footer;
- de site werkt als statische GitHub Pages-site.

Lever de volledige website op als downloadbare zip met alle bestanden direct in de root van de zip.
