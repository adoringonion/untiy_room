import { Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';
import { supabaseClient } from '../../../utils/supabaseClient';

type GameURL = {
  loaderURL: string;
  frameworkURL: string;
  dataURL: string;
  wasmURL: string;
};
const GamePage: NextPage = () => {
  const { query, isReady } = useRouter();
  const { id } = query;
  const [gameURL, setGameURL] = useState<GameURL | null>(null);
  const [unityContext, setUnityContext] = useState<UnityContext | null>(null);

  const getGameFiles = async (id: string) => {
    const loaderURL = supabaseClient.storage.from('games').getPublicUrl(`${id}/loader.js`);
    const frameworkURL = supabaseClient.storage.from('games').getPublicUrl(`${id}/framework.js`);
    const dataURL = supabaseClient.storage.from('games').getPublicUrl(`${id}/data`);
    const wasmURL = supabaseClient.storage.from('games').getPublicUrl(`${id}/wasm`);

    const error = loaderURL.error || frameworkURL.error || dataURL.error || wasmURL.error;

    if (error) {
      alert(`ゲームファイルの取得に失敗しました ${error}`);
      return;
    }

    const url: GameURL = {
      loaderURL: loaderURL.publicURL as string,
      frameworkURL: frameworkURL.publicURL as string,
      dataURL: dataURL.publicURL as string,
      wasmURL: wasmURL.publicURL as string,
    };

    console.log(url);

    setGameURL(url);
  };

  const loadUnity = () => {
    if (gameURL) {
      const unityContext = new UnityContext({
        loaderUrl: gameURL.loaderURL,
        frameworkUrl: gameURL.frameworkURL,
        dataUrl: gameURL.dataURL,
        codeUrl: gameURL.wasmURL,
      });
      setUnityContext(unityContext);
    }
  };

  useEffect(() => {
    if (isReady && id && !gameURL) {
      getGameFiles(id as string);
    }
      loadUnity();
  }, [gameURL, isReady, id]);

  return unityContext ? (
    <Flex justify={'center'} align={'center'}>
      <Unity unityContext={unityContext} />
    </Flex>
  ) : (
    <Flex justify={'center'} align={'center'}>
      <p>Loading...</p>
    </Flex>
  );
};

export default GamePage;
