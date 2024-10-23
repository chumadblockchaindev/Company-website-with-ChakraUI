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

export default function AboutFlooring() {
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
              Tough Durable Flooring
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
              We Provide our customers a story they would enjoy keeping in mind by giving them the best
              when it comes to incret flooring also known as german floor and 3D flooring. 
              We pay special attention to the environment and give make sure our exceed every expections 
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
          heading={'Increte Flooring'}
          text={'Our increte flooring solutions offer a durable, customizable, and beautiful finish, perfect for both residential and commercial spaces.'}
        />
        <Feature
          heading={'3D Flooring'}
          text={'Transform any space with our stunning 3D flooring solutions, providing an immersive, modern aesthetic that makes a bold statement.'}
        />
      </Grid>
    </Box>
  )
}