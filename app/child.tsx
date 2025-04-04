import { View, Text } from 'react-native'
import React from 'react'
import GrandChild from './grandChild'

const Child = ({ message } : {message : string}) => {
  return (
    <View className='flex-1 justify-center items-center mb-2 bg-gray-800'>
      <Text className='text-lg text-white'>Child Component</Text>
      <GrandChild message={message} />
    </View>
  )
}

export default Child