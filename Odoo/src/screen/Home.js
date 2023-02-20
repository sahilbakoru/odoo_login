import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
const Home = () => {
    return (
        <SafeAreaView>
            <View style={styles.mainContainer}>
            
                <Text>HOME</Text>
                <TouchableOpacity
                    onPress={async () => {
                        await AsyncStorage.removeItem('cookie')
                        await AsyncStorage.removeItem('access_token')
                    }}
                >
                    <Text>logout</Text>

                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        // flex:1,
        // justifyContent:"center",
        // alignItems:"center"
        // marginTop:50
    }
})

export default Home;
