import { NextPage } from 'next';
import { RequiredAuth } from '../../components/RequiredAuth';

const ProfilePage: NextPage = () => {
  return (
    <RequiredAuth>
      <h1>Test Page</h1>
    </RequiredAuth>
  );
};

export default ProfilePage;
