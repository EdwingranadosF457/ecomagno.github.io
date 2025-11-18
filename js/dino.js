var sueloX = 0;
var fededinoPosX = 42;
var fededinoPosY = 22;
var velocidadSuelo = 4;
var velocidadDino = 3;
var contenedor = document.querySelector("#federeco-game-container .contenedor");
var fededino = document.querySelector("#federeco-game-container .fededino");
var fededinoImage = document.querySelector("#federeco-game-container #fededino-image");
var suelo = document.querySelector("#federeco-game-container .suelo");
var texscore = document.querySelector("#federeco-game-container .score");
var lastTime = 0;
var isJumping = false;

var isGameOver = false;
var cactusSpawnTime = 1500;
var lastCactusTime = 0;
var cactusArray = [];

var score = 0;
var scoreToIncreaseSpeed = 200;

var highScore = 0;
var texHighScore = document.querySelector("#federeco-game-container .high-score");

var gameOverScreen = document.querySelector("#federeco-game-container #game-over-screen");
var restartButton = document.querySelector("#federeco-game-container #restart-button");

function update(timestamp) {
    if (isGameOver) {
        return;
    }

    var deltaTime = (timestamp - lastTime) / 1000;
    lastTime = timestamp;

    score += 0.1;
    texscore.textContent = Math.floor(score);

    if (Math.floor(score) > 0 && Math.floor(score) % 200 === 0) {
        if (Math.floor(score) === scoreToIncreaseSpeed) {
            velocidadSuelo += 0.2;
            console.log("Velocidad aumentada a: " + velocidadSuelo);
            scoreToIncreaseSpeed += 200;
        }
    }

    moverSuelo(deltaTime);
    generarCactus(timestamp);
    moverCactus();
    revisarColisiones();

    requestAnimationFrame(update);
}

function moverSuelo(deltaTime) {
    sueloX += velocidadSuelo;
    suelo.style.left = -(sueloX % contenedor.clientWidth) + "px";
}

function jump() {
    if (isJumping) return;
    isJumping = true;
    fededino.classList.add('saltando');

    fededino.addEventListener('animationend', () => {
        fededino.classList.remove('saltando');
        isJumping = false;
    }, { once: true });
}

function generarCactus(timestamp) {
    if (timestamp - lastCactusTime > cactusSpawnTime) {
        var newCactus = document.createElement('div');
        newCactus.classList.add('cactus');

        if (Math.random() > 0.5) {
            newCactus.classList.add('cactus-1');
        } else {
            newCactus.classList.add('cactus-2');
        }

        newCactus.style.right = '-200px';
        contenedor.appendChild(newCactus);
        cactusArray.push(newCactus);
        lastCactusTime = timestamp;
    }
}

function moverCactus() {
    for (var i = 0; i < cactusArray.length; i++) {
        var cactus = cactusArray[i];
        var currentRight = parseInt(cactus.style.right, 10);
        cactus.style.right = (currentRight + velocidadSuelo) + 'px';

        if (currentRight > contenedor.clientWidth) {
            cactus.remove();
            cactusArray.splice(i, 1);
            i--;
        }
    }
}

function revisarColisiones() {
    var dinoRect = fededino.getBoundingClientRect();
    for (var i = 0; i < cactusArray.length; i++) {
        var cactus = cactusArray[i];
        var cactusRect = cactus.getBoundingClientRect();

        var margin = 20; 
        if (
            dinoRect.right - margin > cactusRect.left &&
            dinoRect.left + margin < cactusRect.right &&
            dinoRect.bottom - margin > cactusRect.top &&
            dinoRect.top + margin < cactusRect.bottom
        ) {
            gameOver();
            break;
        }
    }
}

function gameOver() {
    isGameOver = true;
    gameOverScreen.style.display = 'flex';
    console.log("¡GAME OVER!");
    
    if (Math.floor(score) > highScore) {
        highScore = Math.floor(score);
        texHighScore.textContent = "RECORD: " + highScore;
    }
}

function restartGame() {
    isGameOver = false;
    score = 0;
    velocidadSuelo = 4;
    scoreToIncreaseSpeed = 200;
    
    gameOverScreen.style.display = 'none';

    while (cactusArray.length > 0) {
        var cactus = cactusArray.pop();
        cactus.remove();
    }

    requestAnimationFrame(update);
}

document.addEventListener('keydown', (e) => {
    if (isGameOver && (e.code === 'Space' || e.key === ' ')) {
        restartGame();
    } else if (!isGameOver && (e.code === 'Space' || e.key === ' ')) {
        jump();
    }
});

restartButton.addEventListener('click', restartGame);

requestAnimationFrame(update);