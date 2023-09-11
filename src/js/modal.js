function openModal () {
    document.getElementById("modal").style.display = "block"
    document.getElementById("overlay").style.display = "block"
}

function closeModal () {
    document.getElementById("modal").style.display = "none"
    document.getElementById("overlay").style.display = "none"
}

document.getElementById("open-button").addEventListener("click", openModal);

document.getElementById("close-button").addEventListener("click", closeModal);
document.getElementById("overlay").addEventListener("click", closeModal);