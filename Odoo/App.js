
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
    console.log("authTokenWithOdoo")
    setIsLoading(true)
    let Cookie = await AsyncStorage.getItem('cookie')
    let access_token = await AsyncStorage.getItem('access_token')


    console.log("Cookie : ",Cookie)
    console.log("access_token : ",access_token)

    if(Cookie!==null && access_token!==null){
      //token authenticate with odoo server
      // await AsyncStorage.removeItem('token')

        var myHeaders = new Headers();
        myHeaders.append("access_token", access_token);
        myHeaders.append("Cookie", Cookie);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://pos.vervebot.io/api/res.users", requestOptions)
            .then(response => {
                console.log("response : ",response)
                return response.text()
            })
            .then(async result => {
                let responseData = JSON.parse(result)
                console.log(responseData)
                setProfile(true)
                setIsLoading(false)
            })
            .catch(error => console.log('error', error));

      
    }else{
      setProfile(null)
      setIsLoading(false)
    }
  }
  React.useEffect(()=>{
    authTokenWithOdoo();
  },[])

  if(!isLoading){
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
