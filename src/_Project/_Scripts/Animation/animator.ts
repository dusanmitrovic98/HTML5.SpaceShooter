class Animator {
  private sprites: string[];
  private duration: number;
  private image: HTMLImageElement;
  private intervalId: number | undefined;
  private currentSpriteIndex = 0;

  constructor(sprites: string[], duration: number, image: HTMLImageElement) {
    this.sprites = sprites;
    this.duration = duration;
    this.image = image;
  }

  public start() {
    this.intervalId = window.setInterval(() => {
      this.image.src = this.sprites[this.currentSpriteIndex];
      this.currentSpriteIndex =
        (this.currentSpriteIndex + 1) % this.sprites.length;
    }, this.duration / this.sprites.length);
  }

  public stop() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
    }
  }

  public pause() {
    this.stop();
  }

  public resume() {
    this.start();
  }

  public setSpeed(speed: number) {
    this.duration = speed;
    if (this.intervalId) {
      this.stop();
      this.start();
    }
  }
}

export { Animator };
