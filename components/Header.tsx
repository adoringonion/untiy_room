import { Session, User } from '@supabase/supabase-js';
import { ReactNode, useEffect, useState } from 'react';
import { supabaseClient } from '../utils/supabaseClient';
import Auth from './Auth';
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
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

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
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setSession(supabaseClient.auth.session());

    supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    getUser();
  }, [session]);

  const getUser = async () => {
    const auser = supabaseClient.auth.user();
    if (auser !== null && user === null) {
      setUser(auser);
      console.log(user);
    }
  };

  const logout = async () => {
    await supabaseClient.auth.signOut();
    setSession(null);
    setUser(null);
  };

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
            <Box>Logo</Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            {!session ? (
              <Auth />
            ) : (
              <Menu>
                <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                  <Avatar size={'md'} src={user?.user_metadata['avatar_url']} />
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Link href={'/user/post-game'}>ゲームを投稿する</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={'/user/games'}>投稿ゲーム一覧</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={'/user/profile'}>プロフィール</Link>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={logout}>ログアウト</MenuItem>
                </MenuList>
              </Menu>
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
