import React from 'react'
import { Html, Body, Container, Text, Link, Preview } from '@react-email/components'

const WelcomeTrmplate = ({ name }: { name: string }) => {
  return (
    <Html>
        <Preview>Welcome abroad!</Preview>
        <Body>
            <Container>
                <Text>Hello World {name}</Text>
                <Link href='https://google.com'>Google</Link>
            </Container>
        </Body>
    </Html>
  )
}

export default WelcomeTrmplate