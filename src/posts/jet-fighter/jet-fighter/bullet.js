import { getInEdgeArea } from './utils'

export const BulletState = {
  FLYING: 1,
  EXPLODING: 2,
  DONE: 3,
}

export class Bullet {
  startX
  startY
  x
  y
  angle
  velocity = 1.25
  lifetime = 140 // in frames
  lifetimeFrameCounter = 0
  color
  frameSize
  state = BulletState.FLYING
  explosionFrameCounter = 0
  framesPerExplosionStep = 30

  constructor(x, y, angle, frameSize, color = 'gray') {
    this.startX = x
    this.startY = y
    this.x = x
    this.y = y
    this.angle = angle
    this.color = color
    this.frameSize = frameSize
  }

  step() {
    if (this.state === BulletState.FLYING) {
      // Update position
      this.x += this.velocity * Math.cos(this.angle)
      this.y += this.velocity * Math.sin(this.angle)

      if (this.x >= this.frameSize.width) {
        this.x -= this.frameSize.width
      } else if (this.x < 0) {
        this.x += this.frameSize.width
      }
      if (this.y >= this.frameSize.height) {
        this.y -= this.frameSize.height
      } else if (this.y < 0) {
        this.y += this.frameSize.height
      }

      this.lifetimeFrameCounter += 1

      if (this.lifetimeFrameCounter >= this.lifetime) {
        this.state = BulletState.EXPLODING
      }
    } else if ((this.state = BulletState.EXPLODING)) {
      this.explosionFrameCounter += 1

      if (this.explosionFrameCounter === this.framesPerExplosionStep * 3) {
        this.explosionFrameCounter = 0
        this.state = BulletState.DONE
      }
    }
  }

  draw(ctx) {
    if (this.state === BulletState.DONE) return

    const _draw = (x, y) => {
      const isExploding = this.state === BulletState.EXPLODING
      const isSecondAnimationStep =
        this.explosionFrameCounter % this.framesPerExplosionStep >
        this.framesPerExplosionStep / 2

      ctx.beginPath()
      if (isExploding && !isSecondAnimationStep) {
        ctx.arc(x, y, 1.5, 0, Math.PI * 2)
      } else {
        ctx.arc(x, y, 1, 0, Math.PI * 2)
      }
      ctx.fillStyle = this.color
      ctx.strokeStyle = this.color

      if (isExploding && !isSecondAnimationStep) {
        ctx.stroke()
      } else {
        ctx.fill()
      }
    }

    _draw(this.x, this.y)
    const { width, height } = this.frameSize
    const inEdgeArea = getInEdgeArea(this.x, this.y, 1.5, this.frameSize)
    if (inEdgeArea.top) _draw(this.x, this.y + height)
    if (inEdgeArea.left) _draw(this.x + width, this.y)
    if (inEdgeArea.right) _draw(this.x - width, this.y)
    if (inEdgeArea.bottom) _draw(this.x, this.y - height)
  }
}
