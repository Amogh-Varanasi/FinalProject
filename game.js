let xs = [100, 200, 300]
let ys = [200, 300, 400]

let dots = [
    {
        x: 100,
        y: 200,
        speedX: Math.random(5),
        speedY: Math.random(5)
    },
    {
        x: 200,
        y: 300,

    }
]

console.log(dots[0])


function getRandomInt (max) {
    return Math.floor(Math.random() * Math.floor (max));
}



function setup () {
    createCanvas(800, 500)
}

function draw () {
    background (0)
    drawDots()
}

function position () {
    dots.push({x: getRandomInt(400)+200, y: getRandomInt(200)+200, 
    speedX: getRandomInt(4), speedY: getRandomInt(4)})


//    dots.x.push(getRandomInt(400)+200)
//    dots.y.push(getRandomInt(200)+200)
//    dots.speedX.push(getRandomInt(5))
   console.log(dots[1])
    // x.push(getRandomInt(400)+200)
    // y.push(getRandomInt(200)+200)
}


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

function drawDots () {
    for (let i = 0; i < 5; i++) {  // change 5 to x.length later
        console.log(`hello`)
        position()
        // setInterval(circle(x[i], y[i], 50), 1000)

        // x[i] = x[i] + speedX + minus
        // y[i] = y[i] + speedY + minus
        // circle(x[i], y[i], 50)
    
        // setInterval(drawDots, 1000)
       // setTimeout(() => {  circle(dots[i].x, dots[i].y, 50); }, 2000); Pauses but circles only appear for a bit once every 2 seconds
        circle(dots[i].x, dots[i].y, 50)
        dots[i].x = dots[i].x + dots[i].speedX
        dots[i].y = dots[i].y + dots[i].speedY

           
    }
}

// make list with points. For loop moving through it to make points. Look at polygon js

// if mouseX, mouseY = ballX, ballY