/*Il computer deve generare 16 numeri casuali tra 1 e 100.
In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.*/

var numeriComputer = [];

for (var i = 0; i < 16; i++) {
    numeriComputer[i] = generaRandom(1,100);
}
console.log(numeriComputer); //ovviamente da nascondere se si vuole giocare senza barare!

var numeroUtente = [];

for (var x = 0; x < 16; x++) {
    numeroUtente[x] = parseInt(prompt('Inserisci un numero tra 1 e 100'));
    while (numeroUtente[x]<1 || numeroUtente[x]>100) {
        numeroUtente[x]= parseInt(prompt('Il numero inserito non è compreso tra 1 e 100. Inserisci nuovamente un numero tra 1 e 100.'));
    }
    while (isNaN(numeroUtente[x])) {
        numeroUtente[x] = parseInt(prompt('Non hai inserito un numero. Inserisci nuovamente un numero tra 1 e 100.'));
    }
    if (numeriComputer.includes(numeroUtente[x])) {
        console.log('Addio, bomba!');
        console.log('Ricarica la pagina per riprovare');
        break;

    }

}

console.log('Il tuo punteggio è di: ' + (numeroUtente.length - 1));


function generaRandom(min, max) {
    numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}
