const dateInicio = document.querySelector('input[name="inicio"]');
const dateFin = document.querySelector('input[name="fin"]');
const matricula = document.querySelector('input[name="matricula"]');
const btnEnviar = document.querySelector("#enviar");
const validarFechas = ()=>{
    const inicio = new Date(dateInicio.value);
    const fin = new Date(dateFin.value);
    if (fin < inicio) return `Error! La fecha de fin no puede ser anterior a la fecha de inicio`;
};
const validarCampos = ()=>{
    if (!matricula.value) {
        console.log("no matricula");
        matricula.addClass("incorrect");
    }
};
// console.log('date inicio',dateInicio);
// console.log('date inicio',dateFin);
// console.log('date inicio',matricula);
console.log("enviar", btnEnviar);
// validar las fechas al introducir un valor
dateInicio.addEventListener("change", validarFechas);
dateFin.addEventListener("change", validarFechas);
// enviar el formulario
btnEnviar.addEventListener("click", ()=>{
    console.log("btn enviar");
    validarCampos();
    alert("button pressed");
});

//# sourceMappingURL=index.8f0c9192.js.map
