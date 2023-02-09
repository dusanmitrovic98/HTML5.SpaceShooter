import { GameManager } from "./_Project/_Scripts/_Managers/game-manager";
import "./style.css";
import { Projectile } from "./_Project/_Scripts/Projectiles/projectile";
import {
  GetBackgroundSprite,
  GetLaserSprite,
} from "./_Project/Images/image-asset-importer";
import { HTMLElementType } from "./_Project/_Scripts/Enums/html-element-types";

export namespace Game {
  export let gameManager: GameManager = new GameManager();
}

Game.gameManager.run();
let background = GetBackgroundSprite();
background.className = "background";
document.body.appendChild(background);
let playerContainer = Game.gameManager.getPlayer().getSprite().parentElement;
// let background = document.createElement(HTMLElementType.div);
// background.className = "background";
// document.body.appendChild(background);
let cannon = document.createElement(HTMLElementType.div);
cannon.className = "cannon";
// playerContainer.appendChild(cannon);
document.body.appendChild(cannon);

setInterval(function () {
  let projectileImage = GetLaserSprite();
  let projectile = new Projectile(50, projectileImage, 1000, "playerContainer");
  projectile.getSprite().className = "projectile";
  cannon.appendChild(projectileImage);
  Game.gameManager.getPlayer().addProjectile(projectile);
}, 1000);

// let container = document.createElement(HTMLElementType.div);
// container.style.width = "1000px";
// container.style.height = "1000px";
// // container.style.top = "200px";
// container.style.backgroundColor = "red";
// container.style.opacity = "0.5";
// document.body.appendChild(container);

// function spawnSquares(interval: number, distance: number) {
//   function spawnSquare() {
//   //   let leftValue = 500;
//   //   let topValue = playerContainer.style.top;
//   //   console.log(playerContainer.style.top);
//   //   let redSquare = document.createElement("img");
//   //   redSquare.src = GetLaserSprite().src;
//   //   redSquare.style.position = "absolute";
//   //   // redSquare.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
//   //   redSquare.style.left = leftValue + "px";
//   //   // redSquare.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
//   //   redSquare.style.top = topValue + "px";
//   //   container.appendChild(redSquare);

//   //   let pos = topValue;
//   //   setInterval(function () {
//   //     if (pos < 0) container.removeChild(redSquare);
//   //     else {
//   //       pos--;
//   //       redSquare.style.top = pos + "px";
//   //     }
//   //   }, 5);
//   // }

//   setInterval(spawnSquare, interval);
// }

// spawnSquares(1000, 1000);
