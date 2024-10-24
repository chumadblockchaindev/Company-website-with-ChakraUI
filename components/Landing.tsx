'use client'

import {
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function Landing() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'orange.400',
                zIndex: -1,
              }}>
              welcome to
            </Text>
            <br />{' '}
            <Text color={'orange.400'} as={'span'}>
              DEUTCHKLEEN
            </Text>{' '}<br />
            <p className='text-xs md:text-sm text-orange-400 italic'>
              We save your money and keep you at the best position
            </p>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            At Deutchkleen we expertise in the production and manufacturing solutions for a diverse range of goods and services, trusted by customers nationwide. Our dedication to excellence is evident in the precision and care we put into every product. Explore our wide range of offerings below
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Link href='/about'>
            <Button
              rounded={'full'}
              bg={'orange.400'}
              color={'white'}
              _hover={{
                bg: 'orange.500',
              }}>
              Learn more
            </Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://i.ibb.co/CnD0TBV/photo-6.jpg'
          }
        />
      </Flex>
    </Stack>
  )
}