const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obener el clima',
        demand: true
    }
}).argv;

//lugar.getLugarLatLng(argv.direccion).then(console.log);
//clima.getClima(40.750000, -74.000000).then(console.log);

const getInfo = async(direccion) => {

    try {
        const coordes = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coordes.lat, coordes.lng);
        return `El clima de ${coordes.dir} es de ${temp}`
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);