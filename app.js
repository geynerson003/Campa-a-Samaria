
function abrirModal() {
    var modal = document.getElementById("myModal");
    var imagen = document.getElementById("imagen");
    imagen.src = "img/1.png"; 
    modal.style.display = "block";
}

function cerrarModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

//modal evidencias 
var imagenes = ["img/evidenciauno.jpg", "img/evidenciados.jpg", "img/evidenciatres.jpg", "img/evidenciacuatro.jpg", "img/evidenciacinco.jpg", "img/evidenciaseis.jpg", "img/evidenciasiete.jpg", "img/evidenciaocho.jpg","img/evidencianueve.jpg", "img/evidenciadiez.jpg", "img/evidenciaonce.jpg"]; 
var index = 0; 

function abrirModaldos() {
    var modaldos = document.getElementById("myModaldos");
    var imagendos = document.getElementById("imagendos");
    imagendos.src = imagenes[index]; 
    modaldos.style.display = "block";
}

function cerrarModaldos() {
    var modaldos = document.getElementById("myModaldos");
    modaldos.style.display = "none";
}

function cambiarImagendos(delta) {
    index += delta; 
    if (index >= imagenes.length) {
        index = 0; 
    } else if (index < 0) {
        index = imagenes.length - 1; 
    }
    var imagendos = document.getElementById("imagendos");
    imagendos.src = imagenes[index]; 
}
