import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity, ScrollView,} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = () => {
  const [data, setData] = useState();

  const getAllProducts = async () => {
    var myHeaders = new Headers();

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch('http://192.168.1.79:5880/api/v1/allproduct', requestOptions)
      .then(response => response.json())
      .then(result => {
        setData(result);
        console.log('data found see data in state');
      })
      .catch(error => console.log('error', error));
  };

  return (
    <SafeAreaView>
        <ScrollView>
      <View style={styles.mainContainer}>
        <Text>HOME</Text>
        <TouchableOpacity
          onPress={async () => {
            await AsyncStorage.removeItem('cookie');
            await AsyncStorage.removeItem('access_token');
          }}>
          <Text>logout</Text>
        </TouchableOpacity>

        {data?.data.map((e, index) => (
          <View key={index}>
            <Text style={{padding: '1%', fontSize: 30}}>
               {e.SKU}
            </Text>
          </View>
        ))}
      </View>
      <TouchableOpacity onPress={getAllProducts}>
        <Text>get data</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log(data.data);
        }}>
        <Text>console.data</Text>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
});

export default Home;
