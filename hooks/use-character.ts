import useSWR from 'swr';
import { gql, request } from 'graphql-request';

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
  const { characters } = await request(
    // '/api/graphql',
    'https://rickandmortyapi.com/graphql',
    query,
  );
  return characters;
};

export const useCharacter = () => {
  return useSWR(QUERY, fetcher, {
    revalidateOnFocus: false,
  });
};
