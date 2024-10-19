'use client'

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

// Replace test data with your own
const features = [{
    id: 1,
    title: 'Quality Guaranteed:',
    text: 'We take pride in using the highest quality materials and employing expert craftsmanship in all our products.',
  },
  {
    id: 2,
    title: 'Customer Satisfaction:',
    text: 'Our commitment to customer satisfaction drives us to consistently deliver excellence in both our products and services.',
  },
  {
    id: 1,
    title: 'Innovation:',
    text: 'We stay at the forefront of industry trends and technology to bring you cutting-edge solutions.',
  }]


export default function AboutUs() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Our core values</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
        Our dedication to excellence is evident in the precision and care we put into every product. Our core principles below:
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}