import { screen, waitFor } from '@testing-library/react';

import Home from '../index';
import { server, graphql } from '../../../test/server';
import { render } from '../../../test/utils';

describe('test', () => {
  it('should run', async () => {
    render(<Home />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/morty smith/i)).toBeInTheDocument();
      expect(screen.getByText(/alien morty/i)).toBeInTheDocument();
    });
  });

  it('fail gracefully', async () => {
    server.use(
      graphql.query('Characters', (req, res, ctx) =>
        res(
          ctx.data({
            errors: [
              {
                message: 'Syntax Error: Expected Name, found }',
                locations: [
                  {
                    line: 3,
                    column: 1,
                  },
                ],
                extensions: {
                  code: 'GRAPHQL_PARSE_FAILED',
                },
              },
            ],
          }),
        ),
      ),
    );

    render(<Home />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/no data found/i)).toBeInTheDocument();
    });
  });
});
