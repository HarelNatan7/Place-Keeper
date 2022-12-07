'use strict'

const STORAGE_KEY = 'userDB'

function createUser(name, bgColor, txtColor, zoom, mapCoords) {
    let user = {
        name,
        bgColor,
        txtColor,
        zoom,
        mapCoords
    }
    saveToStorage('userDB', user)
}

function getUser() {
    const user = loadFromStorage('userDB')
    return user
}