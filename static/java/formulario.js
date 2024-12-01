function showDetails(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
function showDetails(details) {
    // Muestra los detalles en el modal
    document.getElementById("modal-details").textContent = details; 
    // Muestra el modal
    document.getElementById("modal").style.display = "block"; 
}

function closeModal() {
    // Cierra el modal
    document.getElementById("modal").style.display = "none"; 
}

// Cierra el modal si el usuario hace clic fuera del contenido del modal
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
}
