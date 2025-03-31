import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Category = () => {
    const router = useRouter();
  return (
    <View className='flex-1 items-center justify-center bg-white'>
          <Text className='text-lg font-bold'>Categories</Text>
          <Button title='Go to Product 101' onPress={() => router.push('/101')} />
          <Button title='Go to Product 202' onPress={() => router.push('/202')} />
    </View>
  )
}

export default Category