// to import all named exports we use this syntax
import * as usersApi from './users-api'

export async function signUp(userData) {
    console.log('this is userData in service', userData)
    // Delegate the network request code to the users-api.js API Module
    // which will ultimately return a JSON web Token
    const token = await usersApi.signUp(userData)
    // save the token to local storage
    localStorage.setItem('token', token);
    // we'll return the token that we received from the api
    return getUser()
}

export async function login(credentials) {
    try {
        const token = await usersApi.login(credentials)
        localStorage.setItem('token', token)
        return getUser()
    } catch {
        throw new Error('Bad Credentials')
    }
}

// getToken function - assesses the token in local storage
export function getToken() {
    // getItem, a method of the local storage object
    // returns null if there is no string
    const token = localStorage.getItem('token')
    if (!token) return null

    // obtain the payload of the token
    const payload = JSON.parse(atob(token.split('.')[1]))
    // a JWT's expiration is expressed in seconds, not milliseconds
    if (payload.exp < Date.now() / 1000) {
        // token is expired, remove it from localstorage
        localStorage.removeItem('token')
        return null
    }

    return token
}

// getUser function - parses the data from the token's payload
export function getUser() {
    const token = getToken()

    // if there is a token, return the user in the payload
    return token ? JSON.parse(atob(token.split('.')[1])).user : null
}

export function checkToken(){
    return usersApi.checkToken()
        .then(dateStr => new Date(dateStr))
}

// logout -> deletes the token from our localStorage
export function logOut() {
    localStorage.removeItem('token')
}