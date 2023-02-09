import { HTMLElementType } from "../_Scripts/Enums/html-element-types";

function GetPlayerSprite() {
  let sprite = "./space-ship.png";
  let imageElement = document.createElement(HTMLElementType.img);
  imageElement.src = sprite;
  console.log(imageElement.src);

  return imageElement;
}

function GetLaserSprite(): HTMLImageElement {
  let laserSprite = "./laserRed02.png";
  let imageElement = document.createElement(HTMLElementType.img);
  imageElement.src = laserSprite;

  return imageElement;
}

function GetBackgroundSprite(): HTMLImageElement {
  let laserSprite = "./purple.png";
  let imageElement = document.createElement(HTMLElementType.img);
  imageElement.src = laserSprite;
  // console.log(imageElement.src);

  return imageElement;
}

export { GetPlayerSprite, GetLaserSprite, GetBackgroundSprite };
