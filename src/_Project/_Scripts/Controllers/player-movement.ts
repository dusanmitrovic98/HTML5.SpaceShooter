import { Game } from "../../..";

function initializePlayerDragMovement(image: any) {
  var img: any = image;

  let engineFire = document.querySelector(".engineFire") as HTMLElement;

  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  img.onmousedown = dragMouseDown;

  function dragMouseDown(e: any) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e: any) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    img.style.top = img.offsetTop - pos2 + "px";
    img.style.left = img.offsetLeft - pos1 + "px";

    if (e.movementY < 0) {
      engineFire.style.top = "75.5px";
    } else {
      engineFire.style.top = "55.5px";
    }
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    engineFire.style.top = "55.5px";
  }
}

export { initializePlayerDragMovement };
