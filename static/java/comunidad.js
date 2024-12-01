const comentarioForm = document.getElementById('comentario-form');
    const comentariosContainer = document.getElementById('comentarios-container');

    comentarioForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const nombre = document.getElementById('nombre-comentario').value;
        const comentario = document.getElementById('comentario').value;

        const nuevoComentario = document.createElement('div');
        nuevoComentario.classList.add('comentario');
        nuevoComentario.innerHTML = `<strong>${nombre}:</strong> ${comentario}`;

        comentariosContainer.appendChild(nuevoComentario);

        comentarioForm.reset();
    });