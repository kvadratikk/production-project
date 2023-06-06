import { CounterSchema } from '../types/counterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice.test', () => {
  const state: CounterSchema = {
    value: 10,
  };
  test('should decrement', () => {
    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
  });

  test('should increment', () => {
    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
  });

  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
  });
});
