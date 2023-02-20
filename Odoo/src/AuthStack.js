
import React from 'react';
import { Text, View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';


import Login from './screen/Login';
import Home from './screen/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const AuthStack = () => {
  const [profile, setprofile] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const Stack = createNativeStackNavigator();
  const data = [{
    index: "1",
    imgURL: "",
    title: "INTER STELLER",
    ptext: "Interstellar travel refers to the idea of interstellar probes or crewed spacecraft moving between stars or planetary systems in a galaxy. Interstellar travel would be much more difficult than"
  }, {
    index: "2",
    imgURL: "",
    title: "MARIAN",
    ptext: "Interstellar travel refers to the idea of interstellar probes or crewed spacecraft moving between stars or planetary systems in a galaxy. Interstellar travel would be much more difficult than"
  }]



  return (

    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
        headerShown: false
      }}
      initialRouteName='Login'>
        <Stack.Screen options={{ headerShown: false }}
         name='Home' component={Home}/>
        <Stack.Screen name='Login' component={Login}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    color: "white"
  },
  text: {
    fontSize: 30,
    color: "white",
    marginTop: 70,
    textAlign: "center"
  },
  container2: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default AuthStack;
