import { Plane, PlaneAction, PlaneState } from './plane'
import { BulletState } from './bullet'

export { PlaneAction }
export const BLUE = '#0066ff'
export const RED = '#ff3333'

export class JetFighter {
  planes
  frameSize
  onscorechange

  constructor(width, height) {
    this.frameSize = { width, height }
    this.planes = [this.resetPlane(BLUE), this.resetPlane(RED)]
    this.score = [0, 0]
  }

  reset() {
    this.score = [0, 0]
    this.planes = [this.resetPlane(BLUE), this.resetPlane(RED)]
  }

  resetPlane(color) {
    const x = Math.random() * this.frameSize.width
    const y = Math.random() * this.frameSize.height
    const angle = Math.random() * Math.PI * 2
    return new Plane(x, y, angle, this.frameSize, color)
  }

  step(actions) {
    for (let index = 0; index < this.planes.length; index++) {
      const plane = this.planes[index]
      plane.step(actions[index])
    }

    for (const plane of this.planes) {
      for (const bullet of plane.bullets) {
        for (let index = 0; index < this.planes.length; index++) {
          if (
            this.planes[index].isIntersecting(bullet.x, bullet.y) &&
            this.planes[index].state !== PlaneState.DEAD
          ) {
            this.planes[index].state = PlaneState.DEAD
            bullet.state = BulletState.EXPLODING
            // Make a new copy of the array so old !== new
            this.score = [...this.score]
            // Update score of the other player
            this.score[(index + 1) % this.planes.length] += 1
            if (this.onscorechange) this.onscorechange(this.score)
          }
        }
      }
    }
  }

  drawScore(ctx) {
    ctx.font =
      '600 12px Inter var, -apple-system, BlinkMacSystemFont, Helvetica, sans-serif'
    ctx.fillStyle = '#ffffff'
    const marginTop = 30

    {
      ctx.textAlign = 'right'
      const x = this.frameSize.width / 2 - 30
      ctx.fillText(this.score[0].toString(), x, marginTop)
    }

    {
      ctx.textAlign = 'left'
      const x = this.frameSize.width / 2 + 30
      ctx.fillText(this.score[1].toString(), x, marginTop)
    }
  }

  draw(ctx) {
    const { width, height } = this.frameSize
    ctx.clearRect(0, 0, width, height)

    for (const plane of this.planes) {
      plane.draw(ctx)
    }

    const frame = ctx.getImageData(0, 0, width, height)

    this.drawScore(ctx)

    return frame
  }
}
