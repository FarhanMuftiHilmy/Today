import React from 'react'
import Card from '../Components/Card'
import { BiLike, BiDislike } from 'react-icons/bi'
import Boo from '../Audio/boo.mp3'
import Applause from '../Audio/applause.mp3'
import { Button, Center, Text, Heading, VStack, Flex } from '@chakra-ui/react'
import { Howl, Howler } from 'howler'
import moment from 'moment' 

const audio = [
  {sound: Boo, label: <BiDislike/>},
  {sound: Applause, label: <BiLike/>}
]

function SoundPlay(src) {
  const sound = new Howl({
    src
  })
  sound.play()
}

function RenderButtonSound() {
  return audio.map((soundObj, index) => {
    return (
        <Button key={index} onClick={() => SoundPlay(soundObj.sound)} mr={4}>
          {soundObj.label}
        </Button>
    )
  })
}

function Home() {
  const property = {
    tidings: "How's it going? ",
  }
  return (
    <div className='home'>
        <Text fontSize={'4xl'} fontWeight={600} color={'gray.500'} align="center" mt={8}>
          {moment().format('dddd')} {moment().format('LLL')}
        </Text>
        <Card/> 
        <VStack mt={6}>
          <Heading fontSize={'2xl'} fontFamily={'body'}  mb={8} >
            {property.tidings}
          </Heading>
          <Flex>
            {RenderButtonSound()}
          </Flex>
        </VStack>        
    </div>
  )
}

export default Home