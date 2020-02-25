/*Il computer deve generare 16 numeri casuali tra 1 e 100.
In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.*/

var numeriComputer = [];
var livello = parseInt(prompt('Seleziona un livello di difficoltà. Scrivi 0 se vuoi giocare con numeri da 1 a 100, scrivi 1 per numeri da 1 a 80 o scrivi 2 per numeri da 1 a 50'));
var difficolta;

while (livello != 0 && livello != 1 && livello !=2) {
    var livello = parseInt(prompt('Il numero da te inserito non è tra quelli indicati. Scrivi 0 se vuoi giocare con numeri da 1 a 100, scrivi 1 per numeri da 1 a 80 o scrivi 2 per numeri da 1 a 50'));
}
switch (livello) {
    case 0:
        difficolta = 100;
        break;
    case 1:
        difficolta = 80;
        break;
    case 2:
        difficolta = 50;
        break;
    default:
        alert('Il numero da te inserito non è tra quelli indicati. Ricarica');
        break;

}

for (var i = 0; i < 16; i++) {
    numeriComputer[i] = generaRandom(1,difficolta);
}
console.log(numeriComputer); //ovviamente da nascondere se si vuole giocare senza barare!

var numeroUtente = [];
var prova =[];

for (var x = 0; x < 16; x++) {
    numeroUtente[x] = parseInt(prompt('Inserisci un numero tra 1 e ' + difficolta));
    while (numeroUtente[x]<1 || numeroUtente[x]>difficolta) {
        numeroUtente[x]= parseInt(prompt('Il numero inserito non è compreso tra 1 e ' + difficolta + '. Inserisci nuovamente un numero tra 1 e ' + difficolta));
    }
    while (isNaN(numeroUtente[x])) {
        numeroUtente[x] = parseInt(prompt('Non hai inserito un numero. Inserisci nuovamente un numero tra 1 e ' + difficolta));
    }
    while (prova.includes(numeroUtente[x])) {
        numeroUtente[x]= parseInt(prompt('Hai già inserito questo numero. Inserisci nuovamente un numero tra 1 e ' + difficolta));
    }
    prova.push(numeroUtente[x]);
    if (numeriComputer.includes(numeroUtente[x])) {
        console.log('Addio, bomba!');
        console.log('Il tuo punteggio è di: ' + (numeroUtente.length - 1));
        console.log('Ricarica la pagina per riprovare');
        break;

    }
}


function generaRandom(min, max) {
    numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}
