
const kjopBillettBtn = document.getElementById('kjopBillett');
const slettBilletterBtn = document.getElementById('slettBilletter');
const billettListe = document.getElementById('billettListe');

// Array for å lagre billetter
let billetter = [];

// Funksjon for å legge til billett i array og oppdatere visningen
function leggTilBillett() {
    const film = document.getElementById('filmer').value;
    const antall = document.getElementById('antall').value;
    const fornavn = document.getElementById('fornavn').value;
    const etternavn = document.getElementById('etternavn').value;
    const telefon = document.getElementById('telefon').value;
    const epost = document.getElementById('epost').value;

    // Validering
    if (film === '' || antall === '' || fornavn === '' || etternavn === '' || telefon === '' || epost === '') {
        alert('Alle felt må fylles ut');
        return;
    }


    if (!/^[0-9]{8}$/.test(telefon)) {
        alert('Telefonnummeret er ikke gyldig. Skriv inn 8 siffer.');
        return;
    }


    // Legg til billett i array
    billetter.push({ film, antall, fornavn, etternavn, telefon, epost});

    // Oppdater visningen
    visAlleBilletter();
    // Tøm inputfeltene
    document.getElementById('filmer').value = '';
    document.getElementById('antall').value = '';
    document.getElementById('fornavn').value = '';
    document.getElementById('etternavn').value = '';
    document.getElementById('telefon').value = '';
    document.getElementById('epost').value = '';
}

// Funksjon for å vise alle billetter i liste
function visAlleBilletter() {
    billettListe.innerHTML = '';
    billetter.forEach((billett, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Billett ${index + 1}: Film - ${billett.film}, Antall 
        - ${billett.antall}, Fornavn - ${billett.fornavn}, Etternavn - ${billett.etternavn},
         Telefon - ${billett.telefon}, Epost - ${billett.epost}`;
        billettListe.appendChild(listItem);
    });
}

// Funksjon for å slette alle billetter
function slettBilletter() {
    billetter = [];
    visAlleBilletter();
}

kjopBillettBtn.addEventListener('click', leggTilBillett);
slettBilletterBtn.addEventListener('click', slettBilletter);
