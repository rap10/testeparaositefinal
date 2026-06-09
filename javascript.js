const catalogo = document.getElementById('catalogo');

const btnAvancar = document.getElementById('btnAvancar');
const btnVoltar = document.getElementById('btnVoltar');

btnAvancar.addEventListener('click', (e) => {
    e.preventDefault();

    catalogo.scrollLeft += 300;
});

btnVoltar.addEventListener('click', (e) => {
    e.preventDefault();

    catalogo.scrollLeft -= 300;
});


document.getElementById("ARTHUR").addEventListener("click", () => {
    window.open("https://www.youtube.com/watch?v=cT6Irdnj4VY", "_blank");

});

document.getElementById("13DIASLOGODAMORTE").addEventListener("click", () => {
    window.open("https://www.youtube.com/watch?v=OJAKJmQR8rw", "_blank");

});

document.getElementById("castelodomedo").addEventListener("click", () => {
    window.open("https://www.youtube.com/watch?v=qIN82R8MLrQ", "_blank");

});

document.getElementById("ultimocaçadordebruxas").addEventListener("click", () => {
    window.open("https://www.youtube.com/watch?v=iS_omzHx4gg", "_blank");

});

document.getElementById(" OCaçadordeDemônios").addEventListener("click", () => {
    window.open("https://www.youtube.com/watch?v=s5A6iaJhzow", "_blank");

});