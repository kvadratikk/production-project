import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    expect(classNames(['someClass', 'additionalClass'])).toBe('someClass additionalClass');
  });

  test('with mods', () => {
    expect(classNames(['someClass', 'additionalClass'], { hovered: true, scrollable: false })).toBe(
      'someClass additionalClass hovered',
    );
  });
});
