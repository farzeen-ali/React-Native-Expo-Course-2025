import { View, Text, Alert, TextInput, Pressable } from 'react-native'
import React from 'react'
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

type FormData = {
    name: string;
    email: string;
}

const schema = yup.object({
    name: yup
        .string()
        .min(6, "Name must be at least 6 characters")
        .matches(/^[A-Za-z]+$/)
        .required("Name is required!"),
    email: yup.string().email("Invalid Email Format").required("Email is required!")
}).required();

const FormValidation = () => {
    const {
        control, handleSubmit, formState : {errors},
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data: FormData) => {
        Alert.alert("Form Data: ", JSON.stringify(data));
    }
  return (
    <View className='flex-1 justify-center items-center px-6 bg-gray-100'>
      <Text className='text-lg font-semibold text-gray-700 mb-2'>Name:</Text>
      <Controller
        control={control}
        name='name'
        render={({ field: {onChange, value} }) => (
            <>
                <TextInput
                    className='w-full border border-gray-300 rounded-lg px-4 py-2 bg-white'
                    onChangeText={onChange}
                    value={value}
                    placeholder='Enter your name'
                />
                {
                    errors.name && (
                        <Text className='text-red-500 text-sm mt-1'>{errors.name.message}</Text>
                    )
                }
            </>
        )}
      />
      <Text className='text-lg font-semibold text-gray-700 mt-4 mb-2'>Email:</Text>
      <Controller
        control={control}
        name='email'
        render={({ field: { onChange, value }}) => (
            <>
            <TextInput
                className='w-full border border-gray-300 rounded-lg px-4 py-2 bg-white'
                onChangeText={onChange}
                value={value}
                keyboardType='email-address'
                placeholder='Enter your email'
            />
            {
                errors.email && (
                    <Text className='text-red-500 text-sm mt-1'>{errors.email.message}</Text>
                )
            }
            </>
        )}
      />
      <Pressable className='mt-6 bg-blue-800 w-full py-3 rounded-lg' onPress={handleSubmit(onSubmit)}>
        <Text className='text-white text-center text-lg font-semibold'>Submit</Text>
      </Pressable>
    </View>
  )
}

export default FormValidation