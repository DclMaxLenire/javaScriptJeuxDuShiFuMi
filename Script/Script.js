var boutonPierre = document.getElementById("pierre"); // Choisir Pierre //

var boutonFeuille = document.getElementById("feuille"); // Choisir Feuille //

var boutonCiseaux = document.getElementById("ciseaux"); // Choisir Ciseau //

var choixIA  = Math.floor(Math.random() * 60);

var choixDuJoueur;

// Faire choisir l'IA //
    if (choixIA <= 20 ) {
        choixIA = "pierre";
    }
    else if(choixIA > 20 && choixIA < 40) {
        choixIA = "feuille";
    }
    else if(choixIA >= 40) {
        choixIA = "ciseaux";
    }
console.log(choixIA);

// Faire choisir l'utilisateur //
function choixJoueur() {




    };






   

// Montrer le choix de l'utilisateur //
boutonPierre.addEventListener("click",
        function(){
        joueur.textContent=("PIERRE");
        });
boutonFeuille.addEventListener("click",
        function(){
        joueur.textContent=("FEUILLE");
        });
boutonCiseau.addEventListener("click",
        function(){
        joueur.textContent=("CISEAU");
        });
// Montrer le choix de l'ia //
// Comparé les choix //
// Donner le résultat //
// Relancer le jeu //