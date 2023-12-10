import React, {Component} from 'react';
//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Play from './components/Play';
import Dashboard from './components/Dashboard';

const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();
//const Tab = createMaterialBottomTabNavigator();

class App extends Component {
  render() {
    return (
      //   <Tab.Navigator>
      //     <Tab.Screen name="Home" component={Home} />
      //     <Tab.Screen name="Sign In" component={SignIn} />
      //     <Tab.Screen name="Sign Up" component={SignUp} />
      //     <Tab.Screen name="Play" component={Play} />
      //     <Tab.Screen name="Dashboard" component={Dashboard} />
      //   </Tab.Navigator>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Sign In" component={SignIn} />
          <Stack.Screen name="Sign Up" component={SignUp} />
          <Stack.Screen name="Play" component={Play} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
