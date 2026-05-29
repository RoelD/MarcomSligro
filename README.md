# Sligro lokaal – GitHub Pages website

Statische GitHub Pages-website voor een Sligro/ZiN-geïnspireerde inspiratieomgeving rondom lokale producten voor MKB-horecaondernemers.

> Let op: dit is een studieproject voor Avans. Hoewel het concept is gemaakt binnen een leercontext met Sligro als leerbedrijf, is deze website niet gemaakt in opdracht van Sligro en betreft dit geen officiële Sligro-publicatie.

## Bestanden

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
- `assets/scss/styles.scss`

## GitHub Pages uploaden

1. Pak de zip uit.
2. Upload de inhoud van de map naar de root van je GitHub Pages-repository.
3. Controleer dat `index.html` in de hoofdmap staat.
4. Ga in GitHub naar **Settings > Pages**.
5. Kies de juiste branch, meestal `main`, en de root-map `/`.
6. Wacht tot GitHub Pages opnieuw gepubliceerd is.

## SCSS / CSS

De site blijft volledig statisch en werkt direct op GitHub Pages.

- `styles.css` staat in de root en wordt door de HTML-pagina's gebruikt.
- `assets/scss/styles.scss` is toegevoegd als nette bronstructuur voor verdere ontwikkeling.
- Gebruik je lokaal Sass? Compileer dan bijvoorbeeld naar `styles.css`.

Voorbeeld:

```bash
sass assets/scss/styles.scss styles.css
```

Omdat GitHub Pages deze site als eenvoudige statische site gebruikt, is de gecompileerde `styles.css` altijd meegeleverd.

## JavaScript

`script.js` bevat:

- mobiele navigatie;
- sluiten van het mobiele menu via linkklik of Escape;
- een eenmalige studieproject-melding bovenaan de site;
- opslag in `localStorage`, zodat de melding na wegklikken niet opnieuw verschijnt.

## Studieproject-melding

De melding bovenin verschijnt één keer per browser. De bezoeker kan deze sluiten met het kruisje of met de knop **Akkoord**. Dezelfde disclaimer staat ook permanent in de footer.

Wil je de melding opnieuw testen? Verwijder dan in de browser de `localStorage`-waarde:

```js
localStorage.removeItem("sligroLocalStudyNoticeDismissed")
```

## Contact en CTA's

De samplebox- en proeverijaanmeldingen zijn bewust gedeactiveerd, omdat dit een placeholder-/studieprojectwebsite is. Er worden geen e-mails naar Sligro verstuurd.

## Logo en afbeeldingen

Het officiële Sligro-logo is als asset opgenomen in:

- `assets/sligro-logo.jpeg`
- `assets/sligro-logo-header.webp`

De afbeeldingen staan in `assets/images/` als lokale WebP-assets. Ze zijn bedoeld als visuele conceptbeelden voor het studieproject en kunnen later worden vervangen door officiële fotografie.

## Controle

In deze versie zijn gecontroleerd:

- interne links;
- lokale assets;
- mobiele navigatie;
- GitHub Pages-structuur;
- footer-disclaimer;
- gedeactiveerde placeholder-CTA's.
