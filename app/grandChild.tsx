import { View, Text } from 'react-native'
import React from 'react'

const GrandChild = ({message} : {message:string}) => {
  return (
    <View className='flex-1 justify-center items-center mb-2 bg-gray-800'>
      <Text className='text-lg text-white'>Grand Child Component</Text>
      <Text className='text-lg text-blue-700'>{message}</Text>
    </View>
  )
}

export default GrandChild