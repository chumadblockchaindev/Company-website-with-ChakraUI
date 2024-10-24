import React, { CSSProperties } from 'react'
import { Html, Body, Container, Text, Link, Preview , Tailwind } from '@react-email/components'

const WelcomeTrmplate = ({ name }: { name: string }) => {
  return (
    <Html>
        <Preview>Welcome abroad!</Preview>
        <Tailwind>
            <Body className='bg-inherit'>
                <Container>
                    <Text className='font-bold text-3xl text-white'>Hello World {name}</Text>
                    <Link href='https://google.com'>Google</Link>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}

export default WelcomeTrmplate