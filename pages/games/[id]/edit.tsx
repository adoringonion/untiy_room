import {
  Box,
  Button,
  CircularProgress,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { User } from '@supabase/supabase-js';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState, VFC } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { supabaseClient } from '../../../lib/supabaseClient';

type Game = {
  id: string;
  game_id: string;
  title: string;
  description: string;
  play_time: number;
  userId: string;
};

type Props = {
  game: Game;
  user: User;
};

const EditGamePage: NextPage = () => {
  const [game, setGame] = useState<Game | null>(null);
  const { query, isReady } = useRouter();
  const { id } = query;
  const user: User = supabaseClient.auth.user() as User;

  const getGame = async (id: string) => {
    const { data, error } = await supabaseClient.from('games').select('*').filter('game_id', 'eq', id).single();

    if (error) {
      alert(`ゲーム情報の取得に失敗しました ${error}`);
      return;
    }
    setGame(data);
  };

  useEffect(() => {
    if (isReady && id) {
      getGame(id as string);
    }
  }, [isReady, id]);

  return game !== null ? (
    <Tabs>
      <TabList>
        <Tab>基本情報</Tab>
        <Tab>WebGL設定</Tab>
        <Tab>WebGL アップロード</Tab>
      </TabList>

      <TabPanels bg={'gray.50'} minH={'100%'}>
        <TabPanel>
          <GameBasicInfo game={game} user={user} />
        </TabPanel>
        <TabPanel>
          <WebGLSettings game={game} user={user} />
        </TabPanel>
        <TabPanel>
          <WebGLUpload game={game} user={user} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  ) : (
    <Box textAlign='center' py='20'>
      <CircularProgress isIndeterminate size='80px' />
    </Box>
  );
};

const GameBasicInfo: VFC<Props> = (props) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const toast = useToast();
  const game = props.game;

  const onSubmit = async (values: FieldValues) => {
    const user = supabaseClient.auth.user();
    if (user !== null) {
      const { data, error } = await supabaseClient.from('games').upsert([
        {
          id: game?.id,
          title: values.title,
          game_id: game?.game_id,
          description: values.description,
          play_time: values.playTime,
        },
      ]);

      if (error) {
        toast({
          title: '更新に失敗しました',
          description: error.message,
          status: 'error',
          duration: 4500,
          isClosable: true,
        });
      } else {
        toast({
          title: '更新に成功しました',
          status: 'success',
          duration: 4500,
          isClosable: true,
        });
      }
    }
  };

  return (
    <Flex align={'center'} justify={'center'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8} w='2xl'>
          <Stack spacing={4}>
            <Text>{`ゲームID: ${game?.game_id}`}</Text>
            <FormControl isRequired>
              <FormLabel>ゲームタイトル</FormLabel>
              <Input id='title' defaultValue={game.title} type='text' {...register('title')} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>紹介文</FormLabel>
              <Textarea id='description' defaultValue={game.description} {...register('description')} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>想定プレイ時間</FormLabel>
              <Select id='playTime' defaultValue={game.play_time} {...register('playTime')}>
                <option value='1'>3分程度</option>
                <option value='2'>10分程度</option>
                <option value='3'>30分程度</option>
                <option value='4'>1時間程度</option>
                <option value='5'>2時間以上</option>
              </Select>
            </FormControl>
            <Button
              loadingText='Submitting'
              size='md'
              bg={'blue.400'}
              color={'white'}
              type='submit'
              _hover={{
                bg: 'blue.500',
              }}
            >
              更新する
            </Button>
          </Stack>
        </Box>
      </form>
    </Flex>
  );
};

const WebGLUpload: VFC<Props> = (props) => {
  const game = props.game;
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const toast = useToast();

  const onSubmit = async (values: FieldValues) => {
    const loader = await supabaseClient.storage
      .from('games')
      .upload(`${game.game_id}/loader.js`, values.loader[0], { upsert: true});
    const framework = await supabaseClient.storage
      .from('games')
      .upload(`${game.game_id}/framework.js`, values.framework[0], { upsert: true});
    const data = await supabaseClient.storage
      .from('games')
      .upload(`${game.game_id}/data`, values.data[0], { upsert: true});
    const wasm = await supabaseClient.storage
      .from('games')
      .upload(`${game.game_id}/wasm`, values.wasm[0], { upsert: true });

    const error = loader.error || framework.error || data.error || wasm.error;
    if (error) {
      toast({
        title: 'アップロードに失敗しました',
        description: error.message,
        status: 'error',
        duration: 4500,
        isClosable: true,
      });
    } else {
      toast({
        title: 'アップロードに成功しました',
        status: 'success',
        duration: 4500,
        isClosable: true,
      });
    }
  };

  return (
    <Flex align={'center'} justify={'center'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8} w='2xl'>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel>.loader.js ファイル</FormLabel>
              <Input type={'file'} {...register('loader')} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>.framework.js ファイル</FormLabel>
              <Input type={'file'} {...register('framework')} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>.data ファイル</FormLabel>
              <Input type={'file'} {...register('data')} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>.wasm ファイル</FormLabel>
              <Input type={'file'} {...register('wasm')} />
            </FormControl>

            <Button
              loadingText='Submitting'
              size='md'
              bg={'blue.400'}
              color={'white'}
              type='submit'
              _hover={{
                bg: 'blue.500',
              }}
            >
              アップロードする
            </Button>
          </Stack>
        </Box>
      </form>
    </Flex>
  );
};
const WebGLSettings: VFC<Props> = (props) => {
  const game = props.game;

  return (
    <Box>
      <p>two!</p>
    </Box>
  );
};

export default EditGamePage;
