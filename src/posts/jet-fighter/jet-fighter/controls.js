import { useCallback, useEffect, useRef } from 'react'

import { PlaneAction } from './plane'
import { removeItem, lastOf } from './utils'

export function useJetFighterUserController(leftKey, rightKey, fireKey) {
  const userActionsRef = useRef([PlaneAction.NOTHING])

  useEffect(() => {
    function setUserAction(event) {
      if (event.repeat) return

      const key = event.key.toLowerCase()
      let userActions = userActionsRef.current
      if (key === leftKey) {
        userActions.push(PlaneAction.ROTATE_LEFT)
      } else if (key === rightKey) {
        userActions.push(PlaneAction.ROTATE_RIGHT)
      } else if (key === fireKey) {
        userActions.push(PlaneAction.FIRE)
      }

      userActionsRef.current = userActions
    }

    function unsetUserAction(event) {
      const key = event.key.toLowerCase()
      let userActions = userActionsRef.current
      if (key === leftKey) {
        userActions = removeItem(userActions, PlaneAction.ROTATE_LEFT)
      } else if (key === rightKey) {
        userActions = removeItem(userActions, PlaneAction.ROTATE_RIGHT)
      } else if (key === fireKey) {
        userActions = removeItem(userActions, PlaneAction.FIRE)
      }

      userActionsRef.current = userActions
    }

    document.addEventListener('keydown', setUserAction)
    document.addEventListener('keyup', unsetUserAction)
    return () => {
      document.removeEventListener('keydown', setUserAction)
      document.removeEventListener('keyup', unsetUserAction)
    }
  }, [leftKey, rightKey, fireKey])

  const getAction = useCallback(() => {
    return lastOf(userActionsRef.current)
  }, [])

  return getAction
}
