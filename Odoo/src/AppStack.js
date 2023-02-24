
import React from 'react';
import { Text, View, StyleSheet, FlatList, ActivityIndicator,Button } from 'react-native';
import {   createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } from '@react-navigation/drawer';

import Login from './screen/Login';
import Home from './screen/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const AppStack = () => {
  const Drawer = createDrawerNavigator();
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
  function Feed({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feed Screen</Text>
        <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
        <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
      </View>
    );
  }
  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Close drawer"
          onPress={() => props.navigation.closeDrawer()}
        />
        <DrawerItem
          label="Toggle drawer"
          onPress={() => props.navigation.toggleDrawer()}
        />
      </DrawerContentScrollView>
    );
  }
  return (

    <NavigationContainer>
      <Drawer.Navigator 
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false
      }}
      initialRouteName='Home'>
        <Drawer.Screen name='Home' component={Feed}/>
        <Drawer.Screen name='Login' component={Login}/>
        
      </Drawer.Navigator>
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

export default AppStack;
