//version 1.0
function efecto() {
    const efectos = ["bounce","flash","pulse","rubberBand","shakeX","shakeY","headShake","swing","tada",
    "wobble","jello","heartBeat","backInDown","backInLeft","backInRight","bounceIn","bounceInDown","bounceInLeft",
    "bounceInRight","fadeIn","fadeInDown","fadeInLeft","fadeInRight","fadeInUp","fadeInBottomLeft","fadeInBottomRight",
    "fadeInTopLeft","fadeInTopRight","flip","flipInX","flipInY","lightSpeedInRight","lightSpeedInLeft","rotateIn",
    "rotateInDownLeft","rotateInDownRight","rotateInUpLeft","rotateInUpRight","jackInTheBox","rollIn","zoomIn",
    "zoomInDown","zoomInLeft","zoomInRight","slideInDown","slideInLeft","slideInRight"];
    let x = Math.random();
    x = x * 47;
    x = Math.floor(x);
    return efectos[x];
}

function validar(formId) {
    const encuesta = document.getElementById(formId);
    event.preventDefault(); //Para prevenir que se envie el formulario

    let nombre = encuesta.nombre.value;
    if (nombre=="") {
        alert("Ingrese su nombre.");
        return;
    }

    let apellido = encuesta.apellido.value;
    if (apellido=="") {
        alert("Ingrese su apellido.");
        return;
    }

    let edad = encuesta.edad.value;
    edad = Math.floor(edad);
    if (edad<1 || edad>150) {
        alert("Ingrese su edad correctamente.");
        return;
    }

    let nacionalidad = encuesta.nacionalidad.value;
    if (nacionalidad=="") {
        alert("Ingrese su nacionalidad.");
        return;
    }

    let correo = encuesta.correo.value;
    let x = 1;
    let longcorreo = correo.length;
    if (correo=="") {
        alert("Ingrese un e-mail válido.");
        return;
    }
    for (let i of correo) {
        if (i=="@") {
            let arroba = (correo.indexOf("@"))+2;
            let punto = correo.indexOf(".",arroba);
            if (x==1 || punto<0) {
                alert("Ingrese un e-mail válido.");
                return;
            } else {
                alert("Gracias por participar!");
                document.location.href="index.html";
                return;
            }
        } else {
            if (x==longcorreo) {
                alert("Ingrese un e-mail válido.");
                return;
            }
        }
        x += 1;
    }
}