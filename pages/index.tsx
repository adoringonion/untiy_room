import type { NextPage } from 'next';

import { useGetAllGamesQuery } from '../graphql/generated/graphql';

const Home: NextPage = () => {
  const { loading, error, data } = useGetAllGamesQuery();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error {error.message}</p>;
  }

  if (data) {
    return <p>{JSON.stringify(data)} </p>;
  }

  return <p>No data</p>;
};

export default Home;
