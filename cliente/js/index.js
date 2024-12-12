import { uiDrag, generarBaraja } from './uiDrag.js';

document.addEventListener("DOMContentLoaded", () => {
    // Generar las cartas
    generarBaraja();

    // Inicializar la funcionalidad de arrastrar y soltar
    uiDrag.init(".contenedor", ".carta");
});

const Cliente = {
    send: ()=>{
        fetch('http://localhost:3000/api/items', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: 'Nuevo Ítem'
            })
          })
            .then(response => {
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
              return response.json();
            })
            .then(data => {
              console.log('Ítem creado:', data);
            })
            .catch(error => {
              console.error('Error al crear el ítem:', error);
            });
          
    }
}

Cliente.send();