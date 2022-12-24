// Shooting Enemies
function iShoot(enemy) {

        enemy.classList.add("dead");
        hurt();
        deadSong();
        if (!livingEnemies().length) {
                alert("You Win the game!");
                window.location.reload();
        }
};
// Enemies attacks
function enemyAttack(enemy) {
        enemy.classList.add("showing");
        setTimeout(() => {
                enemyShoots(enemy);
        }, 800);
        setTimeout(() => {
                enemy.classList.remove("showing");
        }, 1000);
};

//Enemies shoots you
function enemyShoots(enemy) {
        if (!enemy.classList.contains("dead")) {
                enemy.classList.add("shooting");
                updateHealthPoints(healthPoints - 20);
                fire();
                // hit();
                setTimeout(() => {
                        enemy.classList.remove("shooting");
                }, 200);
        }
};

// Display enemies randomely
function livingEnemies() {

        return document.querySelectorAll(".enemy:not(.dead)");
};
function randomEnemyAttack() {
        var randomEnemyNo = Math.random() * livingEnemies().length;
        randomEnemyNo = Math.floor(randomEnemyNo);
        var enemy = livingEnemies()[randomEnemyNo];
        var startButton = document.querySelector("#startButton");
        startButton.classList.add("dNone");
        var randomDelay = Math.random() * 2000 + 1000;

        setTimeout(() => {
                enemyAttack(enemy);
                randomEnemyAttack();
        }, randomDelay);
};

// initialising point systeme
var healthPoints = 100;
function updateHealthPoints(points) {

        healthPoints = points;
        var healthBar = document.querySelector("#healthBar");
        healthBar.classList.add('losePoints');
        healthBar.style.width = points + "%";
        setTimeout(()=>{
                healthBar.classList.remove('losePoints');
        },1000);
        if (healthPoints < 1) {
                alert("Game Over!");
                // stop();
                gameOver();
                window.location.reload();
        }
};
// play sound on click
let play = function(){document.getElementById("play").play()}
// let stop = function(){document.getElementById("play").pause()}
// hurt song
function hurt() {
        var hurt = document.getElementById("hurt");
        hurt.play();
      };
// dead song
function deadSong() {
        var deadsong = document.getElementById("deadSong");
        deadsong.play();
      };
// Game Over song
function gameOver() {
        var gameOver = document.getElementById("gameOver");
        gameOver.play();
      };
// fire song
function fire() {
        var fire = document.getElementById("fire");
        fire.play();
      };
// hit song
// function hit() {
//         var hit = document.getElementById("hit");
//         hit.play();
//       };