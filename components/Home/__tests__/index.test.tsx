import { render, screen, waitFor } from '@testing-library/react';

import Home from '../index';

// jest.mock('node-fetch');

describe('test', () => {
  it('should run', async () => {
    render(<Home />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/morty smith/i)).toBeInTheDocument();
      expect(screen.getByText(/alien morty/i)).toBeInTheDocument();
    });
  });
});
