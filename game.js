let size = 50

let dots = [
    {
        x: 100,
        y: 200,
        speedX: Math.random(5),
        speedY: Math.random(5),
        score: getRandomInt(4) + 1
    },
    {
        x: 200,
        y: 300,
        speedX: Math.random(5),
        speedY: Math.random(5),
        score: getRandomInt(4) + 1
    }
]

console.log(dots[1])


function getRandomInt (max) {
    return Math.floor(Math.random() * Math.floor (max));
}



function setup () {
    createCanvas(800, 500)
}

function draw () {
    background (0)
    // setInterval(drawDots, 1000)
    drawDots()
}
let positionCounter = 0
function position () {
    dots.push({x: getRandomInt(400)+200, y: getRandomInt(200)+200, 
    speedX: getRandomInt(4), speedY: getRandomInt(4),
    score: getRandomInt(4) + 1})
    positionCounter ++
}

position()

function drawDots () {
    for (let i = 0; i < 3; i++) {  // change 5 to x.length later        
        fill(`white`)

        if (currentPointIsCloseToFirst()) {
            fill(`red`)
            dots.shift(); //find different way to delete first item in list
        }

        if (dots[i].score === 1) {
            fill(`green`)
        }
        if (dots[i].score === 2) {
            fill(`yellow`)
        }
        if (dots[i].score === 3) {
            fill(`pink`)
        }
        if (dots[i].score === 4) {
            fill(`purple`)
        }
        if (dots[i].score === 5) {
            fill(`brown`)
        }

        console.log(dots[i].score)

        circle(dots[i].x, dots[i].y, size)
        dots[i].x = dots[i].x + dots[i].speedX
        dots[i].y = dots[i].y + dots[i].speedY

        // console.log(dots.length)
    }
}

function keyPressed () {
    // if (keyCode === 49) {
    //     for (let i = 0; i < dots.length; i ++) {
    //         if (dots[i].score = 1) {
    //             // delete item in list
    //         }
    //     }
    // }

    let dots = dots.filter(dot => {
        return !dot.score === 1
    })
}

function distance(pt1, pt2) {
    
    let deltaX = pt2.x - pt1.x
    let deltaY = pt2.y - pt1.y
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY)
}

function currentPointIsCloseToFirst() {
    return distance({x: mouseX, y: mouseY}, dots[0]) < size
}


// separate function to draw circle. have for loop call it with setinterval

// make list with points. For loop moving through it to make points. Look at polygon js

// if mouseX, mouseY = ballX, ballY