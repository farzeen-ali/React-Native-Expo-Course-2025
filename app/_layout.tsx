import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Slot } from "expo-router";

import "../global.css"

export default function Layout(){
    return(
        <GestureHandlerRootView>
            <Slot />
        </GestureHandlerRootView>
    )
};