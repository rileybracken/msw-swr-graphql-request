import {
  render,
  waitForElementToBeRemoved,
  screen,
  waitFor,
} from '@testing-library/react';
import { SWRConfig, Cache } from 'swr';
import { setupServer } from 'msw/node';
import { rest, graphql } from 'msw';

import Home from '../index';

const gql = graphql.link('https://rickandmortyapi.com/graphql');

const server = setupServer(
  gql.query('Characters', (req, res, ctx) => {
    return res(
      ctx.data({
        characters: {
          results: [
            { name: 'Morty Smith', id: 1 },
            { name: 'Alien Morty', id: 2 },
          ],
        },
      }),
    );
  }),
);

describe('test', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should run', async () => {
    render(<Home />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    expect(screen.getByText(/morty smith/i)).toBeInTheDocument();
    expect(screen.getByText(/alien morty/i)).toBeInTheDocument();
  });
});
