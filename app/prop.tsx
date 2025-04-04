import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const PropDrillingExample = () => {
  return (
    <View className='flex-1 justify-center items-center mb-2 bg-gray-800'>
      <Text className='text-lg text-white'>Prop Drilling Example</Text>
      <Link href='/parent' className='text-lg text-blue-400'>Go to Parent Component</Link>
    </View>
  )
}

export default PropDrillingExample