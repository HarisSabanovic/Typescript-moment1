# Projektbeskrivning
Detta projekt är en enkel webbapplikation byggd med HTML, CSS och TypeScript. Applikationen låter användaren lägga till, visa och rensa kurser. Användaren kan mata in kursinformation som kurskod, kursnamn, progression och en länk till kursen. Denna information sparas sedan i webbläsarens localStorage, vilket gör att data kvarstår även om sidan uppdateras.

## Funktioner
Webbapplikationen har flera användbara funktioner. Användaren kan fylla i ett formulär för att lägga till en kurs med information som kurskod, kursnamn, progression och en länk till kursens webbplats. Efter att kursen har sparats visas den i en lista på sidan. Om användaren vill, kan alla sparade kurser rensas med en knapptryckning. Detta rensar både listan på sidan och datan i localStorage.

## Förklaring
För att hålla strukturen på kursinformationen konsekvent och säkerställa att rätt data används, skapade jag ett TypeScript-interface som definierar hur en kurs ska se ut.

```typescript
interface courseInfo {
    code: string;
    name: string;
    progression: string;
    link: string;
}
```

När användaren klickar på "Spara"-knappen, hämtar applikationen värden från formuläret och skapar ett objekt baserat på courseInfo-interfacet. Därefter kontrollerar applikationen om kursen redan finns i localStorage. Om kursen redan finns, får användaren valet att ersätta den. Om kursen inte finns, läggs den till i listan och sparas i localStorage.

Vid sidladdning läser applikationen in sparade kurser från localStorage och visar dem i en lista. Detta görs genom att parsade JSON-strängar omvandlas till objekt som sedan läggs till i DOM.

Rensa Kurser
När användaren klickar på "Rensa kurser"-knappen, rensas både listan på sidan och datan i localStorage, vilket tar bort alla sparade kurser.