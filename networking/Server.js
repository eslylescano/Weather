const  getWeather=async ()=>{
try {
    const key="91ad150202caea1c0860c33dc49f94a0";
    const lat=54.37795;
    const lon=-2.81568;
    const url="https://api.openweathermap.org/data/2.5/onecall";

    let response = await fetch(`${url}?lat=${lat}&lon=${lon}&appid=${key}`);
    let respopnseJson = await response.json();
    return respopnseJson;
} catch (error) {
    console.log(error);
}
}

const  getGeo=async ()=>{

    try {
        const lat=54.37795;
        const lon=-2.81568;
        const url = `https://geocode.xyz/${lat},${lon}?geoit=json`;
        let response = await fetch(url);
        let respopnseJson = await response.json();
        return respopnseJson;
    } catch (error) {
        console.log(error);
    }
}


export {getWeather,getGeo}