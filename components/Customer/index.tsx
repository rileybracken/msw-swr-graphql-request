import { useCharacter } from '../../hooks/use-character';

const Customer = () => {
  const { data } = useCharacter();

  return data?.results ? (
    <ul>
      {data.results.map(({ name, id }: any) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  ) : (
    <span>No data found</span>
  );
};

export default Customer;
