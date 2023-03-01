import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
  } from 'react-native';
  import React, {useState} from 'react';

  import imagesPath from '../constants/imagesPath';
  
  const SalesAnalysis = () => {
    

    return (
      <View>

        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            backgroundColor: '#02a390',
            marginHorizontal: '4%',
            marginTop: '4%',
            padding: '3.5%',
            alignItems: 'center',
            borderRadius: 8,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{marginHorizontal: '2%'}}
              source={imagesPath.CameraIcon}
            />
            <Text style={{fontSize: 20, color: '#fff'}}>Scan Item</Text>
          </View>
        </TouchableOpacity>
  
        <View style={{alignItems: 'center'}}>
          <TextInput
            placeholderTextColor="grey"
            placeholder="Type SKU"
            style={styles.InputDate}></TextInput>
          <TextInput
            placeholderTextColor="grey"
            placeholder="Search By Item Name"
            style={styles.InputDate}></TextInput>
        </View>
      </View>
    );
  };
  
  export default SalesAnalysis;
  const styles = StyleSheet.create({
    datebox: {
      padding: '2%',
      width: '40%',
      height: 40,
      borderColor: '#000',
      borderWidth: 1,
      color: '#000',
      fontSize: 20,
    },
    InputDate: {
      borderBottomColor: '#000',
      borderBottomWidth: 1,
      padding: '2%',
      width: '85%',
      marginTop: '8%',
      fontSize: 20,
    },
  });
  