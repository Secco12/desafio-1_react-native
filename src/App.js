import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CountersFunc from './CountersScreen';
import ConfigFunc from './ConfigScreen';
import {NavigationContainer} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { BottomSheetAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#daa520',
          inactiveTintColor: '#555',
          activeBackgroundColor: '#00008B',
          inactiveBackgroundColor: '#00008B',
          //showLabel: true,
          labelStyle: {fontSize: 13},
        }}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#00008B',
            height: 90,
          },
          headerTitleStyle: {
            //fontWeight: 'bold',
            fontSize: 35,
            paddingTop: 42
          },
          headerTintColor: '#fff',
        }}>
        <Tab.Screen
          name="Counters"
          component={CountersFunc}
          options={{
            tabBarIcon: ({focused}) => {
              if (focused) {
                return <FontAwesome5 name="home" size={30} color="#daa520" />;
              } else {
                return <FontAwesome5 name="home" size={20} color="#555" />;
              }
            },
          }}
        />
        <Tab.Screen
          name="Config"
          component={ConfigFunc}
          options={{
            tabBarIcon: ({focused}) => {
              if (focused) {
                return <FontAwesome5 name="cog" size={30} color="#daa520" />;
              } else {
                return <FontAwesome5 name="cog" size={20} color="#555" />;
              }
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
