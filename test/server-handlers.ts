import { graphql } from 'msw';

const gql = graphql.link('https://rickandmortyapi.com/graphql');

const handlers = [
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
];

export { handlers };
