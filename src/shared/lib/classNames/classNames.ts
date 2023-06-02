import { wrapInArray } from '../wrapInArray/wrapInArray';

type Mods = Record<string, boolean | string>;

export const classNames = (cls: string | string[], mods: Mods = {}) => {
  const arrayCls = wrapInArray(cls);

  return [
    ...arrayCls.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => value)
      .map(([className]) => className),
  ].join(' ');
};
