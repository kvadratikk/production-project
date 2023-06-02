import { isString } from '../isString/isString';

export const wrapInArray = (value: string | string[]) => (isString(value) ? [value] : value);
