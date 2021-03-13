import { render, waitFor, cleanup } from '@testing-library/react';
import AppAxios from '../../components/AppAxios';

import axiosMock from 'axios';

afterEach(cleanup);

it('Async axios works', async () => {
  axiosMock.get.mockResolvedValue({ data: { title: 'some title' } });
  const url = 'https://jsonplaceholder.typicode.com/posts/1';
  const { getByText, getByTestId } = render(<AppAxios url={url} />);

  expect(getByText(/...Loading/i).textContent).toBe('...Loading');

  const resolvedEl = await waitFor(() => getByTestId('title'));

  expect(resolvedEl.textContent).toBe('some title');

  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(url);
});
