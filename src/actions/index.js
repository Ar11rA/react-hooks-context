import createAction from './creator';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const handleIncrement = createAction(INCREMENT);
export const handleDecrement = createAction(DECREMENT);
