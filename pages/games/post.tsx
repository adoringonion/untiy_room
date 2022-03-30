import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Box,
  Text,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  useColorModeValue,
  Select,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { FieldValue, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useUser } from '../../contexts/UserContext';
import { supabaseClient } from '../../lib/supabaseClient';

const PostGamePage: NextPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const toast = useToast();
  const router = useRouter();

  const onSubmit = async (values: FieldValues) => {
    const user = supabaseClient.auth.user();
    if (user !== null) {
      console.log(values);
      const { data, error } = await supabaseClient.from('games').insert([
        {
          title: values.title,
          game_id: values.id,
          description: values.description,
          play_time: values.playTime,
          user_id: user.id,
        },
      ]);

      if (error) {
        toast({
          title: '投稿に失敗しました',
          status: 'error',
          duration: 4500,
          isClosable: true,
        });
      } else {
        toast({
          title: '投稿に成功しました',
          status: 'success',
          duration: 4500,
          isClosable: true,
        });
        router.push(`/games/${values.id}/edit`);
      }
    }
  };

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'5xl'} textAlign={'center'}>
            Create Your World
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            ゲームを投稿する
          </Text>
          <Text fontSize={'lg'} color={'gray.600'}>
            それはあたらしい世界を創ること
          </Text>
        </Stack>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8} minW={'md'}>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel>ゲームタイトル</FormLabel>
                <Input id='title' type='text' {...register('title')} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>ゲームID</FormLabel>
                <Input id='id' type='text' {...register('id')} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>紹介文</FormLabel>
                <Textarea id='description' {...register('description')} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>想定プレイ時間</FormLabel>
                <Select id='playTime' placeholder='選択してください' {...register('playTime')}>
                  <option value='1'>3分程度</option>
                  <option value='2'>10分程度</option>
                  <option value='3'>30分程度</option>
                  <option value='4'>1時間程度</option>
                  <option value='5'>2時間以上</option>
                </Select>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText='Submitting'
                  size='lg'
                  bg={'blue.400'}
                  color={'white'}
                  type='submit'
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  登録する
                </Button>
              </Stack>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Flex>
  );
};

export default PostGamePage;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const{ user} = await supabaseClient.auth.api.getUserByCookie(req);
  if (user === null) {
    return {
      props: {},
      redirect: {
        destination: '/',
      },
    };
  }

  return {
    props: {},
  };
};
