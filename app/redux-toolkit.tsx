import { View, Text, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from './redux/store'
import { decrement, increment } from './redux/slice/counterSlice'

const ReduxToolkitExample = () => {
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch<AppDispatch>();
  return (
    <View className='flex-1 justify-center items-center bg-gray-900'>
      <Text className='text-white text-3xl mb-2'>Redux Toolkit</Text>
      <Text className='text-white text-xl mb-4'>Count: {count}</Text>
      <View className='flex-row gap-2'>
        <Button title='Increment' color='green' onPress={() => dispatch(increment())} />
        <Button title='Decrement' color='red' onPress={() => dispatch(decrement())} />
      </View>
    </View>
  )
}

export default ReduxToolkitExample