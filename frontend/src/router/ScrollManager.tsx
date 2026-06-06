import { useEffect, useLayoutEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

const scrollPositions = new Map<string, number>()

export function ScrollManager() {
  const location = useLocation()
  const navigationType = useNavigationType()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useLayoutEffect(() => {
    const locationKey = location.key
    const frameId = window.requestAnimationFrame(() => {
      if (navigationType === 'POP') {
        window.scrollTo({ top: scrollPositions.get(locationKey) ?? 0, left: 0, behavior: 'auto' })
        return
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      scrollPositions.set(locationKey, window.scrollY)
    }
  }, [location.key, navigationType])

  return null
}
