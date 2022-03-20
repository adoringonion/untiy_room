import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { supabaseClient } from '../../../utils/supabaseClient';

type Game = {
  id: string;
  gameId: string;
  title: string;
  description: string;
  playTime: number;
  userId: string;
};

const EditGamePage: NextPage = () => {
  const [game, setGame] = useState<Game | null>(null);
  const { query, isReady } = useRouter();
  const { id } = query;

  const getGame = async (id: string) => {
    const { data, error } = await supabaseClient.from('games').select('*').filter('game_id', 'eq', id).single();

    if (error) {
      alert(`ゲーム情報の取得に失敗しました ${error}`);
      return;
    }

    setGame(data);
  };

  useEffect(() => {
    if (isReady) {
      console.log(id);
      if (id) {
        getGame(id as string);
      }
    }
  }, [isReady, id]);

  return game !== null ? (
    <div>
      <h1>{game.title}</h1>
    </div>
  ) : (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

export default EditGamePage;
