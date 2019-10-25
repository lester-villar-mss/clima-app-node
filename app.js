const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async(dir) => {

    try {

        const city = await lugar.getLugarLatLng(dir);
        const temp = await clima.getClima(city.lat, city.lng);
        return `El clima en ${city.direccion} es de ${temp}`;

    } catch (error) {
        return `No se pudo determinar el clima de ${dir}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);