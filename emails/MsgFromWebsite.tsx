import React from 'react'
import { Html, Body, Container, Text, Link, Preview } from '@react-email/components'

const MsgFromWebsite = ({ name, email, message }: { name: string, email: string, message: string }) => {
  return (
    <Html>
        <Preview>Message from Website</Preview>
        <Body className='bg-inherit'>
            <Container>
                <Text>Message from customer from {name}, {email}</Text>
                <Text className='font-bold text-3xl text-white'>{message}</Text>
                <Link href='https://www.deutchkleen.com'>Deutchkleen</Link>
            </Container>
        </Body>
    </Html>
  )
}

export default MsgFromWebsite