import sendRequest from "./send-request";
// we need a base path that we can use to refer our requests to the location of our routes
const BASE_URL = "/api/cities";

export async function createCity(cityData) {
    return sendRequest(BASE_URL, "POST", cityData);
}

export async function getCities() {
    return sendRequest(BASE_URL);
}

export async function deleteCity(cityId){
    return sendRequest(`${BASE_URL}/${cityId}`, "DELETE")
}