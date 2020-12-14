let size = 50

let dots = [
    {
        x: 100,
        y: 200,
        speedX: Math.random(3),
        speedY: Math.random(3),
        score: getRandomInt(4) + 1
    },
    {
        x: 200,
        y: 300,
        speedX: Math.random(3),
        speedY: Math.random(3),
        score: getRandomInt(4) + 1
    }
]
let startEl = document.getElementById(`start`)
let answerEl = document.getElementById(`answer`)
let screenEl = document.getElementById(`startScreen`)
let showScoreEl = document.getElementById(`showScore`)

let userScore = 0

function getRandomInt (max) {
    return Math.floor(Math.random() * Math.floor (max));
}


let gameStart = 0

function startGame () {
    gameStart ++
    screenEl.classList.add(`remove`)
    answerEl.classList.remove(`remove`)
    showScoreEl.classList.remove(`remove`)
}

function setup () {
    // if (gameStart > 0) {
        createCanvas(800, 500)
    // } 
    
}

let trigger = 0

function draw () {
    if (gameStart > 0) {
        background (`black`)
        drawDots()
        trigger ++
    }
}

function position () {
    dots.push({x: getRandomInt(200)+300, y: getRandomInt(100)+200, 
    speedX: getRandomInt(4), speedY: getRandomInt(2),
    score: getRandomInt(4) + 1})
}
let pos = 0
let plzWork = 0
function drawDots () {
    for (let i = 0; i < 5; i++) {  // change 5 to random int var later
        position()
        // fill(`white`)
        if (dots[i].score === 1) {
            fill(`white`)
        }
        if (dots[i].score === 2) {
            fill(`yellow`)
        }
        if (dots[i].score === 3) {
            fill(`orange`)
        }
        if (dots[i].score === 4) {
            fill(`red`)
        }
        if (dots[i].score === 5) {
            fill(`green`)
        }

        circle(dots[i].x, dots[i].y, size)

        if (plzWork === 0) {
            dots[i].x = dots[i].x + dots[i].speedX
            dots[i].y = dots[i].y + dots[i].speedY
        }


        if (dots[i].x > 790) {
            clearDots()
            // I did the clear dots so that it would break the function and stop it from going so the user would know they lost
        }

        if (dots[i].x < 10) {
            clearDots()
        }

        if (dots[i].y > 490) {
            clearDots()
        }

        if (dots[i].y < 10) {
            clearDots()
        }
        

        if (trigger === 0) {
            pos = pos + dots[i].score
            console.log(i)
        }
        
}
}



// Filter each and if have something create a new list. If list.length > 0 clear dots

// function addScore () {
//     for (let i = 0; i < dots.length; i++) {
//         pos = 100
//     }
// }

function clearDots() {
    dots = []
    plzWork = 0
}

// let answerTimes = 0

function giveAnswer () {
    plzWork = 1
    let response = prompt(`Enter your answer #`)
    console.log(`response is ${response}`)
    response = parseInt(response, 10)
    console.log(`pos is ${pos}`)
    if (response === pos) {
            alert(`Good job!`)
            setTimeout (clearDots, 1000) 
            userScore += pos
            pos = 0
            trigger = 0
            console.log(pos)
    } else {
        alert(`Wrong! Game over! Refresh the page to try again.`)
    }
}

startEl,addEventListener(`click`, startGame)
answerEl.addEventListener(`click`, giveAnswer)

console.log(`pos is ${pos}`)