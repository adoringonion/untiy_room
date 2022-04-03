import { Box, Center, Heading, Stack, useColorModeValue, Text, Image } from '@chakra-ui/react';
import { Game } from '../../types/game';

type GameCardProps = {
  title : string;
  thumbnailURL : string | null | undefined;
  slug : string;
  author : string;
};


export const GameCard = (props : GameCardProps) => {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'lg'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${props.thumbnailURL})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}
        >
          <Image rounded={'lg'} height={230} width={282} objectFit={'cover'} src={props.thumbnailURL ? props.thumbnailURL : ''} />
        </Box>
        <Stack pt={10} align={'center'}>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {props.title}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              {props.author}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};
