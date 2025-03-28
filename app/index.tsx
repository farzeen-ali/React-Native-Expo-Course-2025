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
