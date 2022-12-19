import { graphql } from 'msw';
import getConfig from 'next/config';

import { isSSR } from '../utils/isSSR';

const { publicRuntimeConfig } = getConfig();
const baseUrl = publicRuntimeConfig.baseUrl;
const gql = graphql.link(isSSR ? `${baseUrl}/api/graphql` : '/api/graphql');

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
