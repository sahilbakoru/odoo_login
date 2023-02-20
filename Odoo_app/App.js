
import React from 'react';
import { Text, View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';


// import Login from './src/screen/Login';
// import Home from './src/screen/Home';
import AppStack from './src/AppStack';
import AuthStack from './src/AuthStack';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const App = () => {
  const [profile, setProfile] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [userToken, setUserToken] = React.useState(null);
  // const Stack = createNativeStackNavigator();
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

  const authTokenWithOdoo = async ()=>{
    setIsLoading(true)
    let usertoken = await AsyncStorage.getItem('token')

    if(usertoken!==null){
      //token authenticate with odoo server
      // await AsyncStorage.removeItem('token')
      setProfile(true)
      setIsLoading(false)
    }else{
      setProfile(null)
      setIsLoading(false)
    }
  }
  React.useEffect(()=>{
    authTokenWithOdoo();
  },[])

  if(isLoading){
    return (
      <View style={[styles.container2, styles.horizontal]}>
      <ActivityIndicator size="large" color="black"/>
      </View>
    )
  }

  return (
    profile !== null ? <AppStack/>:<AuthStack/>
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

export default App;
