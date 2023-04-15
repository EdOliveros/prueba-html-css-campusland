// script llenado dinamico
import {servicios} from "./db.js"

for(let i = 0; i < servicios.length; i++) {

    console.log(servicios[i])
    const tarjetasContainer = document.getElementById('contenedor-tarjetas')

    const tarjeta = document.createElement('div')
    tarjeta.className = 'tarjetas'

    const nombre = document.createElement('p')
    nombre.textContent = servicios[i].name
    tarjeta.appendChild(nombre)

    const imagen = document.createElement('img')
    imagen.src = servicios[i].img
    imagen.alt = ''
    tarjeta.appendChild(imagen)

    const boton = document.createElement('button')
    boton.textContent = 'Ver datos'
    boton.addEventListener('click', () => {
        console.log('Boton pulsado')

    })
    tarjeta.appendChild(boton)

    tarjetasContainer.appendChild(tarjeta)



    var id = `${servicios[i].id}`


    const modalContainer = document.createElement('div');
    modalContainer.id = 'modal-container';
    modalContainer.classList.add('d-none', `${id}`)

    const modalContenido = document.createElement('div');
    modalContenido.className = 'modal';

    modalContainer.appendChild(modalContenido)

    
    const contenido = document.createElement('div')
    contenido.id = 'modal-contenido'
    modalContenido.appendChild(contenido)

    const tabla = document.createElement('table');

    const encabezado = document.createElement('tr');

    const thNombre = document.createElement('th');
    thNombre.textContent = 'Nombre';
    encabezado.appendChild(thNombre);
    const thDetalles = document.createElement('th');
    thDetalles.textContent = 'Detalles';
    encabezado.appendChild(thDetalles);
    const thDisponibilidad = document.createElement('th');
    thDisponibilidad.textContent = 'Disponibilidad';
    encabezado.appendChild(thDisponibilidad);
    tabla.appendChild(encabezado);

    const contenidotr = document.createElement('tr');
    const tdNombre = document.createElement('td');
    tdNombre.textContent = servicios[i].name;
    contenidotr.appendChild(tdNombre);
    const tdDetalles = document.createElement('td');
    tdDetalles.textContent = servicios[i].descripcion;
    contenidotr.appendChild(tdDetalles);
    const tdDisponibilidad = document.createElement('td');
    tdDisponibilidad.textContent = servicios[i].disponibilidad;
    contenidotr.appendChild(tdDisponibilidad);
    tabla.appendChild(contenidotr);


    const botonCerrar = document.createElement('button');
    botonCerrar.textContent = 'Cerrar';
    botonCerrar.addEventListener('click', () => {
        console.log('Boton pulsado')
    });

    contenido.appendChild(tabla);
    contenido.appendChild(botonCerrar);

    tarjetasContainer.appendChild(modalContainer)




    
//     modal.innerHTML += `
//     <div id="modal-container" class="d-none ">
        
//     <div class="modal">
//         <div id="modal-contenido">
//             <table>
//                 <tr>
//                     <th>
//                         Nombre
//                     </th>
//                     <th>
//                         Detalles
//                     </th>
//                     <th>
//                         Disponibilidad
//                     </th>
//                 </tr>
//                 <tr>
//                     <td>
//                         ${servicios[i].name}
//                     </td>
//                     <td>
//                         ${servicios[i].descripcion}
//                     </td>
//                     <td>
//                         ${servicios[i].disponibilidad}
//                     </td>
//                 </tr>
//             </table>
//             <button onclick='render'>Cerrar</button>
//         </div>
//     </div>
// </div> 

//     `
}








// script accordion

