import React from 'react'
import { Html, Body, Container, Text, Link, Preview , Tailwind } from '@react-email/components'


const WeReceivedYourMsg = () => {
  return (
    <Html>
        <Preview>We have received your message</Preview>
        <Tailwind>
            <Body className='bg-inherit'>
                <Container>
                    <Text className='font-bold text-3xl text-white'>Thank you for contacting us we have received your message</Text>
                    <Link href='https://www.deutchkleen.com'>Deutchkleen</Link>
                    </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}

export default WeReceivedYourMsg