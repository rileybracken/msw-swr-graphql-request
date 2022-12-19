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
    'https://rickandmortyapi.com/graphql',
    query,
  );
  return characters;
};

export const useCustomer = () => {
  return useSWR(QUERY, fetcher, {
    revalidateOnFocus: false,
  });
};
