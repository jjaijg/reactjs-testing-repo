import AppHookReducer from '../../components/AppHookReducer';
import * as reducer from '../../reducers/Reducer1';
import * as action from '../../actions';

import { fireEvent, render, cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('test the reducer and action', () => {
  it('should return the inital state', () => {
    expect(reducer.initialState).toEqual({ stateProp1: false });
  });

  it('should change stateProp1 from false to true', () => {
    expect(reducer.Reducer1(reducer.initialState, action.SUCCESS)).toEqual({
      stateProp1: true,
    });
  });
});

it('should change stateProp1 from false to true on button clicked', () => {
  const { getByText } = render(<AppHookReducer />);

  expect(getByText(/stateprop1 is/i).textContent).toBe('stateprop1 is false');
  fireEvent.click(getByText('Dispatch Success'));
  expect(getByText(/stateprop1 is/i).textContent).toBe('stateprop1 is true');
});
