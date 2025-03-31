import { View, Text, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import Home from '.';
import Settings from './settings';

type RouteType = {
    key: string,
    title: string,
}

const TabsLayout = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const routes : RouteType[] = [
        { key: "home", title: "Home Tab" },
        { key: "setting", title: "Settings Tab" },
    ]
  return (
    <TabView
        navigationState={{ index, routes }}
        renderScene={SceneMap({
            home: Home,
            setting: Settings
        })}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        tabBarPosition='bottom'
        renderTabBar={(props) => (
            <TabBar
                {...(props as any)}
                renderLabel={({ route, focused } : { route: RouteType; focused : boolean}) => (
                    <Text style={{ color: focused ? 'green' : 'white', fontSize: 12 }}>{route.title}</Text>
                )}
                indicatorStyle={{ backgroundColor: 'green' }}
                style={{
                    backgroundColor: 'black',
                    borderColor: 'black',
                    borderTopWidth: 1,
                    borderTopColor: '#ccc'
                }}
            />
        )}
    />
  )
}

export default TabsLayout