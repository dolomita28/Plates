const dateInicio = document.querySelector('#inicio');
const dateFin = document.querySelector('#fin');
const matricula = document.querySelector('#matricula');
const btnEnviar = document.querySelector('#enviar');
const btnCerrar = document.querySelector('#cerrar');
const validator = document.querySelector('.validator');


// validar las fechas
const validarFechas = () => {
    const inicio = new Date(dateInicio.value);
    const fin = new Date(dateFin.value);    
    console.log('validar fechas', inicio, fin);

    clearValidador();

    if (fin < inicio) {
        validator.classList.remove('hidden');
        validator.innerHTML = `Error! La fecha Hasta no puede ser anterior a la fecha Desde`;
    }
}

// limpiar el validador
const clearValidador = ()=>{
    [dateInicio,dateFin,matricula].forEach(item => item.classList.remove('incorrect'));
    // ocultar validador
    validator.innerHTML = 'Por favor rellene los campos obligatorios!'
    validator.classList.add('hidden');
}

// validar que los campos han sido rellenados
const validarCampos = () => {
    [dateInicio,dateFin,matricula].forEach(item => {
        if (!item.value )   {    
            item.classList.add('incorrect');    

            validator.classList.remove('hidden');
        }
    })
}

const muestraResultado = (matricula, desde, hasta) => {
    const main = document.querySelector('main');
    main.classList.add('hidden');

    const result = document.querySelector('.result');
    result.classList.remove('hidden');

    const resultInfo = document.querySelector('.result-info');
    resultInfo.innerHTML = `Matrícula <em>4128HLZ</em> correctamente creada desde <em>29/05/2023</em> hasta <em>31/05/2023</em>.`
}

// EVENT LISTENERS
// validar las fechas al introducir un valor
[dateInicio,dateFin].forEach(date => date.addEventListener('change', validarFechas));
// quitar el borde rojo cuando se pone valor en el campo matricula
matricula.addEventListener('change', () => matricula.classList.remove('incorrect'));

// cerrar el formulario resumen
btnCerrar.addEventListener('click', () => {
    const main = document.querySelector('main');
    main.classList.remove('hidden');

    const result = document.querySelector('.result');
    result.classList.add('hidden'); 
})

// enviar el formulario
btnEnviar.addEventListener('click', async () => {
    clearValidador();
    validarCampos();    

    //muestraResultado('','','');
    // enviar formulario
    // const result = await InvocarApiSkiData()
    // if (result === 'OK')
    //     console.log('Mostrar PANEL RESULTADO')
})

// LLAMADA A API SKIDATA

const InvocarApiSkiData = async () => {
    return new Promise((resolve, reject) => {
        doPostApiSkiDate()
        .then(resolve('OK'))
        .catch(reject(err))
    })
}

const doPostApiSkiDate = async () => {
    const url = ``;
    const plate = matricula.value;
    const from = dateInicio.value;
    const to = dateFin.value;

    const bodyRequest = `{
        "Command":"0",
        "licensePlate: ${plate},
        "validbegin": ${from},
        "validend": ${to}
    }`;
    
    try{
        const res = await fetch(url, {
            Method: 'POST',
            Headers: {
              Accept: 'application.json',
              'Content-Type': 'application/json'
            },
            Body: bodyRequest,
            Cache: 'default'
          });
        
        return res;
    }
    catch(err){
        return err;
    }
    
}