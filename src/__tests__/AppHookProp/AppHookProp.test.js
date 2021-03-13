import App from '../../App';
import AppHookProp from '../../components/AppHookProp';

import { fireEvent, render, cleanup } from '@testing-library/react';

afterEach(cleanup);

it('text in state changed when button clicked', () => {
  const { getByText } = render(<AppHookProp />);

  expect(getByText(/initial/i).textContent).toBe('initial state');
  fireEvent.click(getByText('State Change Button'));
  expect(getByText(/State changed/i).textContent).toBe('State changed!!!');
});

it('button clicked chnage prop', () => {
  const { getByText } = render(
    <App>
      <AppHookProp />
    </App>
  );

  expect(getByText(/my/i).textContent).toBe('my name');
  fireEvent.click(getByText('Change Name'));
  expect(getByText(/Jai/i).textContent).toBe('Jai');
});
