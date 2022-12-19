import useSWR from 'swr';
import { gql } from 'graphql-request';

import { request } from '../utils/graphql-request';

const QUERY = gql`
  query Characters {
    characters(filter: { name: "Morty" }) {
      results {
        id
        name
      }
    }
  }
`;

const fetcher = async (query: string) => {
  const { characters } = await request({
    url: '/api/graphql',
    document: query,
  });
  return characters;
};

export const useCharacter = () => {
  return useSWR(QUERY, fetcher, {
    revalidateOnFocus: false,
    onErrorRetry: (error) => console.log(error),
  });
};
