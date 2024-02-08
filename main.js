/**
 npm install prompt-sync
 */

const prompt = require("prompt-sync")();

/** VARIABLES  */
let plateau = [];
let compteurDeTour = 0;
let nombreDeCaseAAvancer;
const joueur = "X";
let position = 0;
let status = true;
let heureDebutJeu = new Date();

/** CREATION DU PLATEAU */
for (let i = 0; i <= 63; i++) {
  plateau[i] = i;
}
plateau[position] = joueur;

while (status) {
  compteurDeTour++;
  console.log("tour : " + compteurDeTour);
  console.log(plateau);
  action = prompt("A vous de jouer, lancer des dès");
  lancerDes();
  console.log("vous avancer de " + nombreDeCaseAAvancer);
  avancerJoueur();
  verifierStatus();
}
console.log(`VOUS AVEZ GAGNE EN ${compteurDeTour} tours !! FIN DE LA PARTIE `);
const minuteTotal = new Date().getMinutes() - heureDebutJeu.getMinutes();
const seconde = new Date().getSeconds() - heureDebutJeu.getSeconds();

console.log(
  `VOUS AVEZ PASSER ${minuteTotal} minutes et ${seconde} seconde à jouer`
);

function lancerDes() {
  const de1 = Math.floor(Math.random() * 6) + 1;
  const de2 = Math.floor(Math.random() * 6) + 1;
  nombreDeCaseAAvancer = de1 + de2;
}

function avancerJoueur() {
  if (position == 0 && nombreDeCaseAAvancer == 9) {
    plateau[position] = position;
    position = 53;
  } else {
    plateau[position] = position;
    position = position + nombreDeCaseAAvancer;
  }

  if (position > 63) {
    position = 63 - (position - 63);
  }

  plateau[position] = joueur;
}

function verifierStatus() {
  if (position == 63) {
    status = false;
    console.log("Vous avez gagné !");
    console.log(plateau);
  }

  if (position % 9 == 0 && position != 63 && position != 0) {
    avancerJoueur();
    console.log("Génial vous tombez sur une case de l'oie !");
  }

  if (position == 58) {
    nombreDeCaseAAvancer = -58;
    avancerJoueur();
  }
}
