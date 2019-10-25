const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=2f8f1d6b3d749e6f830d591a511f0f8a&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}