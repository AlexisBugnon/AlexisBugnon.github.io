const menuDeroulant = {

    numberComposantDisplayed: 0,

    init: function () {
        const elementsDeroulant = document.querySelectorAll('.composant h3');

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
    },

}

document.addEventListener("DOMContentLoaded", menuDeroulant.init);