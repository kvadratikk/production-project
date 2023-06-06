import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter', () => {
  const initialState = { counter: { value: 10 } };
  test('render Counter', () => {
    componentRender(<Counter />, { initialState });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('increment', () => {
    componentRender(<Counter />, { initialState });
    userEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('decrement', () => {
    componentRender(<Counter />, { initialState });
    userEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
