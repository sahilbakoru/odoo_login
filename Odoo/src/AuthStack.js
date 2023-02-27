import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Button,
} from 'react-native';

import Login from './screen/Login';
import Home from './screen/Home';
import SalesChart from './screen/SalesChart';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const AuthStack = () => {
  const Drawer = createDrawerNavigator();
  const [profile, setprofile] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const Stack = createNativeStackNavigator();
  const data = [
    {
      index: '1',
      imgURL: '',
      title: 'INTER STELLER',
      ptext:
        'Interstellar travel refers to the idea of interstellar probes or crewed spacecraft moving between stars or planetary systems in a galaxy. Interstellar travel would be much more difficult than',
    },
    {
      index: '2',
      imgURL: '',
      title: 'MARIAN',
      ptext:
        'Interstellar travel refers to the idea of interstellar probes or crewed spacecraft moving between stars or planetary systems in a galaxy. Interstellar travel would be much more difficult than',
    },
  ];

  function Feed() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Feed</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#3478F5',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="Home"
          component={Home}
        />
        <Drawer.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen
          options={{
            title: 'Sales Chart',
            headerStyle: {
              backgroundColor: '#3478F5',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="SalesChart"
          component={SalesChart}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    color: 'white',
  },
  text: {
    fontSize: 30,
    color: 'white',
    marginTop: 70,
    textAlign: 'center',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default AuthStack;
