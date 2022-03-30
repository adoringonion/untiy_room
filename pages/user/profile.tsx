import { NextPage } from 'next';
import { requiredAuth } from '../../lib/withAuth';

const ProfilePage: NextPage = () => {
  return (
    <div>
      <h1>Test Page</h1>
    </div>
  );
};

export default ProfilePage;

export const getServerSideProps = requiredAuth;