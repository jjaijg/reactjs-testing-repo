import { fireEvent, render, cleanup } from '@testing-library/react';

import App from '../../App';
import AppHookContext from '../../components/AppHookContext';
import Context from '../../context/Context';

afterEach(cleanup);

it('App state updated by child using context', () => {
  const { getByText } = render(
    <App>
      <Context.Provider>
        <AppHookContext />
      </Context.Provider>
    </App>
  );

  expect(getByText(/Some/i).textContent).toBe('Some Text');
  fireEvent.click(getByText('Change Text'));
  expect(getByText(/Some/i).textContent).toBe('Some Other Text');
});
