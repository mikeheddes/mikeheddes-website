import { Plane, PlaneAction, PlaneState } from './plane'
import { BulletState } from './bullet'
import { useJetFighterUserController } from './controls'

export { PlaneAction, useJetFighterUserController }
export const BLUE = '#0066ff'
export const RED = '#ff3333'

export class JetFighter {
  score = [0, 0]
  planes
  frameSize
  onscorechange

  constructor(width, height) {
    this.frameSize = { width, height }
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
            // Update score of the other player
            this.score[(index + 1) % this.planes.length] += 1
            // Make a new copy of the array so old === new = false
            this.score = [...this.score]
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
    ctx.clearRect(0, 0, this.frameSize.width, this.frameSize.height)
    for (const plane of this.planes) {
      plane.draw(ctx)
    }

    this.drawScore(ctx)
  }
}