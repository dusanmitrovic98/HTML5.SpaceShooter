import { GetPlayerSprite } from "../../Images/image-asset-importer";
import { initializePlayerDragMovement } from "../Controllers/player-movement";
import { GameState } from "../Enums/game-state";
import { SpaceShip } from "../SpaceShips/space-ship";

class GameManager {
  private _player: SpaceShip;
  private _currentGameState: GameState;

  constructor() {
    this._player = null;
    this._currentGameState = GameState.Menu;
  }

  public onAwake(): void {}

  public onStart(): void {}

  public update(): void {
    this._player.update();
  }

  run() {
    this.initializePlayerContainer();
  }

  public SwitchGameState() {
    switch (this._currentGameState) {
      case GameState.Menu:
        // HandleGameStateMenu();
        break;
      case GameState.Playing:
        // HandleGameStatePlaying();
        break;
      case GameState.Paused:
        // HandleGameStatePaused();
        break;
      case GameState.GameOver:
        // HandleGameStateGameOver();
        break;
    }
  }

  public InstantiatePlayer(
    name: string,
    sprite: HTMLImageElement,
    velocity: { x: number; y: number },
    position: { left: number; right: number; top: number; bottom: number }
  ): SpaceShip {
    this._player = new SpaceShip(name, sprite, velocity);
    // initializePlayerDragMovement(this._player.getSprite());
    this.DrawPlayer(document.body, position);

    return this._player;
  }

  public DrawPlayer(
    parent: HTMLElement,
    position: { left: number; right: number; top: number; bottom: number }
  ): HTMLImageElement {
    // this._player.getSprite().style.position = "absolute";
    this._player.setPositionLeftRightTopBottom(
      position.left,
      position.right,
      position.top,
      position.bottom
    );

    parent.appendChild(this._player.getSprite());

    return this._player.getSprite();
  }

  public initializePlayerContainer() {
    const initialPosition = {
      left: window.innerWidth / 2 - GetPlayerSprite().width / 2,
      right: 0,
      top: window.innerHeight / 2 - GetPlayerSprite().height / 2,
      bottom: 0,
    };

    let player = this.InstantiatePlayer("Player", GetPlayerSprite(), null, {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    });

    let playerContainer = document.querySelector(
      ".playerContainer"
    ) as HTMLElement;
    playerContainer.draggable = true;
    playerContainer.appendChild(player.getSprite());
    playerContainer.appendChild(player.getEngineFire());
    initializePlayerDragMovement(playerContainer);
    playerContainer.style.left = initialPosition.left + "px";
    playerContainer.style.top = initialPosition.top + "px";

    playerContainer.addEventListener("drag", (event) => {
      if (event.movementX > 0) {
        player.getEngineFire().style.top = "75.5px;";
        console.log("Forward");
      } else {
        player.getEngineFire().style.top = "55.5px;";
        console.log("Backwards");
      }
    });
  }

  public getPlayer(): SpaceShip {
    return this._player;
  }
}

export { GameManager };
