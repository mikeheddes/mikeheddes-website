import { Bullet, BulletState } from "./bullet";
import { getInEdgeArea, FrameSize } from "./utils";

export enum PlaneAction {
  ROTATE_LEFT = 0,
  ROTATE_RIGHT = 1,
  FIRE = 2,
  NOTHING = 3,
}

export enum PlaneState {
  ALIVE = 0,
  DEAD = 1,
}

export class Plane {
  x: number;
  y: number;
  angle: number;
  borderBox = 3.5;
  velocity = 0.75;
  turnSpeed = 0.025;
  color: string;
  deadColor: string;
  bullets: Bullet[] = [];
  frameSize: FrameSize;
  state = PlaneState.ALIVE;
  deadStepCounter = 0;
  deadStepsPerAnimationLoop = 40;
  canFireStepCountDown = 0;
  fireLimit = 30; // steps

  constructor(
    x: number,
    y: number,
    angle: number,
    frameSize: FrameSize,
    color: string,
    deadColor: string
  ) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.color = color;
    this.deadColor = deadColor;
    this.frameSize = frameSize;
  }

  step(action: PlaneAction) {
    // Handle fire rate limit
    if (action === PlaneAction.FIRE && this.canFireStepCountDown !== 0) {
      action = PlaneAction.NOTHING;
    }

    if (this.canFireStepCountDown !== 0) {
      this.canFireStepCountDown -= 1;
    }

    if (action === PlaneAction.FIRE) {
      // Reset firing wait time.
      this.canFireStepCountDown = this.fireLimit;

      const x = this.x + this.borderBox * Math.cos(this.angle);
      const y = this.y + this.borderBox * Math.sin(this.angle);
      this.bullets.push(new Bullet(x, y, this.angle, this.frameSize));
    }

    for (let index = this.bullets.length - 1; index >= 0; index--) {
      this.bullets[index].step();
      // Remove bullets that have already exploded.
      if (this.bullets[index].state === BulletState.DONE) {
        this.bullets.splice(index, 1);
      }
    }

    // Update dead state
    // reset state if max dead frames is reached
    if (this.state === PlaneState.DEAD) {
      this.deadStepCounter += 1;
      if (this.deadStepCounter >= this.deadStepsPerAnimationLoop * 3) {
        this.deadStepCounter = 0;
        this.state = PlaneState.ALIVE;
      }
    }

    if (action === PlaneAction.NOTHING) {
    }

    if (action === PlaneAction.ROTATE_LEFT) {
      this.angle -= this.turnSpeed;
    } else if (action === PlaneAction.ROTATE_RIGHT) {
      this.angle += this.turnSpeed;
    }

    // Update position
    this.x += this.velocity * Math.cos(this.angle);
    this.y += this.velocity * Math.sin(this.angle);

    if (this.x >= this.frameSize.width) {
      this.x -= this.frameSize.width;
    } else if (this.x < 0) {
      this.x += this.frameSize.width;
    }
    if (this.y >= this.frameSize.height) {
      this.y -= this.frameSize.height;
    } else if (this.y < 0) {
      this.y += this.frameSize.height;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    for (const bullet of this.bullets) {
      bullet.draw(ctx);
    }

    const _draw = (x: number, y: number) => {
      ctx.translate(x, y);
      ctx.rotate(this.angle);

      ctx.beginPath();
      // this.borderBox is based on the max of the
      // following values.
      ctx.moveTo(+3.5, 0);
      ctx.lineTo(-3, +2.5);
      ctx.lineTo(-2, 0);
      ctx.lineTo(-3, -2.5);
      const isDead = this.state === PlaneState.DEAD;
      if (isDead) {
        ctx.fillStyle = this.deadColor;
      } else {
        ctx.fillStyle = this.color;
      }
      ctx.fill();

      ctx.rotate(-this.angle);
      ctx.translate(-x, -y);
    };

    _draw(this.x, this.y);
    const { width, height } = this.frameSize;
    const { x, y } = this;
    const inEdgeArea = getInEdgeArea(x, y, this.borderBox, this.frameSize);
    if (inEdgeArea.top) _draw(x, y + height);
    if (inEdgeArea.left) _draw(x + width, y);
    if (inEdgeArea.right) _draw(x - width, y);
    if (inEdgeArea.bottom) _draw(x, y - height);
  }

  isIntersecting(x: number, y: number): boolean {
    const diff_x = this.x - x;
    const diff_y = this.y - y;
    const dist = Math.sqrt(diff_x ** 2 + diff_y ** 2);
    return dist < this.borderBox;
  }
}
