import * as citiesApi from "./cities-api";

export async function createCity(cityData) {
    console.log("this is cityData in cities-service", cityData);
    const city = await citiesApi.createCity(cityData);

    return city;
}

export async function deleteCity(cityId){
    return citiesApi.deleteCity(cityId);
}