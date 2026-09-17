export const ML_STORAGE_KEY_PREFIX = "ml_"

export function mlStorageKey(suffix: string) {
  return `${ML_STORAGE_KEY_PREFIX}${suffix}`
}

export function clearMlLocalStorage() {
  if (typeof window === "undefined") {
    return
  }

  const keysToRemove: string[] = []

  for (let index = 0; index < window.localStorage.length; index += 1) {
    const key = window.localStorage.key(index)

    if (key?.startsWith(ML_STORAGE_KEY_PREFIX)) {
      keysToRemove.push(key)
    }
  }

  for (const key of keysToRemove) {
    window.localStorage.removeItem(key)
  }
}
