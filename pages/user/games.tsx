import { NextPage } from 'next';
import { RequiredAuth } from '../../components/RequiredAuth';

const GamesPage: NextPage = () => {
  return (
    <RequiredAuth>
      <h1>Test Page</h1>
    </RequiredAuth>
  );
};

export default GamesPage;
