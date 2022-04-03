import { Center, Grid, GridItem, Spinner } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { GameCard } from '../components/games/GameCard';

import { useGetAllGamesQuery } from '../graphql/generated/graphql';

const Home: NextPage = () => {
  const { loading, error, data } = useGetAllGamesQuery();

  if (loading) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  }

  if (error) {
    return <div>Error</div>;
  }

  if (data) {
    return (
      <Grid templateColumns='repeat(4, 1fr)' gap={3}>
        {data.games.map((game) => (
          <GridItem>
            <GameCard title={game.title} slug={game.slug} thumbnailURL={game.thumbnail_url} author='test'></GameCard>
          </GridItem>
        ))}
      </Grid>
    );
  }
};

export default Home;
