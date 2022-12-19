import { useCustomer } from '../../hooks/use-customer';

const Customer = () => {
  const { data } = useCustomer();

  return (
    <ul>
      {data?.results?.map(({ name, id }: any) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

export default Customer;
