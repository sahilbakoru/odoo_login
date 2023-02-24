import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import axios from 'axios';

const LoginForm = ({navigation}) => {
  const [check, setCheck] = useState(false);
  const [loader, setLoader] = useState(false);
  const [userData, setUserData] = useState({
    username: 'info@vervebot.io',
    password: 'pgadmin',
    dbname: 'postgres3',
  });
  let cookie = {session_id: ''};

  const createAccessToken = async session_id => {
    console.log('createAccessToken');
    console.log('session_id : ', session_id);
    console.log('userData : ', userData);

    var myHeaders = new Headers();
    myHeaders.append('login', userData.username);
    myHeaders.append('password', userData.password);
    myHeaders.append('db', userData.dbname);
    myHeaders.append('Cookie', session_id);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch('https://pos.vervebot.io/api/auth/token', requestOptions)
      .then(response => {
        console.log('response : ', response);
        return response.text();
      })
      .then(async result => {
        // let responseData = JSON.parse(result);
        let responseData = result;
        console.log(responseData,"responseData");
        console.log(responseData.access_token,"access_token");
        if (responseData.access_token !== '') {
          await AsyncStorage.setItem('cookie', session_id);
          await AsyncStorage.setItem('access_token', responseData.access_token);
          navigation.navigate('Home');
        }
      })
      .catch(error => console.log('error', error));
  };

  const AuthUser = async () => {
    navigation.navigate('Home');

    // console.log('AuthUser trigger');
    // var myHeaders = new Headers();
    // myHeaders.append('Content-Type', 'application/json');
    // var raw = JSON.stringify({
    //   jsonrpc: '2.0',
    //   params: {
    //     db: userData.dbname,
    //     login: userData.username,
    //     password: userData.password,
    //   },
    // });
    // console.log('userData : ', userData);
    // var requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: 'follow',
    // };
    // fetch('https://pos.vervebot.io/web/session/authenticate', requestOptions)
    //   .then(response => {
    //     console.log('responseHeaders : ', response.headers.map['set-cookie']);
    //     console.log('response : ', response);
    //     cookie.session_id = response.headers.map['set-cookie'];
    //     if (response.status === 200) {
    //       return response.text();
    //     } else {
    //       throw Error('login failed');
    //     }
    //   })
    //   .then(async result => {
    //     let resp = JSON.parse(result);
    //     if (!resp.error) {
    //       console.log(JSON.parse(result));
    //       await createAccessToken(cookie.session_id?.split(';')[0]);
    //     } else {
    //       console.log(JSON.parse(result));
    //       console.log('eroro : ', resp.error.message);
    //       throw Error('login failed');
    //     }
    //   })
    //   .catch(error => {
    //     Alert.alert('login failed');
    //     console.log('error', error);
    //   });
  };
  return (
    <View
      style={{
        backgroundColor: '#815676',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {loader ? (
        <View style={styles.loader}>
          <ActivityIndicator />
        </View>
      ) : (
        <>
          <View>
            <Text style={styles.text}>
              ODOO <Text style={styles.textlogin}>Login</Text>
            </Text>
            <Text style={styles.ptext}>
              you can reach us anytime via info@vervebot.io
            </Text>
          </View>
          <View>
            <TextInput
              style={styles.textinput}
              placeholder="DB Name"
              placeholderTextColor="grey"
              value={userData.dbname}
              autoCapitalize="none"
              onChangeText={e => {
                setUserData(prev => {
                  return {
                    ...prev,
                    dbname: e,
                  };
                });
              }}
            />
            <TextInput
              style={styles.textinput}
              placeholder="Username"
              placeholderTextColor="grey"
              value={userData.username}
              autoCapitalize="none"
              onChangeText={e => {
                setUserData(prev => {
                  return {
                    ...prev,
                    username: e,
                  };
                });
              }}
            />
            <TextInput
              style={styles.textinput}
              secureTextEntry
              placeholder="password"
              placeholderTextColor="grey"
              value={userData.password}
              autoCapitalize="none"
              onChangeText={e => {
                setUserData(prev => {
                  return {
                    ...prev,
                    password: e,
                  };
                });
              }}
            />
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              <CheckBox
                // style={{ color: "white" }}
                onClick={() => {
                  setCheck(prev => !prev);
                }}
                checkBoxColor={'white'}
                checkedCheckBoxColor={'#fff'}
                isChecked={check}
                rightText={'CheckBox'}
              />
              <Text style={{color: 'white', paddingTop: 2}}>
                I have read and agreed with the TC.
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                disabled={!check}
                onPress={e => {
                  if (userData.username !== '' && userData.password !== '') {
                    AuthUser();
                  } else {
                    Alert.alert('username and password are incorrect');
                  }
                }}>
                <View
                  style={{
                    ...styles.submitBtm,
                    backgroundColor: check ? '#fff' : 'grey',
                  }}>
                  <Text>Login</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 37,
    textAlign: 'left',
    marginTop: 25,
    textAlign: 'center',
    fontWeight: '700',
  },
  textlogin: {
    color: 'white',
    fontSize: 37,
    textAlign: 'left',
    marginTop: 25,
    textAlign: 'center',
    fontWeight: '400',
  },
  ptext: {
    color: 'white',
    fontSize: 18,
    textAlign: 'left',
    marginTop: 10,
    textAlign: 'center',
    padding: 10,
  },
  textinput: {
    backgroundColor: 'white',
    marginTop: 20,
    padding: 20,
    borderRadius: 8,
    borderColor: '#ebebebdb',
    borderWidth: 0.6,
    borderColor: 'black',
    color: 'black',
  },
  submitBtm: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'green',
    borderRadius: 50,
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: 'center',
    justifyContent: 'center',
  },
  loader: {
    minHeight: '100%',
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    textAlignVertical: 'center',
    marginTop: '50%',
  },
});

export default LoginForm;
