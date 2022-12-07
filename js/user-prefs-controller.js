'use strict'

function onInIt() {
    renderUserPrefs()
}

function onSubmit(e) {
    e.preventDefault()
    const userName = document.getElementById('first-name').value
    const bgColor = document.getElementById('bg-color').value
    const txtColor = document.getElementById('txt-color').value
    const zoom = document.getElementById('zoom').value
    const mapCoords = document.getElementById('map-coords').value
    createUser(userName, bgColor, txtColor, zoom, mapCoords)
    onInIt()
}


function renderUserPrefs() {
    let user = getUser()
    let elUserName = document.querySelector('h1 span')
    let elBody = document.querySelector('body')
    if (elUserName) elUserName.innerHTML = user.name
    elBody.style.backgroundColor = user.bgColor
    elBody.style.color = user.txtColor
    renderColorPickers(user)
}

function renderColorPickers(user) {
    let bgColor = document.getElementById('bg-color')
    let txtColor = document.getElementById('txt-color')
    if (bgColor) bgColor.value = user.bgColor
    if (txtColor) txtColor.value = user.txtColor
}

