type Mods = Record<string, boolean | string>;

export function classNames(cls: string | string[], mods: Mods = {}): string {
  const arrayCls = typeof cls === 'string' ? [cls] : cls;

  return [
    ...arrayCls.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => value)
      .map(([className]) => className),
  ].join(' ');
}
