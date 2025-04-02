import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Link href={'/about'}>
        <Text className="text-red-800 text-3xl">About</Text>
      </Link>
      <Link href={'/contact'}>
        <Text className="text-blue-800 text-3xl">Contact</Text>
      </Link>
      <Link href={'/card'}>
        <Text className="text-yellow-500 text-3xl">Card</Text>
      </Link>
      <Link href={'/hooks'}>
        <Text className="text-green-500 text-3xl">Hooks</Text>
      </Link>
      <Link href={'/category'}>
        <Text className="text-purple-500 text-3xl">Category</Text>
      </Link>
      <Link href={'/api'}>
        <Text className="text-pink-500 text-3xl">API</Text>
      </Link>
      <Link href={'/rhf'}>
        <Text className="text-blue-900 text-3xl">Form Validation</Text>
      </Link>
      <Link href={'/login'}>
        <Text className="text-red-900 text-3xl">Go to Login</Text>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});