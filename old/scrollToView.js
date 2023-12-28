

const divElement = document.getElementById('liste2');
const testDepartement = document.querySelector('.test-departement');

testDepartement.addEventListener('scroll', () => {
    let rect = divElement.getBoundingClientRect();

    

    if (this.scrollX >= divElement.scrollWidth) {
        console.log('you passed red box bottom');
      }
});

// divElement.scrollIntoView({ behavior: 'smooth' });

const divElement1 = document.getElementById('liste1');

function isElementInViewport(el) {

    // Special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    let rect = el.getBoundingClientRect();

    console.log(rect.top);
    console.log(rect.left);

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}

setTimeout(function () {
    console.log("World");
    isElementInViewport(divElement);
    isElementInViewport(divElement1);
}, 5000);




