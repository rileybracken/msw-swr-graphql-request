import { graphql } from 'msw';
import { isSSR } from '../utils/isSSR';

const handlers = [
  graphql.query('Characters', (req, res, ctx) => {
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
];

export { handlers, graphql };
