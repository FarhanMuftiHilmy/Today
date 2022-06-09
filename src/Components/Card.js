import React from 'react'
import { Center, Box, Heading, Text, Spacer, Flex } from '@chakra-ui/react'

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'

import {
  Editable,
  EditableInput,
  EditablePreview,
} from "@chakra-ui/react";

function Card() {
  const property = {
    title: 'Your Life Statistic',
    name: "Name: ",
    age: "Age: ",
    location: 'Location :',
    role: "Role :",
    quote: "Your Daily Quote"
  }

  return (      
      <Center mt={8}>
        <Box maxW={'445px'} w={'full'} as='h1' rounded={'lg'} boxShadow={'xl'} p={4} color='black' bgGradient='linear(red.100 0%, orange.100 25%, yellow.100 50%)'>
          <Heading fontSize={'2xl'} fontFamily={'body'}  mb={8} >
            {property.title}
          </Heading>
            <Flex mb={4}>
              <Text fontWeight={600} color={'gray.500'} >
                {property.name}
              </Text>
              <Spacer />
              <Editable defaultValue='Farhan Mufti Hilmy'>
                <EditablePreview />
                <EditableInput />
              </Editable>             
            </Flex>
            <Flex mb={4}>
              <Text fontWeight={600} color={'gray.500'}>
                {property.location}
              </Text>
              <Spacer />
              <Editable defaultValue='Yogyakarta'>
                <EditablePreview />
                <EditableInput />
              </Editable>
            </Flex>
            <Flex mb={4}>
              <Text fontWeight={600} color={'gray.500'}>
                {property.role}
              </Text>
              <Spacer />
              <Editable defaultValue='Student'>
                <EditablePreview />
                <EditableInput />
              </Editable>
            </Flex>
            <Flex mb={4}>
              <Text fontWeight={600} color={'gray.500'}>
                {property.age}
              </Text>
              <Spacer />
              <NumberInput size='sm' maxW={32} defaultValue={20}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Flex>
            <Text fontSize={'lg'} fontWeight="semibold">
              {property.quote}
            </Text>
            <Editable defaultValue='Life is a habit'>
              <EditablePreview fontStyle={'italic'} />
              <EditableInput />
            </Editable>
        </Box>
      </Center>
  )
}

export default Card