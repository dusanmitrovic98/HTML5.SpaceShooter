// const canvas = document.getElementById("game-canvas");
// const ctx = canvas.getContext("2d");
// const shootSound = document.getElementById("shoot-sound");
// const explosionSound = document.getElementById("explosion-sound");
// const scoreElement = document.getElementById("score");
// const startButton = document.getElementById("start-button");
// const pauseButton = document.getElementById("pause-button");
// const resetButton = document.getElementById("reset-button");

// let score = 0;
// let gameInterval;
// var enemies = [];

// const ship = {
//   x: canvas.width / 2,
//   y: canvas.height - 20,
//   width: 20,
//   height: 20,
//   isDragging: false,
//   projectiles: [],
//   color: "red",
// };

// canvas.addEventListener("mousedown", (event) => {
//   if (
//     event.offsetX >= ship.x &&
//     event.offsetX <= ship.x + ship.width &&
//     event.offsetY >= ship.y &&
//     event.offsetY <= ship.y + ship.height
//   ) {
//     ship.isDragging = true;
//   }
// });

// canvas.addEventListener("mousemove", (event) => {
//   if (ship.isDragging) {
//     ship.x = event.offsetX - ship.width / 2;
//     ship.y = event.offsetY - ship.height / 2;
//   }
// });

// canvas.addEventListener("mouseup", (event) => {
//   ship.isDragging = false;
// });
// //

// const createProjectile = () => {
//   const projectile = {
//     x: ship.x + ship.width / 2,
//     y: ship.y,
//     width: 5,
//     height: 5,
//     color: "red",
//   };
//   ship.projectiles.push(projectile);
//   shootSound.volume = 0.1;
//   shootSound.currentTime = 0;
//   shootSound.play();
// };

// const createEnemy = () => {
//   const enemy = {
//     x: Math.random() * canvas.width,
//     y: 0,
//     width: 20,
//     height: 20,
//     color: "red",
//   };
//   enemies.push(enemy);
// };

// const update = () => {
//   // Move projectiles
//   for (const projectile of ship.projectiles) {
//     console.log(ship.projectiles.length);
//     projectile.y -= 0.1;
//   }
//   // Remove off-screen projectiles
//   ship.projectiles = ship.projectiles.filter((p) => p.y >= 0);

//   // Move enemies
//   for (const enemy of enemies) {
//     enemy.y += 5;
//   }
//   // Remove off-screen enemies
//   enemies = enemies.filter((e) => e.y + e.height <= canvas.height);

//   // Check for collisions
//   for (const enemy of enemies) {
//     for (const projectile of ship.projectiles) {
//       if (
//         projectile.x >= enemy.x &&
//         projectile.x <= enemy.x + enemy.width &&
//         projectile.y >= enemy.y &&
//         projectile.y <= enemy.y + enemy.height
//       ) {
//         // Collision occurred
//         explosionSound.volume = 0.7;
//         explosionSound.currentTime = 0;
//         explosionSound.play();
//         score++;
//         scoreElement.textContent = score;
//         enemy.dead = true;
//         projectile.dead = true;
//       }
//     }
//   }
//   // Remove dead enemies and projectiles
//   enemies = enemies.filter((e) => !e.dead);
//   ship.projectiles = ship.projectiles.filter((p) => !p.dead);
// };

// const draw = () => {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   // Draw ship
//   ctx.fillStyle = ship.color;
//   ctx.fillRect(ship.x, ship.y, ship.width, ship.height);

//   // Draw projectiles
//   for (const projectile of ship.projectiles) {
//     ctx.fillStyle = projectile.color;
//     ctx.fillRect(
//       projectile.x,
//       projectile.y,
//       projectile.width,
//       projectile.height
//     );
//   }

//   // Draw enemies
//   for (const enemy of enemies) {
//     ctx.fillStyle = enemy.color;
//     ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
//   }
// };

// const gameLoop = () => {
//   update();
//   draw();
//   gameInterval = requestAnimationFrame(gameLoop);
// };

// const startGame = () => {
//   startButton.setAttribute("disabled", "disabled");
//   pauseButton.removeAttribute("disabled");
//   gameInterval = setInterval(gameLoop, 1000 / 60); // 60 FPS
// };

// const pauseGame = () => {
//   pauseButton.setAttribute("disabled", "disabled");
//   startButton.removeAttribute("disabled");
//   clearInterval(gameInterval);
//   cancelAnimationFrame(gameInterval);
// };

// const resetGame = () => {
//   score = 0;
//   scoreElement.textContent = score;
//   ship.projectiles = [];
//   enemies = [];
//   pauseGame();
// };

// startButton.addEventListener("click", startGame);
// pauseButton.addEventListener("click", pauseGame);
// resetButton.addEventListener("click", resetGame);

// setInterval(createProjectile, 10000); // Ship constantly fires projectiles
// setInterval(createEnemy, 5000); // New enemy spawns every second
