import { useRef, useCallback, EffectCallback, useEffect } from 'react'

export function isFalsy(value: any) {
  if (typeof value === 'boolean') {
    return !value
  }

  return value === undefined || value === null
}

export function isResolve(arg: any) {
  if (!arg) return true
  if (typeof arg !== 'function') return true
  try {
    arg()
    return true
  } catch (error) {
    return false
  }
}

export const getArg = (arg: any) => {
  if (!arg) return {}
  if (typeof arg !== 'function') return arg
  try {
    return arg()
  } catch (error) {
    return false
  }
}

export function useUnmounted(): () => boolean {
  const unmountedRef = useRef<boolean>(false)
  const isUnmouted = useCallback(() => unmountedRef.current, [])

  useEffect(() => {
    unmountedRef.current = false
    return () => {
      unmountedRef.current = true
    }
  })

  return isUnmouted
}

export const useEffectOnce = (effect: EffectCallback) => {
  useEffect(effect, [])
}

export const useUnmount = (fn: () => any): void => {
  const fnRef = useRef(fn)

  // update the ref each render so if it change the newest callback will be invoked
  fnRef.current = fn

  useEffectOnce(() => () => fnRef.current())
}
