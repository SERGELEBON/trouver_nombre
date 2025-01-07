// Récupération des éléments du DOM
const nombreInput = document.getElementById('nombreInput');
const verifierBtn = document.getElementById('verifierBtn');
const resultat = document.getElementById('resultat');

// Ajouter un événement au bouton
verifierBtn.addEventListener('click', () => {
    const nombre = parseInt(nombreInput.value);

    if (isNaN(nombre)) {
        resultat.textContent = "Erreur : Veuillez entrer un nombre entier valide.";
        resultat.style.color = 'red';
    } else {
        if (nombre % 2 === 0) {
            resultat.textContent = `Le nombre ${nombre} est pair.`;
            resultat.style.color = 'green';
        } else {
            resultat.textContent = `Le nombre ${nombre} est impair.`;
            resultat.style.color = 'blue';
        }
    }
});
