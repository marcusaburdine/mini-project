//queries
const startButtonEl = document.querySelector('#start-button')
const continueBtnEl = document.querySelector("#continue-button")
const retreatBtnEl = document.querySelector("#retreat-button")
const battleBtnEl = document.querySelector("#battle-button", "hide")

class Ship {
    constructor(name, firepower, accuracy, hull) {
        this.name = name
        this.firepower = firepower
        this.accuracy = accuracy
        this.hull = hull
    }
}






const player = new Ship('Black-pearl', 5, .7, 20)
console.log(player)

//===================================== START GAME =====================================

startButtonEl.addEventListener('click', (evt) => {
    console.log("We'er starting")
    startButtonEl.classList.toggle("hide")

})



continueBtnEl.addEventListener('click', (evt) => {
    console.log("Continue?")
    continueBtnEl.classList.toggle("hide")
})
//===================================== BATTLE =====================================





for (let i = 0; i < 6; i++) {


    let firepower = Math.ceil(Math.random() * (4 - 2) + 2)
    let accuracy = Math.random() * (.8 - .6) + (.6)
    let hull = Math.ceil(Math.random() * (6 - 3) + 3)

    alienShips = [

        new Ship("Alien-Ship a", firepower, accuracy, hull),
        new Ship("Alien-Ship b", firepower, accuracy, hull),
        new Ship("Alien-Ship c", firepower, accuracy, hull),
        new Ship("Alien-Ship d", firepower, accuracy, hull),
        new Ship("Alien-Ship e", firepower, accuracy, hull),
        new Ship("Alien-Ship f", firepower, accuracy, hull)
    ]
    console.log(alienShips[i])


    function playerAttack() {
        alienShips[i].hull = alienShips[i].hull - player.firepower
        console.log(`The ${player.name} attacked the ${alienShips[i].name} dealing ${player.firepower} damage!
            ${alienShips[i].name} has ${alienShips[i].hull} hull remaining!`)

        return alienShips[i].hull
    }

    function playerDeath() {
        if (player.hull <= 0) {
            console.log(`${player.name} has been defeated!`)
        }
    }

    function alienAttack() {
        player.hull = player.hull - alienShips[i].firepower
        console.log(`The ${alienShips[i].name} attacked the ${player.name} dealing ${alienShips[i].firepower} damage!
            ${player.name} has ${player.hull} hull remaing!`)
        return player.hull
    }

    function alienDeath() {
        if (alienShips.hull <= 0) {
            console.log(`${alienShips[i].name} has been defeated!`)
        }
        else { }
    }


}

battleBtnEl.addEventListener('click', () => {

    accuracyChance = Math.random()
    if (accuracyChance < player.accuracy) {

      playerAttack()
        alienDeath()


    }
    else if (accuracyChance > player.accuracy) {
        alienAttack()
        playerDeath()
    }
    else { }
    console.log(alienShips[0])

})
