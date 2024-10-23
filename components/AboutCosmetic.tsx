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

export default function AboutCosmetic() {
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
              High Quality Cosmetic Products
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
              We produce high quality cosmetic products ranging from quality skin care products, to preservatives,
              to wood preservatives, etc<br />
              We take our time to produce products that would stand the test of time and keeping our customers returning and demanding for more.
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
          heading={'Perfumes'}
          text={'Experience luxury with our uniquely crafted perfumes, combining the finest ingredients to create captivating scents for every occasion.'}
        />
        <Feature
          heading={'Shea Butter'}
          text={'Our organic shea butter is enriched with vitamins to nourish and hydrate the skin, perfect for both personal and cosmetic uses.'}
        />
        <Feature
          heading={'Hair Cream'}
          text={'Nourish and protect your hair with our specially formulated hair creams, designed to provide shine, moisture, and manageability.'}
        />
        <Feature
          heading={'Hair Grower or Hair Fertilizer'}
          text={'Looking to enhance hair growth? Our hair fertilizer is enriched with essential nutrients to promote healthy, strong, and vibrant hair growth.'}
        />
        <Feature
          heading={'Winter Body Jelly'}
          text={'Stay moisturized even in the harshest winter conditions with our winter body jelly, designed to lock in moisture and protect the skin from drying out.'}
        />
        <Feature
          heading={'Harmattan Body Cream'}
          text={'Perfect for the dry, windy Harmattan season, our body cream provides deep hydration and soothes dry, cracked skin.'}
        />
        <Feature
          heading={'Wood Preservatives'}
          text={'Protect your woodwork with our specialized wood preservatives, designed to prevent decay, rot, and insect damage, ensuring longevity.'}
        />
        <Feature
          heading={'Aftershave'}
          text={'Stay fresh and smooth with our refreshing aftershave, formulated to soothe the skin and leave you feeling invigorated after every shave.'}
        />
      </Grid>
    </Box>
  )
}