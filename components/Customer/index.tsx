import { useCharacter } from '../../hooks/use-character';

const Customer = () => {
  const { data } = useCharacter();

  return (
    <ul>
      {data?.results?.map(({ name, id }: any) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

export default Customer;
