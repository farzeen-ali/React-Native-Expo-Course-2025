import { View, Text, Button } from 'react-native'
import React from 'react'
import { useCounter } from './store/CounterContext'

const ContextAPi = () => {
    const { count, increment, decrement } = useCounter();
  return (
    <View className='flex-1 justify-center items-center bg-gray-900'>
      <Text className='text-white text-2xl mb-2'>Counter: {count}</Text>
      <Button title='Increment' onPress={increment} />
      <Button title='Decrement' onPress={decrement} />
    </View>
  )
}

export default ContextAPi