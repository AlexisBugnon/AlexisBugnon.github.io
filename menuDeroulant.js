const menuDeroulant = {

    numberComposantDisplayed: 0,

    init: function () {
        const elementsDeroulant = document.querySelectorAll('.composant h3');
        // const elementListAction = document.querySelector('.afficher-liste-bt')

        // elementListAction.addEventListener('click', menuDeroulant.handleListActionCliked);

        for (const element of elementsDeroulant) {
            element.addEventListener('click', menuDeroulant.handleComposantClicked);
        }
    },

    handleComposantClicked: function (e) {
        const composant = e.currentTarget;
        if (composant.parentNode.classList.contains('--displayed')){
            menuDeroulant.numberComposantDisplayed -= 1;
        } else {
            menuDeroulant.numberComposantDisplayed += 1;
        }
        composant.parentNode.classList.toggle('--displayed');
        menuDeroulant.updateListeToggle();
    },

    handleListActionCliked: function (e) {
        const afficherListe = e.currentTarget;
        const elementMois = document.querySelectorAll('.composant');
        for (const mois of elementMois) {
            if (afficherListe.classList.contains('--displayedAll')) {
                menuDeroulant.numberComposantDisplayed = 0;
                if (mois.classList.contains('--displayed')) {
                    mois.classList.remove('--displayed');
                }
            } else {
               menuDeroulant.numberComposantDisplayed = elementMois.length;
                if (!mois.classList.contains('--displayed')) {
                    mois.classList.add('--displayed');
                }
            }
        }
        menuDeroulant.updateListeToggle();
    },

    updateListeToggle: function () {
        const afficherListe = document.querySelector('.afficher-liste-bt');
        if (menuDeroulant.numberComposantDisplayed > 0 && !(afficherListe.classList.contains('--displayedAll'))) {
            afficherListe.classList.add('--displayedAll');
            afficherListe.textContent = 'Cacher tous les Ball-traps';
        } else if (menuDeroulant.numberComposantDisplayed == 0 && afficherListe.classList.contains('--displayedAll')){
            afficherListe.classList.remove('--displayedAll');
            afficherListe.textContent = 'Afficher tous les Ball-traps';
        }
    }

}

document.addEventListener("DOMContentLoaded", menuDeroulant.init);