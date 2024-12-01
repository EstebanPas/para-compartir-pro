        // Funcionalidad para el seguimiento de cultivo
        function iniciarSeguimiento(plantaId) {
            const modal = document.getElementById('progreso-modal');
            modal.style.display = 'block';
            
            // Guardar el ID de la planta actual
            sessionStorage.setItem('plantaActual', plantaId);
        }

        // Cerrar modal
        document.querySelector('.close').onclick = function() {
            document.getElementById('progreso-modal').style.display = 'none';
        }

        // Manejar el formulario de progreso
        document.getElementById('progreso-form').onsubmit = function(e) {
            e.preventDefault();
            const plantaId = sessionStorage.getItem('plantaActual');
            const fecha = document.getElementById('fecha-inicio').value;
            const notas = document.getElementById('notas').value;
            const estado = document.getElementById('estado').value;

            // Guardar en localStorage
            const progresos = JSON.parse(localStorage.getItem('progresos') || '{}');
            if (!progresos[plantaId]) {
                progresos[plantaId] = [];
            }
            progresos[plantaId].push({
                fecha,
                notas,
                estado
            });
            localStorage.setItem('progresos', JSON.stringify(progresos));

            // Cerrar modal y mostrar mensaje
            document.getElementById('progreso-modal').style.display = 'none';
            alert('Progreso guardado exitosamente');
        }