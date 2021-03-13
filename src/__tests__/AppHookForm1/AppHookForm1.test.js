import { render, fireEvent, cleanup } from '@testing-library/react';
import AppHookForm1 from '../../components/AppHookForm1';

afterEach(cleanup);

it('inputing text updates the state', () => {
  const { getByLabelText, getByText } = render(<AppHookForm1 />);

  expect(getByText(/Change/i).textContent).toBe('Change: ');
  fireEvent.change(getByLabelText('Input Text:'), {
    target: {
      value: 'Text',
    },
  });
  expect(getByText(/Change/i).textContent).not.toBe('Change: ');
});

it('submiting a form works correctly', () => {
  const { getByTestId, getByText } = render(<AppHookForm1 />);

  expect(getByText(/Submit Value/i).textContent).toBe('Submit Value: ');

  fireEvent.submit(getByTestId('form'), {
    target: { text1: { value: 'Text' } },
  });

  expect(getByText(/Submit Value/i).textContent).not.toBe('Submit Value: ');
});
