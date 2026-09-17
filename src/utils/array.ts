export function isArrayAndEmpty(value: unknown): value is [] {
  return Array.isArray(value) && value.length === 0
}

export function isArrayAndHasElements(value: unknown): value is unknown[] {
  return Array.isArray(value) && value.length > 0
}
