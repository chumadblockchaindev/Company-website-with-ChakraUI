'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from 'react-icons/fc'

interface CardProps {
  heading: string
  description: string
  icon: ReactElement
  href: string
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Learn more
        </Button>
      </Stack>
    </Box>
  )
}

export default function Features() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
        Excellence in Production & Manufacturing
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
        At DEUTCHKLEEN, we pride ourselves on being a leader in the production and manufacturing of premium goods and services. Our commitment to quality, innovation, and customer satisfaction drives everything we do. Explore our wide range of high-quality products designed to meet your needs across various industries and applications.
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'STFLUX PAINTS'}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={'Discover the exceptional quality of Steflux Paints, offering a range of colors and finishes that provide superior coverage and.'}
            href={'#'}
          />
          <Card
            heading={'Perfumes'}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={' Indulge in our luxurious perfumes, crafted with care to offer long-lasting, exquisite fragrances that suit every personality and occasion..'}
            href={'#'}
          />
          <Card
            heading={'Shea Butter'}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={'Our organic shea butter is a natural, nourishing moisturizer perfect for all skin types. Experience the richness and rejuvenation of our pure, unrefined shea butter.'}
            href={'#'}
          />
          <Card
            heading={'Hair Cream'}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={'Keep your hair healthy and vibrant with our specially formulated hair creams. Designed to nourish and strengthen, our hair cream is suitable for all hair types.'}
            href={'#'}
          />
          <Card
            heading={'Increte Flooring'}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={'Transform your floors with our high-quality increte flooring solutions. Durable and stylish, our increte flooring adds beauty and longevity to any space.'}
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
  )
}