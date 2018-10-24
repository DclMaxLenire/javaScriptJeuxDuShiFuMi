        // Les Variables //
var boutonPierre = document.getElementById("pierre"); // Choisir Pierre //

var boutonFeuille = document.getElementById("feuille"); // Choisir Feuille //

var boutonCiseaux = document.getElementById("ciseaux"); // Choisir Ciseau //

var choixIA;

var choixDuIa;

var choixDuJoueur;

var choixJoueur;

var resultat;

// Faire choisir l'utilisateur et affiché sont choix //

boutonPierre.addEventListener("click",
function choixPierre() {  
choixDuJoueur = "pierre";
choixJoueur =0;
    joueur.innerHTML = "Vous avez choisis <br><br> LA PIERRE" 
        console.log(choixDuJoueur + choixJoueur);
        comparer();
       
});
boutonFeuille.addEventListener("click",
function choixFeuille() {      
choixDuJoueur = "feuille";
choixJoueur =1;
    joueur.innerHTML = "Vous avez choisis <br><br> LA FEUILLE"
        console.log(choixDuJoueur + choixJoueur);
        comparer();
        
});
boutonCiseaux.addEventListener("click",
function choixCiseaux() {       
choixDuJoueur ="ciseaux";
choixJoueur =2;
    joueur.innerHTML = "Vous avez choisis <br><br> LA PAIRE DE CISEAUX"
        console.log(choixDuJoueur + choixJoueur);  
        comparer(); 
});
        // Faire choisir l'IA //
function choixDeIa() {
    choixIA = Math.floor(Math.random() * 3);
}
        // Faire choisir l'IA et montrer le choix //
choixDeIa();
function choixIaResultat() {
if (choixIA == 0 ) {
    choixDuIa = "pierre";
}
else if(choixIA  === 1) {
    choixDuIa= "feuille";
}
else if(choixIA === 2) {
    choixDuIa = "ciseaux";
}
};
choixIaResultat();
console.log(choixDuIa);
// Comparer les choix //
function comparer() {
    if (choixJoueur === choixIA) {
        console.log("Egalité");
        
    }
    else if ((choixJoueur==0) && (choixIA==2) || (choixJoueur==1) && (choixIA==0) || (choixJoueur==2) && (choixIA==1)){
        console.log("Vous avez gagnez");
    } else {
        console.log("Vous avez perdu");

    }
};

        // Donner le résultat //
        // Relancer le jeu //
