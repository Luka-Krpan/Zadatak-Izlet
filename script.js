// unos podataka

let ime = prompt("Unesi svoje ime:");

let ulaznicaCijena = Number(prompt("Unesi cijenu jedne ulaznice:"));
let ulaznicaBroj = Number(prompt("Unesi broj ulaznica:"));
let budzet = Number(prompt("Unesi svoj budžet:"));

// izracun i usporedbe

let ukupniTrosak = ulaznicaCijena * ulaznicaBroj;
let preostaliIznos = budzet - ukupniTrosak;
let dovoljnoNovca = budzet >= ukupniTrosak;
let tocanIznos = budzet === ukupniTrosak;

// ispis
let nastavakPlaniranja = confirm("Želiš li nastaviti s planiranjem izleta?");
alert("Ime: " + ime +
"\nUkupni trosak: " + ukupniTrosak + " EUR" +
"\nPreostali iznos: " + preostaliIznos + " EUR" +
"\nDovoljno novca: " + dovoljnoNovca +
"\nTocan iznos: " + tocanIznos +
"\nNastavak planiranja: " + nastavakPlaniranja);