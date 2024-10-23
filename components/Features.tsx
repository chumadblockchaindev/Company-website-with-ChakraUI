'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactElement } from 'react'

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
      <Stack align={'center'} spacing={2}>
        <Flex
          w={200}
          h={200}
          padding={5}
          align={'center'}
          justify={'center'}
          color={'white'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <Link href={href}>
          <Button variant={'link'} colorScheme={'blue'} size={'sm'} >
            Learn more
          </Button>
        </Link>
      </Stack>
    </Box>
  )
}

export default function Features() {
  return (
    <Box p={4} className='mt-10'>
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
            icon={<Image src='/photo_10.jpg' alt='#'/>}
            description={'Discover the exceptional quality of Steflux Paints, offering a range of colors and finishes that provide superior coverage and.'}
            href='paints'
          />
          <Card
            heading={'WALL PAINTING'}
            icon={<Image src='/photo_51.jpg' alt='#'/>}
            description={'Looking for expert painters? Our team of skilled house painters is here to bring your vision to life with precision and care.'}
            href={'paint#painting'}
          />
          <Card
            heading={'Perfumes'}
            icon={<Image src='/photo_14.jpg' alt='#'/>}
            description={' Indulge in our luxurious perfumes, crafted with care to offer long-lasting, exquisite fragrances that suit every personality and occasion..'}
            href={'cosmetic'}
          />
          <Card
            heading={'Shea Butter'}
            icon={<Image src='/photo_21.jpg' alt='#'/>}
            description={'Our organic shea butter is a natural, nourishing moisturizer perfect for all skin types. Experience the richness and rejuvenation of our pure, unrefined shea butter.'}
            href={'cosmetics'}
          />
          <Card
            heading={'Skin Cream'}
            icon={<Image src='/photo_202.jpg' alt='#'/>}
            description={'Keep your skin healthy and vibrant with our specially formulated skin creams. Designed to nourish and strengthen, our skin cream is suitable for all skin types.'}
            href={'cosmetics'}
          />
          <Card
            heading={'Increte Flooring'}
            icon={<Image src='/photo_13.jpg' alt='#'/>}
            description={'Transform your floors with our high-quality increte flooring solutions. Durable and stylish, our increte flooring adds beauty and longevity to any space.'}
            href={'germanfloor'}
          />
        </Flex>
      </Container>
    </Box>
  )
}