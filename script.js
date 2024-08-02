const submitFunction = (event) => {
    const valido = validarFormulario(); //valido sera true o false ya que es lo que retornara el validarFormulario()
    if (!validarFormulario()) {
        event.preventDefault() //hace que se prevenga la actualizacion de la web
    } else {
        event.preventDefault()//hace que se prevenga la actualizacion de la web
        alert(
            'Los datos enviados fueron: \n' +
            'Nombre: ' + document.getElementById('nombre').value + '\n' +
            'Apellido: ' + document.getElementById('apellido').value + '\n' +
            'Documento: ' + document.getElementById('documento').value + '\n' +
            'Email: ' + document.getElementById('email').value + '\n' +
            'Edad: ' + document.getElementById('edad').value + '\n' +
            'Actividad: ' + document.getElementById('actividad').value + '\n' +
            'Nivel de estudio: ' + document.getElementById('nivelEstudio').value + '\n'
        )
    }
}
document.getElementById('formulario').addEventListener('submit', submitFunction); //escucha o detecta el envio del formulario
function validarFormulario() {
    //esto valida los campos de texto
    const camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;
    // el primer campo.id.charAt(0) toma la letra en la posicion 0 del "campo" recorrido por el foreach y la hace uppercase (mayuscula),
    //y el segundo concatena con el slice desde la posicion 1 en adelante el resto de la palabra
    //lo que hace es poner la palabra "error" y concatenarle la id de el campo recorrido con la primera letra en mayuscula y las otras como ya estaban en el id,
    //esto se hace para obtener la id del div que contendra el mensaje de error, ya que la id es errorCampo, es decir: errorNombre, errorApellido, etc
    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1));
        if (campo.value.length == '') {
            mostrarError(errorCampo, '¡Este campo es requerido!');
            validacionCorrecta = false;
        } else if (campo.value.length > 0 && campo.value.length < 3) {
            mostrarError(errorCampo, '¡Este campo debe tener al menos 3 caracteres!');
            validacionCorrecta = false;
        } else {
            ocultarError(errorCampo);
        }
    })
    //esto valida el campo email
    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { //este regex (regular expresion) valida que el formato del mail sea valido
        ocultarError(errorEmail);
    } else {
        mostrarError(errorEmail, '¡Ingrese un correo electrónico válido!')
    }
    //esto valida la edad
    const edad = document.getElementById('edad');
    const errorEdad = document.getElementById('errorEdad');
    if (edad.value < 18) {
        mostrarError(errorEdad, '¡Debes ser mayor de 18 años para registrarte!')
        validacionCorrecta = false;
    } else {
        ocultarError(errorEdad);
    }
    //esto valida la actividad
    const actividad = document.getElementById('actividad');
    const errorActividad = document.getElementById('errorActividad')
    if (actividad.value == '') {
        mostrarError(errorActividad, '¡Por favor seleccione una actividad!')
        validacionCorrecta = false;
    } else {
        ocultarError(errorActividad);
    }
    //esto valida el nivel de estudio
    const nivelEstudio = document.getElementById('nivelEstudio');
    const errorNivelEstudio = document.getElementById('errorNivelEstudio');
    if (nivelEstudio.value == '') {
        mostrarError(errorNivelEstudio, '¡Por favor seleccione un nivel de estudio!')
        validacionCorrecta = false;
    } else {
        ocultarError(errorNivelEstudio);
    }
    //esto valida los terminos y condiciones
    const aceptoTerminos = document.getElementById('aceptoTerminos');
    const errorAceptoTerminos = document.getElementById('errorAceptoTerminos');
    if (!aceptoTerminos.checked) {
        mostrarError(errorAceptoTerminos, '¡Debes aceptar los Términos y condiciones!')
        validacionCorrecta = false;
    } else {
        ocultarError(errorAceptoTerminos);
    }

    return validacionCorrecta; //esto dira si el formulario completo es o no valido
}
const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}
const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = "none";
}