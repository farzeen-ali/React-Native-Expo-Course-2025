import { View, Text, Button } from 'react-native'
import React from 'react'
import { useCounterStore } from './zustand/store/counterStore'

const Zustand = () => {
    const { count, increment, decrement } = useCounterStore();
  return (
    <View className='flex-1 justify-center items-center bg-gray-900'>
      <Text className='text-3xl text-white mb-2'>Zustand</Text>
      <Text className='text-2xl text-white mb-2'>Count: {count}</Text>
      <View className='flex-row gap-2'>
        <Button title='Increment' color='green' onPress={increment} />
        <Button title='Decrement' color='red' onPress={decrement} />
      </View>
    </View>
  )
}

export default Zustand