import { View, Text } from 'react-native'
import React from 'react'
import Child from './child'

const Parent = () => {
    const message: string = "Hello from Parent Component!";
  return (
    <View className='flex-1 justify-center items-center mb-2 bg-gray-800'>
      <Text className='text-lg text-white'>Parent Component</Text>
      <Child message={message} />
    </View>
  )
}

export default Parent