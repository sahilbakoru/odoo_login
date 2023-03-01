import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = ({navigation}) => {
  const [data, setData] = useState();

  const getAllProducts = async () => {
    var myHeaders = new Headers();

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch('http://3.211.95.141:3001/pagedata', requestOptions)
      .then(response => response.text())
      .then(result => {
        setData(JSON.parse(result));
        console.log('data found see data in state');
      })
      .catch(error => console.log('error', error));
  };

  return (
    <SafeAreaView style={{backgroundColor: '#fff', height: '100%'}}>
      <ScrollView>
        <View style={{marginTop: '10%'}}>
          <View style={{justifyContent: 'space-evenly', flexDirection: 'row'}}>
            <View style={styles.Box}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SalesChart')}>
                <Image
                  style={styles.logo}
                  source={{
                    uri: 'https://www.tableau.com/sites/default/files/2021-06/DataGlossary_Icons_Pie%20Chart.jpg',
                  }}
                />
                <Text>Sales Chart</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Box}>
              <TouchableOpacity onPress={() => navigation.navigate('Reports')} >
              <Image
                style={styles.logo}
                source={{
                  uri: 'https://www.pngitem.com/pimgs/m/543-5437998_reporting-icon-business-report-icon-png-transparent-png.png',
                }}
              />
              <Text>Reports</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{justifyContent: 'space-evenly', flexDirection: 'row'}}>
            <View style={styles.Box}>
              <TouchableOpacity
                onPress={() => navigation.navigate('StockInquiry')}>
                <Image
                  style={styles.logo}
                  source={{
                    uri: 'https://previews.123rf.com/images/ppbig/ppbig1904/ppbig190401458/120274154-warehouse-worker-stock-checking-icon-on-white-background.jpg',
                  }}
                />
                <Text>Stock Inquiry</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Box}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ItemHistory')}>
                <Image
                  style={styles.logo}
                  source={{
                    uri: 'https://w7.pngwing.com/pngs/266/224/png-transparent-computer-icons-history-angle-text-rectangle-thumbnail.png',
                  }}
                />
                <Text>Item History</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{justifyContent: 'space-evenly', flexDirection: 'row'}}>
            <View style={styles.Box}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SalesAnalysis')}>
                <Image
                  style={styles.logo}
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/3090/3090011.png',
                  }}
                />
                <Text>Sales Analysis</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.Box}>
              <Image
                style={styles.logo}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/401/401176.png',
                }}
              />
              <Text>Transactions</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  boxText: {
    padding: '1%',
    fontSize: 20,
    color: '#000',
    fontWeight: '400',
  },
  Box: {
    borderColor: '#000',
    borderWidth: 1,
    margin: '1%',
    padding: '2%',
    borderRadius: 5,
    backgroundColor: 'white',
    width: '30%',
    height: 100,
  },
  input: {
    margin: 10,
    height: 50,
    width: '90%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 1,
    color: '#000',
    padding: '1%',
    fontSize: 20,
    borderRadius: 10,
  },
  logo: {
    width: 73,
    height: 62,
  },
});

export default Home;
