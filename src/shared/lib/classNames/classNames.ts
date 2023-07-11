import { wrapInArray } from '../wrapInArray/wrapInArray';

export type Mods = Record<string, boolean | string | undefined>;

type Cls = string | Array<string | undefined>;

export const classNames = (cls: Cls, mods: Mods = {}) => {
  const arrayCls = wrapInArray(cls);

  return [
    ...arrayCls.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => value)
      .map(([className]) => className),
  ].join(' ');
};
