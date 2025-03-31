import { View, Text, TextInput, Button, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const API_URL = "http://192.168.0.22:3000/users";

type User = {
    id: string;
    name: string;
    email: string;
};

const API = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [editingId, setEditingId] = useState<string | null>(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get<User[]>(API_URL);
            setUsers(response.data);
        } catch (error) {
            console.log("Error Fetching Data: ", error);
        }
    };

    const addUser = async () => {
        if(!name || !email) return;
        try {
            const newUser = { id: Date.now().toString(), name, email };
            await axios.post(API_URL, newUser);
            setUsers([...users, newUser]);
            setName("");
            setEmail("");
        } catch (error) {
            console.log("Error adding user data: ", error);
        }
    }

    const updateUser = async () => {
        if(!editingId || !name || !email) return;
        try {
            await axios.put(`${API_URL}/${editingId}`, {name, email});
            setUsers(users.map((user) => (user.id === editingId ? {...user, name, email} : user)));
            setEditingId(null);
            setName("");
            setEmail("");
        } catch (error) {
            console.log("Error updating data: ", error);
        }
    };

    const deleteUser = async (id: string) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            setUsers(users.filter(( user ) => user.id !== id));
        } catch (error) {
            console.log("Error deleting Data: ", error);
        }
    }

  return (
    <View className='p-4'>
      <Text className='text-xl font-bold mb-4'>API Handling</Text>
      <TextInput className='border p-2 mb-2' placeholder='Name' value={name} onChangeText={setName} />
      <TextInput className='border p-2 mb-2' placeholder='Email' value={email} onChangeText={setEmail} keyboardType='email-address' />
      {
        editingId ? (
            <Button title='Update User' onPress={updateUser} />
        ) : 
        (
            <Button title='Add User' onPress={addUser} />
        )
      }
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
            <View className='border py-2 my-2 flex-row justify-between items-center'>
                <View>
                    <Text className='text-lg'>{item.name}</Text>
                    <Text className='text-gray-500'>{item.email}</Text>
                </View>
                <View className='flex-row'>
                    <Button title='Edit' onPress={() => { setEditingId(item.id); setName(item.name); setEmail(item.email)}} />
                    <Button title='Delete' onPress={() => deleteUser(item.id)} />
                </View>
            </View>
        )}
      />
    </View>
  )
}

export default API