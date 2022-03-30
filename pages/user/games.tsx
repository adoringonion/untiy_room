import { NextPage } from 'next';
import { requiredAuth } from '../../lib/withAuth';

const GamesPage: NextPage = () => {
  return (
    <div>
      <h1>Test Page</h1>
    </div>
  );
};

export default GamesPage;

export const getServerSideProps = requiredAuth;