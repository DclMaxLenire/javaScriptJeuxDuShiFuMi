        // Les Variables //
var boutonPierre = document.getElementById("pierre"); // Choisir Pierre //

var boutonFeuille = document.getElementById("feuille"); // Choisir Feuille //

var boutonCiseaux = document.getElementById("ciseaux"); // Choisir Ciseau //

var choixIA;

var choixDuIa;

var choixDuJoueur;

var choixJoueur;

var resultat;

var nouvellePartie = document.getElementById("boutonReJouer");

// Faire choisir l'utilisateur et affiché sont choix //

boutonPierre.addEventListener("click",
function choixPierre() {  
choixDuJoueur = "pierre";
    choixJoueur =0;
    document.getElementById("joueur").style.backgroundImage="url('Image/imagePierre.png')";
            console.log(choixDuJoueur + choixJoueur);
            choixDeIa();
                comparer();
});
boutonFeuille.addEventListener("click",
function choixFeuille() {      
choixDuJoueur = "feuille";
    choixJoueur =1;
        document.getElementById("joueur").style.backgroundImage="url('Image/imageFeuille.png')";
            console.log(choixDuJoueur + choixJoueur);
            choixDeIa();
                comparer();   
});
boutonCiseaux.addEventListener("click",
function choixCiseaux() {       
choixDuJoueur ="ciseaux";
    choixJoueur =2;
    document.getElementById("joueur").style.backgroundImage="url('Image/imageCiseau.png')";
            console.log(choixDuJoueur + choixJoueur);  
            choixDeIa();
                comparer(); 
});
        // Faire choisir l'IA //
function choixDeIa() {
    choixIA = Math.floor(Math.random() * 3);
    choixIaResultat();
}
        // Faire choisir l'IA et montrer le choix //
function choixIaResultat() {
if (choixIA == 0 ) {
    choixDuIa = "PIERRE";
    document.getElementById("afficheIa").style.backgroundImage="url('Image/imagePierre.png')";
}
else if(choixIA  === 1) {
    choixDuIa= "FEUILLE";
    document.getElementById("afficheIa").style.backgroundImage="url('Image/imageFeuille.png')";
}
else if(choixIA === 2) {
    choixDuIa = "CISEAUX";
    document.getElementById("afficheIa").style.backgroundImage="url('Image/imageCiseau.png')";
}
};
console.log(choixDuIa);
// Comparer les choix //
function comparer() {
    if (choixJoueur === choixIA) {
        console.log("Egalité");
            afficheResultat.innerHTML = "Vous avez faits Egalité ";      
    }
    else if ((choixJoueur==0) && (choixIA==2) || (choixJoueur==1) && (choixIA==0) || (choixJoueur==2) && (choixIA==1)){
        console.log("Vous avez gagnez");
            afficheResultat.innerHTML = " Vous avez gagnez";
    } else {
        console.log("Vous avez perdus");
            afficheResultat.innerHTML = "Vous avez perdus";   
    }
};
        // Donner le résultat //
        // Relancer le jeu //
nouvellePartie.addEventListener("click",
function(){
    window.location.reload(false);  
});