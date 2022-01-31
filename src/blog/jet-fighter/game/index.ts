import { Plane, PlaneAction, PlaneState } from "./plane";
import { BulletState } from "./bullet";
import { FrameSize } from "./utils";

export { PlaneAction };
export const BLUE = "#0066ff";
export const DEAD_BLUE = "#003366";
export const RED = "#ff3333";
export const DEAD_RED = "#660000";

export enum GameState {
  START_SCREEN = 0,
  MULTI_PLAYER = 1,
  AI_PLAYER = 2,
}

export class JetFighter {
  planes: Plane[];
  frameSize: FrameSize;
  score: [number, number];
  state: GameState;
  onscorechange: (score: [number, number]) => void;

  constructor(width: number, height: number) {
    this.frameSize = { width, height };
    this.state = GameState.START_SCREEN;
    this.reset();
  }

  reset() {
    this.score = [0, 0];
    this.planes = [
      this.resetPlane(BLUE, DEAD_BLUE),
      this.resetPlane(RED, DEAD_RED),
    ];
  }

  resetPlane(color: string, deadColor: string): Plane {
    const x = Math.random() * this.frameSize.width;
    const y = Math.random() * this.frameSize.height;
    const angle = Math.random() * Math.PI * 2;

    return new Plane(x, y, angle, this.frameSize, color, deadColor);
  }

  step(actions: [PlaneAction, PlaneAction]) {
    if (this.state === GameState.START_SCREEN) {
      return;
    }

    for (let index = 0; index < this.planes.length; index++) {
      const plane = this.planes[index];
      plane.step(actions[index]);
    }

    for (const plane of this.planes) {
      for (const bullet of plane.bullets) {
        for (let index = 0; index < this.planes.length; index++) {
          if (
            this.planes[index].isIntersecting(bullet.x, bullet.y) &&
            this.planes[index].state !== PlaneState.DEAD
          ) {
            this.planes[index].state = PlaneState.DEAD;
            bullet.state = BulletState.EXPLODING;
            // Make a new copy of the array so old !== new
            this.score = [...this.score];
            // Update score of the other player
            this.score[(index + 1) % this.planes.length] += 1;
            if (this.onscorechange) this.onscorechange(this.score);
          }
        }
      }
    }
  }

  drawScore(ctx: CanvasRenderingContext2D) {
    ctx.font =
      "600 12px Inter var, -apple-system, BlinkMacSystemFont, Helvetica, sans-serif";
    ctx.fillStyle = "#ffffff";
    const marginTop = 35;
    const cx = this.frameSize.width / 2;

    ctx.textAlign = "right";
    ctx.fillText(this.score[0].toString(), cx - 30, marginTop);

    ctx.textAlign = "left";
    ctx.fillText(this.score[1].toString(), cx + 30, marginTop);
  }

  drawPlayers(ctx: CanvasRenderingContext2D) {
    ctx.font =
      "600 7px Inter var, -apple-system, BlinkMacSystemFont, Helvetica, sans-serif";
    ctx.fillStyle = "#ffffff";

    ctx.textAlign = "left";
    ctx.fillText("A i", 20, 13);

    ctx.textAlign = "right";
    ctx.fillText("Y O U", this.frameSize.width - 20, 13);

    ctx.fillStyle = BLUE;
    ctx.beginPath();
    ctx.arc(12, 10.5, 3, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = RED;
    ctx.beginPath();
    ctx.arc(this.frameSize.width - 12, 10.5, 3, 0, 2 * Math.PI);
    ctx.fill();
  }

  drawExit(ctx: CanvasRenderingContext2D) {
    ctx.font =
      "600 7px Inter var, -apple-system, BlinkMacSystemFont, Helvetica, sans-serif";
    ctx.fillStyle = "#ffffff";

    const cx = this.frameSize.width / 2;
    ctx.textAlign = "center";
    ctx.fillText("E X I T", cx, 12);
  }

  drawStartScreen(ctx: CanvasRenderingContext2D) {
    ctx.font =
      "600 8px Inter var, -apple-system, BlinkMacSystemFont, Helvetica, sans-serif";

    const cx = this.frameSize.width / 2;
    const cy = this.frameSize.height / 2;

    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.fillText("D E F E A T   T H E   A i", cx, cy - 14);

    ctx.beginPath();
    ctx.fillStyle = RED;
    ctx.fillRect(cx - 50, cy - 3, 100, 16);

    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.fillText("S T A R T   G A M E", cx, cy + 8);
  }

  draw(ctx: CanvasRenderingContext2D): ImageData {
    const { width, height } = this.frameSize;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, width, height);

    if (this.state === GameState.START_SCREEN) {
      const frame = ctx.getImageData(0, 0, width, height);

      this.drawStartScreen(ctx);
      this.drawPlayers(ctx);

      return frame;
    }

    for (const plane of this.planes) {
      plane.draw(ctx);
    }

    const frame = ctx.getImageData(0, 0, width, height);

    this.drawScore(ctx);
    this.drawPlayers(ctx);
    this.drawExit(ctx);

    return frame;
  }
}
