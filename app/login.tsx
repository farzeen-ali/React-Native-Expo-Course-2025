import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

const Login = () => {
    const [username, setUsername] = useState('');
    const router = useRouter();

    const handleLogin = async () => {
        const token = "123456";
        const userData = { username };

        await AsyncStorage.setItem("user", JSON.stringify(userData));
        await SecureStore.setItemAsync("authToken", token);

        router.push("/dashboard");
    }

  return (
    <View className='flex-1 items-center justify-center bg-gray-900 p-4'>
      <Text className='text-white text-2xl mb-4'>Login</Text>
      <TextInput
        className='w-full bg-gray-800 text-white px-4 py-2 rounded-md mb-4'
        placeholder='Enter your name'
        placeholderTextColor="#ccc"
        value={username}
        onChangeText={setUsername}
      />
      <TouchableOpacity className='bg-green-500 px-6 py-3 rounded-lg' onPress={handleLogin}>
        <Text className='text-white text-lg'>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login