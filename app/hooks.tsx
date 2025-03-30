import { View, Text, Button } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'expo-router'

const Hooks = () => {
    const [count, setCount] = useState(0);
    const router = useRouter();

    useEffect(() => {
        console.log("Component Mounted!");

        return () => {
            console.log('Component Unmounted')
        }
    }, []);

    // component updated
    useEffect(() => {
        console.log('Count Updated: ', count);
    }, [count])
  return (
    <View className='flex-1 justify-center items-center bg-white'>
      <Text className='text-2xl font-bold text-black'>Hooks</Text>
      <Text className='text-xl mt-2'>Count: {count} </Text>
      <Button title='Increment' onPress={() => setCount(count + 1)} />
        <Button title='Go to Home' onPress={() => router.push("/")} /> 
    </View>
  )
}

export default Hooks