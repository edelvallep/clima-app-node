const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const encoudeURL = encodeURI(direccion);

    const instance = axios.create({
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=' + encoudeURL,
        headers: { 'X-RapidAPI-Key': '9f7b574f86mshcf6b47f4bde626dp18db4bjsnedb3a25abaaf' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error('No hay resultados para' + direccion);
    }

    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        dir,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}