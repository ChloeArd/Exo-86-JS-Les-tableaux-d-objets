/* Ne touchez pas à ce code */
let citroen = {
    color: 'blue',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Citroën est ouverte");
    },
}

let peugeot = {
    color: 'yellow',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Peugeot est ouverte");
    }
}

let ford = {
    color: 'red',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Ford est ouverte");
    }
}


/**
 * Votre code commence ici !
 */
let voitures = {
    garage: 'concession',
    lieu: 'Fourmies',
    // Dans un tableau, ajouter les différentes voitures que vous possédez.
    collection: [citroen, ford, peugeot], // Vos voitures dans cette propriété !
}

// FIXME Parcourrez le tableau dans lequel vous avez placé vos objets.
// TODO ==> invoquez la méthode ouvrirPorte pour chaque voiture de la collection.
for (let i = 0; i < voitures.collection.length; i++ ) {
    citroen.ouvrirPorte();
    ford.ouvrirPorte();
    peugeot.ouvrirPorte();
    let newSpan = document.createElement("span");
    newSpan.innerHTML = "La couleur de la citroen est " + citroen.color + ", la couleur de la ford est " + ford.color + ", la couleur de la peugeot est  " + peugeot.color + "<br>";
    document.getElementById("couleurVoiture").appendChild(newSpan);
}

