import { isString } from '../isString/isString';

type Value = string | Array<string | undefined>;

export const wrapInArray = (value: Value) => (isString(value) ? [value] : value.filter(isString));
