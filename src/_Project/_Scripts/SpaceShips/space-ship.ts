import { Projectile } from "../Projectiles/projectile";
import { Animator } from "../Animation/animator";
import { HTMLElementType } from "../Enums/html-element-types";
import { SPACESHIP_ENGINE_FIRE } from "../Animation/animations";

// animator.start();
// setTimeout(() => {
//   animator.pause();
// }, 2000);
// setTimeout(() => {
//   animator.resume();
// }, 4000);
// setTimeout(() => {
//   animator.setSpeed(50);
// }, 0);

class Position {
  left = 0;
  right = 0;
  top = 0;
  bottom = 0;

  constructor(left: number, right: number, top: number, bottom: number) {
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
  }
}

class SpaceShip {
  private _name: string;
  private _sprite: HTMLImageElement;
  private _velocity: { x: number; y: number };
  private _projectiles: Projectile[];
  private _effects: HTMLImageElement[];
  private _effectOffset: Position[];

  constructor(
    name: string,
    image: HTMLImageElement,
    velocity: { x: number; y: number }
  ) {
    this._name = name;
    this._sprite = image;
    this._velocity = velocity;
    this._sprite.className = "spaceShip";
    this._projectiles = [];
    this._effects = [];
    this._effectOffset = [];
    this.start();
  }

  public start(): void {
    let engineFire = document.createElement(HTMLElementType.img);
    engineFire.className = "engineFire";
    document.body.appendChild(engineFire);
    // this._sprite.appendChild(engineFire);

    this._effects.push(engineFire);
    const engineFireAnimator = new Animator(
      SPACESHIP_ENGINE_FIRE,
      50,
      this._effects[0]
    );

    this._effectOffset.push(new Position(50, 0, 100, 0));

    engineFireAnimator.start();
  }

  public update(): void {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    for (const projectile of this._projectiles) {
      projectile.update();
      if (
        this.isExpired(projectile) ||
        !projectile.isOnScreen(screenWidth, screenHeight)
      ) {
        this.removeProjectile(projectile);
      }
    }
  }

  public updateEffectPositions(): void {
    for (let i = 0; i < this._effectOffset.length; i++) {
      this._effects[i].style.left =
        this._sprite.style.left + this._effectOffset[i].left;
      this._effects[i].style.right =
        this._sprite.style.right + this._effectOffset[i].right;
      this._effects[i].style.top =
        this._sprite.style.top + this._effectOffset[i].top;
      this._effects[i].style.bottom =
        this._sprite.style.bottom + this._effectOffset[i].bottom;
    }
  }

  public isExpired(projectile: Projectile): boolean {
    const timePassed = (Date.now() - projectile.getCreatedAt()) / 1000;

    return timePassed > projectile.getMaxLifetime();
  }

  public fireProjectile(
    damage: number,
    image: HTMLImageElement,
    lifetime: number
  ): void {
    this.addProjectile(new Projectile(damage, image, lifetime, this._name));
  }

  public addProjectile(projectile: Projectile): void {
    this._projectiles.push(projectile);
  }

  public removeProjectile(projectile: Projectile): void {
    const index: number = this._projectiles.indexOf(projectile);

    if (index !== -1) {
      this._projectiles.splice(index, 1);
    }
  }

  public getName(): string {
    return this._name;
  }

  public getProjectiles(): Projectile[] {
    return this._projectiles;
  }

  public getSprite(): HTMLImageElement {
    return this._sprite;
  }

  public setSprite(sprite: HTMLImageElement): void {
    this._sprite = sprite;
  }

  public getVelocity(): { x: number; y: number } {
    return this._velocity;
  }

  public setVelocity(velocity: { x: number; y: number }) {
    this._velocity = velocity;
  }

  public setSpriteLeft(left: number): void {
    this._sprite.style.left = left + "px";
  }

  public setSpriteRight(right: number): void {
    this._sprite.style.right = right + "px";
  }

  public setSpriteTop(top: number): void {
    this._sprite.style.top = top + "px";
  }

  public setSpriteBottom(bottom: number): void {
    this._sprite.style.bottom = bottom + "px";
  }

  public setPositionLeftTop(left: number, top: number) {
    this.setSpriteLeft(left);
    this.setSpriteTop(top);
  }

  public setPositionLeftRightTopBottom(
    left: number,
    right: number,
    top: number,
    bottom: number
  ) {
    this.setSpriteLeft(left);
    this.setSpriteRight(right);
    this.setSpriteTop(top);
    this.setSpriteBottom(bottom);
  }

  public setSizeWidth(width: number): void {
    this._sprite.style.width = width + "px";
  }

  public setSizeHeight(height: number): void {
    this._sprite.style.height = height + "px";
  }

  public setSize(width: number, height: number): void {
    this.setSizeWidth(width);
    this.setSizeHeight(height);
  }

  public getEngineFire(): HTMLImageElement {
    return this._effects[0];
  }
}

export { SpaceShip };
