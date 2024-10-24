'use client'

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactElement } from 'react'

interface FeatureProps {
  text: string
  iconBg: string
  icon?: ReactElement
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

export default function AboutHero() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Our Story
          </Text>
          <Heading>A production and manufacturing solutions for Paints and Cosmetics as well as Building and Construction services</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
          Deutchkleen Ind Nig Ltd has been in the business of Manufacturing, product development , filling and packaging of a variety of products ranging from paints/ allied products , cosmetics , Laundry products Building and construction services. In DEUTCHKLEEN IND NIG LTD , we are committed to processing product performance . We specialize in meeting the needs of trade decorators and customers who care about their works , demand high quality and believe in the best.                                        we are proud to offer a comprehensive range of high performance products , working hand in hand with customers information and requests to provide innovative and technically advanced products.                                   We also have our team of trained professionals in our fields of endeavor.                      Moreover , adequate machineries have been put in place to ensure prompt delivery of products and services irrespective of the volume of order.                 We will highly appreciate any opportunity given to us to do business with you.           We thank you in anticipation for your patronage .
          </Text>
          {/* <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
            <Feature
              icon={<Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Paint Production'}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Cosmetic Production'}
            />
            <Feature
              icon={<Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'German Floor Installation'}
            />
          </Stack> */}
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://i.ibb.co/j873bPn/photo-7.jpg'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}