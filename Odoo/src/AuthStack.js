import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Button,
} from 'react-native';

import Home from './screen/Home';
import SalesChart from './screen/SalesChart';
import ItemHistory from './screen/ItemHistory';
import StockInquiry from './screen/StockInquiry';
import SalesAnalysis from './screen/SalesAnalysis';
import Reports from './screen/Reports';
import {NavigationContainer} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';

const AuthStack = ({navigation}) => {
  const Drawer = createDrawerNavigator();

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
        <Drawer.Screen
          options={{
            headerRight: () => {
              return <Button title="Home" color="#fff" />;
            },
            title: 'Item History',
            headerStyle: {
              backgroundColor: '#3478F5',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="ItemHistory"
          component={ItemHistory}
        />

        <Drawer.Screen
          options={{
            title: 'Stock Inquiry',
            headerStyle: {
              backgroundColor: '#3478F5',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="StockInquiry"
          component={StockInquiry}
        />

        <Drawer.Screen
          options={{
            title: 'Sales Analysis',
            headerStyle: {
              backgroundColor: '#3478F5',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="SalesAnalysis"
          component={SalesAnalysis}
        />

<Drawer.Screen
          options={{
            title: 'Reports',
            headerStyle: {
              backgroundColor: '#3478F5',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="Reports"
          component={Reports}
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
