import { useCharacter } from '../../hooks/use-character';

import Customer from '../Customer';

const Home = () => {
  const { mutate, isLoading } = useCharacter();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={() => mutate()}>Load</button>

      <div>
        <Customer />
      </div>
    </div>
  );
};

export default Home;
