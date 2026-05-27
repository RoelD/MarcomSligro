# Sligro lokaal — statische GitHub Pages-website

Deze map bevat een complete statische website voor een Sligro/ZiN-achtig inspiratieconcept rondom lokale producten voor MKB-horecaondernemers.

## Inhoud

- `index.html` — homepage
- `inspiratie.html` — inspiratiepagina met menukaartideeën en krijtbord
- `recepten.html` — uitgewerkte recepten
- `assortiment.html` — lokale productcategorieën
- `herkennen.html` — lokale producten herkennen in de vestiging
- `verhalen.html` — verhalen van teler, ondernemer en medewerker
- `contact.html` — verder lezen en contact
- `404.html` — foutpagina
- `styles.css` — vormgeving
- `script.js` — mobiele navigatie en actieve navigatiestaat
- `assets/` — logo, favicon en beeldassets

## Logo

Het officiële Sligro-logo is toegevoegd als bronbestand:

- `assets/sligro-logo.jpeg`

Voor de header is hiervan een geoptimaliseerde, bijgesneden webversie gemaakt:

- `assets/sligro-logo-header.webp`

Bron van het logo:
`https://www.sligrofoodgroup.nl/sites/default/files/download/sligro-logo.jpeg`

## Afbeeldingen

De beeldlaag is vervangen door fotorealistische lokale beeldassets in WebP-formaat. De site verwijst naar de `.webp`-bestanden voor performance. De originele gedownloade `.jpg`-bestanden staan ook in `assets/images/`, zodat je ze later makkelijk kunt vervangen of opnieuw kunt optimaliseren.

Wil je officiële Sligro-fotografie gebruiken, vervang dan de bestanden in `assets/images/` met dezelfde bestandsnamen. Dan hoef je geen HTML aan te passen.

## Publiceren via GitHub Pages

1. Maak een nieuwe repository aan op GitHub.
2. Upload alle bestanden uit deze map naar de root van de repository.
3. Ga naar **Settings** → **Pages**.
4. Kies bij **Build and deployment** voor **Deploy from a branch**.
5. Selecteer branch `main` en map `/root`.
6. Klik op **Save**.
7. Na enkele minuten staat de website live via de GitHub Pages-link.

## Aanpassen

- Kleuren en typografie staan bovenaan in `styles.css` als CSS-variabelen.
- Navigatie staat in de header van elk HTML-bestand.
- Recepten staan in `recepten.html`.
- Verhalen staan in `verhalen.html`.
- Alle knoppen linken naar bestaande pagina’s, ankers of externe Sligro/ZiN-pagina’s.

## Techniek

De website gebruikt alleen HTML, CSS en lichte JavaScript. Er zijn geen frameworks, build tools of externe scripts nodig.
