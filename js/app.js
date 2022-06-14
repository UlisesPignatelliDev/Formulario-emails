//Variables
const btnEnviar = document.querySelector('#enviar');

//Variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');


eventListerners();
function eventListerners(){
    // cuando la app inicia
    document.addEventListener('DOMContentLoaded', iniciarApp);
    //campos del formulario
    email.addEventListener('blur', validarFormulario); // blur se ejecuta cuando se salis del campo, en tiempo real
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
}
//Funciones

function iniciarApp(){
    btnEnviar.disabled = true; //btn desabilitado
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')
}

// validad el formulario 
function validarFormulario(e){
    
   // console.log(e.target.value); // e.target.value para saber lo que escribe el usuario
    if(e.target.value.length > 0) {
        console.log('si hay algo');
    } else {
        e.target.classList.add('border', 'border-red-500');
    }
}