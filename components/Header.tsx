import { ReactNode, useEffect } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { sessionAtom } from '../lib/authProvider';
import { supabaseClient } from '../lib/supabaseClient';
import { useAtom } from 'jotai';
import router from 'next/router';
import NextLink from 'next/link';

const Links = ['新着フリーゲーム', '人気ランキング', 'ゲームジャム'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [session, setSession] = useAtom(sessionAtom);

  const tryLogin = async () => {
    await supabaseClient.auth.signIn({
      provider: 'twitter',
    });
  };

  const logout = async () => {
    await supabaseClient.auth.signOut();
    router.push('/');
  };

  useEffect(() => {
    const { data } = supabaseClient.auth.onAuthStateChange((event, _session) => {
      console.log('change', event, _session);
      setSession(_session);
    });

    return () => {
      data?.unsubscribe();
    };
  }, []);

  return (
    <>
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'20px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <NextLink href='/'>
                <Image src='/logo.png' alt='logo' />
              </NextLink>
            </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            {!session ? (
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  tryLogin();
                }}
                variant={'solid'}
                colorScheme={'teal'}
                size={'sm'}
                mr={4}
              >
                {'Twitterログイン'}
              </Button>
            ) : (
              <Flex alignItems={'center'}>
                <Button variant={'solid'} colorScheme={'blue'} size={'sm'} mr={4}>
                  <NextLink href='/games/post' passHref>
                    <Link>ゲームを投稿する</Link>
                  </NextLink>
                </Button>
                <Menu>
                  <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                    <Avatar size={'md'} src={session.user?.user_metadata['avatar_url']} />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <NextLink href='/user/games' passHref>
                        <Link>投稿ゲーム一覧</Link>
                      </NextLink>
                    </MenuItem>
                    <MenuItem>
                      <NextLink href='/user/profile' passHref>
                        <Link>プロフィール</Link>
                      </NextLink>
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem onClick={logout}>ログアウト</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
