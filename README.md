# Jakub Jandík
---
## Zvolené rozšíření
- Knihovní systém s CRUD operacemi
- Relační databáze s tabulkami pro knihy, autory, žánry, čtenáře a výpůjčky
---
## Spuštění aplikace

1. Naklonujte repozitář
2. Nainstalujte závislosti pomocí `npm install`
3. Spusťte server pomocí `npm start`
4. Pro naplnění databáze ukázkovými daty spusťte `npm run seed`
5. Aplikace bude dostupná na adrese `http://localhost:3000`

## Funkce aplikace

### Správa čtenářů
- Přidávání nových čtenářů s kontaktními údaji
- Zobrazení seznamu všech čtenářů
- Zobrazení detailů čtenáře (email, telefon)
- Mazání čtenářů

### Správa knih
- Přidávání nových knih s informacemi o autorovi, žánru a roku vydání
- Zobrazení seznamu všech knih
- Zobrazení detailů knihy
- Mazání knih

### Správa výpůjček
- Evidence výpůjček knih čtenářům
- Sledování data výpůjčky a vrácení
- Označení vrácených knih

## Technologie
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- Databáze: SQLite3

## Struktura databáze
- **genres**: žánry knih
- **authors**: autoři knih
- **books**: knihy s vazbami na autory a žánry
- **borrowers**: čtenáři/vypůjčitelé
- **loans**: výpůjčky knih

## API Endpointy
- GET /api/borrowers - získání seznamu čtenářů
- POST /api/borrowers - přidání nového čtenáře
- GET /api/loans - získání seznamu výpůjček
- POST /api/loans - vytvoření nové výpůjčky
- PUT /api/loans/:id/return - označení knihy jako vrácené
