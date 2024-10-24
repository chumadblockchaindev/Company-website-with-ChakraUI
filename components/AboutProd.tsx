'use client'

import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  Link,
} from '@chakra-ui/react'

interface FeatureProps {
  heading: string
  text: string
}

const Feature = ({ heading, text }: FeatureProps) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600">
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  )
}

export default function AboutProd() {
  return (
    <Box as={Container} maxW="7xl" mt={14} p={4}>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
        gap={4}>
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="20px">
            <chakra.h2 fontSize="3xl" fontWeight="700">
              High Quality Paint
            </chakra.h2>
            <Link href='https://wa.me/+2348033819122' isExternal>
              <Button colorScheme="green" size="md">
                Chat on Whatsapp
              </Button>
            </Link>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <chakra.p>             
              Durability and resistance are at the heart in our production of paint, engineered to withstand harsh environmental factors while maintaining a perfect finish. Our paints is designed to deliver superior coverage, long-lasting color, and a flawless finish for both residential and commercial projects.
            </chakra.p>
          </Flex>
        </GridItem>
      </Grid>
      <Divider mt={12} mb={12} />
      <h1 className='p-4 text-2xl font-semibold md:text-3xl'>Our Products</h1>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        gap={{ base: '8', sm: '12', md: '16' }}>
        <Feature
          heading={'Emulsion Paints'}
          text={'Our premium line of paints is designed to deliver superior coverage, long-lasting color, and a flawless finish for both residential and commercial projects.'}
        />
        <Feature
          heading={'Marine Paints'}
          text={'Durability and resistance are at the heart of our marine paints, engineered to withstand harsh marine environments while maintaining a perfect finish.'}
        />
        <Feature
          heading={'Screeding Paint'}
          text={'Achieve a smooth, perfect surface for all your building needs with our screeding paints, providing excellent coverage and durability.'}
        />
        <Feature
          heading={'Thinner'}
          text={'Our high-quality thinners ensure a smooth and even application for all your painting projects, making them a must-have for professionals and DIY enthusiasts alike.'}
        />
        <Feature
          heading={'House Painters'}
          text={'Looking for expert painters? Our team of skilled house painters is here to bring your vision to life with precision and care.'}
        />
        <Feature
          heading={'Wood Preservatives'}
          text={'Protect your woodwork with our specialized wood preservatives, designed to prevent decay, rot, and insect damage, ensuring longevity.'}
        />
      </Grid>
    </Box>
  )
}