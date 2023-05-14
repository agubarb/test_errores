var fecha = new Date();
var hora = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();

var horaActual = hora + ':' + minutos + ':' + segundos;


const etapa = (numero, segundos) =>{
    console.log(`Etapa ${numero} comenzada a las ${horaActual}`);
    return new Promise(resolve => {
        setTimeout(() => {
          console.log(`Etapa ${numero} finalizada a las ${horaActual}`);
          resolve();
        }, segundos);
})
}

const mostrarDatos = async() => {
    etapa1 = await etapa(1, 4000);
    etapa2 = await etapa(2, 4000);
    etapa3 = await etapa(3, 4000);
    etapa4 = await etapa(4, 4000);
    etapa5 = await etapa(5, 4000);
    console.log("Despegue finalizado correctamente")
}

mostrarDatos()