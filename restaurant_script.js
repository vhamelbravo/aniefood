

// Set Menu elements to appear and disappear
const PlatillosButton = document.getElementById('platillos-link');
const Platillos = document.getElementById('platillos-container');
const PostresButton = document.getElementById('postres-link');
const Postres = document.getElementById('postres-container');

window.onload = function() {
PlatillosButton.click();
}
PostresButton.addEventListener( 'click', () => {
Platillos.style.visibility = 'hidden' ;
Postres.style.visibility = 'visible' ;
});
PlatillosButton.addEventListener( 'click', () => {
Postres.style.visibility = 'hidden' ;
Platillos.style.visibility = "visible" ;
});

