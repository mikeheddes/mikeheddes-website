import { Plane, PlaneAction, PlaneState } from './plane'
import { BulletState } from './bullet'

export { PlaneAction }
export const BLUE = '#0066ff'
export const DEAD_BLUE = '#003366'
export const RED = '#ff3333'
export const DEAD_RED = '#660000'

export const GameState = {
  START_SCREEN: 0,
  MULTI_PLAYER: 1,
  AI_PLAYER: 2,
}

export class JetFighter {
  planes
  frameSize
  onscorechange

  constructor(width, height) {
    this.frameSize = { width, height }
    this.state = GameState.START_SCREEN
    this.reset()
  }

  reset() {
    this.score = [0, 0]
    this.planes = [
      this.resetPlane(BLUE, DEAD_BLUE),
      this.resetPlane(RED, DEAD_RED),
    ]
  }

  resetPlane(color, deadColor) {
    const x = Math.random() * this.frameSize.width
    const y = Math.random() * this.frameSize.height
    const angle = Math.random() * Math.PI * 2
    return new Plane(x, y, angle, this.frameSize, color, deadColor)
  }

  step(actions) {
    if (this.state === GameState.START_SCREEN) {
      return
    }

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

  drawExit(ctx) {
    ctx.font =
      '600 7px Inter var, -apple-system, BlinkMacSystemFont, Helvetica, sans-serif'
    ctx.fillStyle = '#ffffff'

    ctx.textAlign = 'left'
    ctx.fillText('E X I T', 10, 15)
  }

  drawStartScreen(ctx) {
    ctx.font =
      '600 8px Inter var, -apple-system, BlinkMacSystemFont, Helvetica, sans-serif'
    ctx.fillStyle = '#ffffff'

    ctx.textAlign = 'center'
    const x = this.frameSize.width / 2
    const y = this.frameSize.height / 2
    ctx.fillText('S E L E C T   M O D E', x, y - 10)

    ctx.beginPath()
    ctx.fillStyle = BLUE
    ctx.fillRect(x - 75, y, 70, 15)

    ctx.beginPath()
    ctx.fillStyle = RED
    ctx.fillRect(x + 5, y, 70, 15)

    ctx.fillStyle = '#ffffff'
    ctx.textAlign = 'center'
    ctx.fillText('A I', x - 40, y + 10)
    ctx.fillText('D U A L', x + 40, y + 10)
  }

  draw(ctx) {
    const { width, height } = this.frameSize
    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, width, height)

    if (this.state === GameState.START_SCREEN) {
      this.drawStartScreen(ctx)
      const frame = ctx.getImageData(0, 0, width, height)
      return frame
    }

    for (const plane of this.planes) {
      plane.draw(ctx)
    }

    const frame = ctx.getImageData(0, 0, width, height)

    this.drawScore(ctx)
    this.drawExit(ctx)

    return frame
  }
}
