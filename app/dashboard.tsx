import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

interface User{
    username: string
}

const Dashboard = () => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            const storedUser = await AsyncStorage.getItem("user");
            const storedToken = await SecureStore.getItemAsync("authToken");

            if(storedUser){
                setUser(JSON.parse(storedUser));
            }
            if(storedToken){
                setToken(storedToken);
            }
        }
        fetchData();
    }, []);

    const handleLogout = async () => {
        await AsyncStorage.removeItem("user");
        await SecureStore.deleteItemAsync("authToken");

        router.push("/");
    }
  return (
    <View className='flex-1 items-center justify-center bg-slate-900 p-4'>
      <Text className='text-white text-2xl mb-4'>Dashboard</Text>
      {
        user ? (
            <View>
                <Text className='text-lg text-white'>Username: {user.username}!</Text>
                <Text className='text-lg text-white'>Token: {token || "No Token Found"}</Text>
                <TouchableOpacity className='bg-red-500 px-6 py-3 rounded-lg' onPress={handleLogout}>
                        <Text className='text-white text-lg'>Logout</Text>
                </TouchableOpacity>
            </View>
        ) : (
            <Text className='text-gray-500'>Loading!!!!</Text>
        )
      }
    </View>
  )
}

export default Dashboard