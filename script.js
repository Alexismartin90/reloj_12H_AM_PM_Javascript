function nuevoReloj() {
    let fechaHora = new Date();
    let diaSemanaLetras = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    let diaSemanaNumero = new Date().getDay();
    let diaDelMes = new Date().getDate().toString().padStart(2, "0");
    let mesAño = (new Date().getMonth()+1).toString().padStart(2, "0");
    let añocurso = new Date().getFullYear();
    let horaactual = new Date().getHours().toString().padStart(2, "0");
    let minutosActual = new Date().getMinutes().toString().padStart(2, "0");
    let segundosActual = new Date().getSeconds().toString().padStart(2, "0");
    let periodo;
    if(horaactual >=12){
        periodo = "PM";
    } else {
        periodo = "AM";
    }
    
    if(horaactual === 0) {
        horaactual = 12;
    } else {
        horaactual = horaactual % 12;
    }
    let textoAmostrar = `Hoy es el dia ${diaSemanaLetras[diaSemanaNumero]} ${diaDelMes}/${mesAño}/${añocurso} y son las ${horaactual}:${minutosActual}:${segundosActual} ${periodo}`;
    document.getElementById("reloj").innerHTML = textoAmostrar;
}

nuevoReloj();
setInterval(nuevoReloj, 1000);
