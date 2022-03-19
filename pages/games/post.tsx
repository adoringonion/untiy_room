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

const PostGamePage: NextPage = () => {

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
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8} minW={'md'}>
          <Stack spacing={4}>
            <FormControl id='gameTitle' isRequired>
              <FormLabel>ゲームタイトル</FormLabel>
              <Input type='text' />
            </FormControl>
            <FormControl id='gameId' isRequired>
              <FormLabel>ゲームID</FormLabel>
              <Input type='text' />
            </FormControl>
            <FormControl id='description' isRequired>
              <FormLabel>紹介文</FormLabel>
              <Textarea />
            </FormControl>
            <FormControl id='playTime' isRequired>
              <FormLabel>想定プレイ時間</FormLabel>
              <Select id='playTime' placeholder='選択してください'>
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
                _hover={{
                  bg: 'blue.500',
                }}
              >
                登録する
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default PostGamePage;
