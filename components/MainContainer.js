import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './Home'
import List from './ListContainer'
import Details from './Details'
import Tasks from './Tasks'

// https://ionicons.com/
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';

const Tab = createBottomTabNavigator();
const ListStack = createStackNavigator();
const HomeStack = createStackNavigator();
const TaskStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{title:"Home", headerTitleAlign:"center"}} />
      <HomeStack.Screen name="Details" component={Details} options={{title:"Details", headerTitleAlign:"center"}}  />
    </HomeStack.Navigator>
  )
}

const ListStackScreen = () => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name="List" component={List} options={{title:"List", headerTitleAlign:"center"}} />
      <ListStack.Screen name="Details" component={Details} options={{title:"Details", headerTitleAlign:"center"}}  />
    </ListStack.Navigator>
  )
}

const TaskStackScreen = () => {
  return (
    <TaskStack.Navigator>
      <TaskStack.Screen name="Tasks" component={Tasks} options={{title:"Tasks", headerTitleAlign:"center"}} />
      <TaskStack.Screen name="Details" component={Details} options={{title:"Details", headerTitleAlign:"center"}}  />
    </TaskStack.Navigator>
  )
}



const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch(route.name){
      // focus가 있으면 'home', 'home-outline'
      case 'Home':
        iconName = focused
          ? 'home'
          : 'home-outline';        
        break;
      case 'List':
        iconName = focused
          ? 'list'
          : 'list-outline'; 
        break;
      case 'Tasks':
        iconName = focused
          ? 'checkmark'
          : 'checkmark-outline'; 
        break;       
    }
    
    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
})

const tabBarOptions= {
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
}

export default function Main() {
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log("-- main is mounted--")
    // back-end에서 tasks 데이터를 가져오고, global state를 갱신
    dispatch({type:"FETCH_TASKS"})
  }, [])

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="List" component={ListStackScreen} />
          <Tab.Screen name="Tasks" component={TaskStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
