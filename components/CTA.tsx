'use client'

import {
  Box,
  VStack,
  Button,
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

export default function CTA() {
  return (
    <Box as={Container} maxW="7xl" mt={14} p={4}>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(1, 1fr)',
          md: 'repeat(1, 1fr)',
        }}
        gap={4}>
        <GridItem colSpan={1}>
          <VStack alignItems="center" spacing="20px">
            <chakra.h2 fontSize="3xl" fontWeight="700" textAlign="center">
              Would you like our service?
            </chakra.h2>
            <Link href='https://wa.me/+2348146713420' isExternal>
                <Button colorScheme="green" size="md">
                Chat us on Whatsapp
                </Button>
            </Link>
          </VStack>
        </GridItem>
      </Grid>
      <Divider mt={12} mb={12} />
    </Box>
  )
}