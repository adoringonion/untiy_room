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
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { useState } from 'react';
import { FieldValue, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { supabaseClient } from '../../utils/supabaseClient';

const PostGamePage: NextPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

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
        console.error(error);
        alert('投稿に失敗しました');
        return;
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
