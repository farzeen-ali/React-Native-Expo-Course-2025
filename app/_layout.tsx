import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Slot, Stack } from "expo-router";
import { Drawer } from 'expo-router/drawer';
import "../global.css"
import { MaterialIcons } from "@expo/vector-icons";
import { Provider } from "react-redux";
// import { CounterProvider } from "./store/CounterContext";
import { store } from './redux/store/index';

export default function Layout(){
    return(
        <GestureHandlerRootView> 
            {/* <CounterProvider> */}
            <Provider store={store}>
            <Drawer screenOptions={{
                drawerStyle: { backgroundColor: '#000' },
                drawerActiveTintColor: "#0f0",
                drawerInactiveTintColor: '#fff',
                drawerLabelStyle: { fontSize: 18 }
            }}>
                <Drawer.Screen
                    name="(tabs)"
                    options={{
                        title: "Tabs",
                        drawerIcon: ({color, size} : {color: string ,size : number}) => (
                            <MaterialIcons name="dashboard" size={size} color={color} />
                        )
                    }}
                />
                <Drawer.Screen
                    name="card"
                    options={{
                        title: "Cards",
                        drawerIcon: ({color, size} : {color: string ,size : number}) => (
                            <MaterialIcons name="add-card" size={size} color={color} />
                        )
                    }}
                />
                <Drawer.Screen
                    name="about"
                    options={{
                        title: "About",
                        drawerIcon: ({color, size} : {color: string ,size : number}) => (
                            <MaterialIcons name="info" size={size} color={color} />
                        )
                    }}
                />
            </Drawer>
            </Provider>
        {/* </CounterProvider> */}
            {/* <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack> */}
        </GestureHandlerRootView>
    )
};