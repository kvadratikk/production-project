type Mods = Record<string, boolean | string>

export function classNames(cls: string | string[], mods: Mods = {}): string {
  if (typeof cls === 'string') {
    cls = [cls]
  }

  return [
    ...cls.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => value)
      .map(([className]) => className),
  ].join(' ')
}
