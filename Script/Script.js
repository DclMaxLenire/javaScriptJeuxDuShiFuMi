        // Les Variables //
var boutonPierre = document.getElementById("pierre"); // Choisir Pierre //

var boutonFeuille = document.getElementById("feuille"); // Choisir Feuille //

var boutonCiseaux = document.getElementById("ciseaux"); // Choisir Ciseau //

var choixDeIA  = Math.floor(Math.random() * 3);

var choixDuJoueur;

var resultat;

// Faire choisir l'IA //
function choixIa() {
}
if (choixDeIA === 0 ) {
    choixDeIA = "pierre";
}
else if(choixDeIA  === 1) {
    choixDeIA = "feuille";
}
else if(choixDeIA === 2) {
    choixDeIA = "ciseaux";
}
choixIa();
console.log(choixDeIA);
// Faire choisir l'utilisateur et affiché sont choix //
boutonPierre.addEventListener("click",
function(){      
    choixDuJoueur = "pierre";
    joueur.innerHTML = "Vous avez choisis <br><br> LA PIERRE"  
console.log(choixDuJoueur);
});
boutonFeuille.addEventListener("click",
function choixFeuille(){      
     choixDuJoueur = "feuille";
     joueur.innerHTML = "Vous avez choisis <br><br> LA FEUILLE"
console.log(choixDuJoueur);
});
boutonCiseaux.addEventListener("click",
function choixCiseaux(){       
     choixDuJoueur ="ciseaux";
     joueur.innerHTML = "Vous avez choisis <br><br> LA PAIRE DE CISEAUX"
console.log(choixDuJoueur);             
});
// Montrer le choix de l'ia //

// Comparé les choix //
function comparer(choixDuJoueur, choixDeIA) {
    if (choixDuJoueur === "pierre" && choixDeIA === "feuille") {
        resultat = "Vous avez perdu";
        console.log(résultat);
    } else if (choixDuJoueur === "pierre" && choixDeIA === "ciseaux") {
        resultat = "Vous avez gagnez";
        console.log(résultat);
    } else if (choixDuJoueur === "pierre" && choixDeIA === "pierre") {
        resultat = "Egalité";
        console.log(résultat);
    } else if (choixDuJoueur === "feuille" && choixDeIA === "feuille") {
        resultat = "Egalité";
        console.log(résultat);
    } else if (choixDuJoueur === "feuille" && choixDeIA === "pierre") {
        resultat = "Vous avez gagnez";
        console.log("Vous avez gagnez");
    } else if (choixDuJoueur === "feuille" && choixDeIA === "ciseaux") {
        resultat = "Vous avez perdus";
        console.log(résultat);
    } else if (choixDuJoueur === "ciseaux" && choixDeIA === "pierre") {
        resultat = "Vous avez perdus";
        console.log(résultat);
    } else if (choixDuJoueur === "ciseaux" && choixDeIA === "feuille") {
        resultat = "Vous avez gagnez";
        console.log(résultat);
    } else if (choixDuJoueur === "ciseaux" && choixDeIA === "ciseaux") {
        resultat = "Egalité";
        console.log(resultat);
    }
};
comparer();
// Donner le résultat //
// Relancer le jeu //
