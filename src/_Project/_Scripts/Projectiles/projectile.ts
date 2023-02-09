class Projectile {
  private _damage: number;
  private _sprite: HTMLImageElement;
  private _position: { x: number; y: number };
  private _velocity: { x: number; y: number };
  private _acceleration: { x: number; y: number };
  private _createdAt: number;
  private _maxLifetime: number;
  private _owner: string;

  constructor(
    damage: number,
    image: HTMLImageElement,
    lifetime: number,
    owner: string
  ) {
    if (damage < 0) throw new Error("Damage should be a positive number.");

    if (!(image instanceof HTMLImageElement))
      throw new Error("Image should be of type HTMLImageElement.");

    if (lifetime <= 0) throw new Error("Lifetime should be a positive number.");

    this._damage = damage;
    this._sprite = image;
    this._velocity = { x: 0, y: 0 };
    this._acceleration = { x: 0, y: -9.8 };
    this._position = { x: 500, y: 500 };
    this._createdAt = Date.now();
    this._maxLifetime = lifetime;
    this._owner = owner;
  }

  public getDamage(): number {
    return this._damage;
  }

  public setDamage(damage: number) {
    this._damage = damage;
  }

  public getSprite(): HTMLImageElement {
    return this._sprite;
  }

  public setSprite(image: HTMLImageElement): void {
    this._sprite = image;
  }

  public getVelocity(): { x: number; y: number } {
    return { ...this._velocity };
  }

  public setVelocity({ x, y }: { x: number; y: number }): void {
    this._velocity = { x, y };
  }

  public getAcceleration(): { x: number; y: number } {
    return { ...this._acceleration };
  }

  public setAcceleration({ x, y }: { x: number; y: number }): void {
    this._acceleration = { x, y };
  }

  public getPosition(): { x: number; y: number } {
    return { ...this._position };
  }

  public setPosition({ x, y }: { x: number; y: number }): void {
    this._position = { x, y };
  }

  public getCreatedAt(): number {
    return this._createdAt;
  }

  public getMaxLifetime(): number {
    return this._maxLifetime;
  }

  public setMaxLifetime(lifetime: number): void {
    this._maxLifetime = lifetime;
  }

  public getOwner(): string {
    return this._owner;
  }

  public setOwner(owner: string): void {
    this._owner = owner;
  }

  public update(): void {
    console.log("update1");
    const timePassed = (Date.now() - this._createdAt) / 1000;

    if (timePassed > this._maxLifetime) {
      console.log("update2");
      return;
    }

    console.log("update3");
    this._velocity.x += this._acceleration.x;
    this._velocity.y += this._acceleration.y;
    this._position.x += this._velocity.x;
    this._position.y += this._velocity.y;
  }

  public isOnScreen(screenWidth: number, screenHeight: number): boolean {
    if (this._position.x < 0 || this._position.x > screenWidth) return false;
    if (this._position.y < 0 || this._position.y > screenHeight) return false;
    return true;
  }
}

export { Projectile };
