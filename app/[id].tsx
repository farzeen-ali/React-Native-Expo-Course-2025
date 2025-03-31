import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const Product = () => {
    const { id } = useLocalSearchParams();
  return (
    <>
        <Stack.Screen options={{ headerShown: false }} />
        <View className='flex-1 items-center justify-center bg-white'>
            <Text className='text-lg font-bold'>Product: {id}</Text>
        </View>
    </>
  )
}

export default Product