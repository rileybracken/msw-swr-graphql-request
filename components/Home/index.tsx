import { useCustomer } from '../../hooks/use-customer';

import Customer from '../Customer';

const Home = () => {
  const { mutate, isLoading } = useCustomer();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={() => mutate()}>Load</button>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Customer />
      </div>
    </div>
  );
};

export default Home;
