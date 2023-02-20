import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{useState} from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity,ActivityIndicator, Alert } from 'react-native';
import CheckBox from 'react-native-check-box'


const LoginForm = ({ navigation }) => {
    const [check,setCheck]=useState(false)
    const [loader,setLoader] = useState(false)
    const [userData,setUserData] = useState({username:"",password:""})

    const AuthUser = async ()=>{
        await AsyncStorage.setItem("token",'sdfadfa');
    }
    return (
        <View style={{backgroundColor:"#276F98",flex:1,justifyContent: "center",alignItems: "center"}}>
        {loader?<View style={styles.loader}><ActivityIndicator/></View>:
        <>
            <View>
                <Text style={styles.text}>ODOO <Text style={styles.textlogin}>Login</Text></Text>
                <Text style={styles.ptext}>you can reach us anytime via info@vervebot.io</Text>
            </View>
            <View>
                <TextInput 
                style={styles.textinput} 
                placeholder="Username" 
                placeholderTextColor="grey" 
                value={userData.username}
                onChangeText={(e)=>{
                    setUserData((prev)=>{
                        return {
                            ...prev,username:e
                        }
                    })
                }}
                />
                <TextInput 
                style={styles.textinput} 
                secureTextEntry 
                placeholder="password"
                placeholderTextColor="grey" 
                value={userData.password}
                onChangeText={(e)=>{
                    setUserData((prev)=>{
                        return {
                            ...prev,password:e
                        }
                    })
                }}
                />
                <View style={{paddingTop:20,paddingBottom:20,display:"flex",flexDirection:"row",justifyContent:"flex-start"}}>
                <CheckBox
                    style={{ color:"white"}}
                    onClick={() => {
                        setCheck((prev)=>!prev)
                    }}
                    checkBoxColor={"white"}
                    checkedCheckBoxColor={"#a0eaff"}
                    isChecked={check}
                    rightText={"CheckBox"}
                />
                <Text style={{color:"white",paddingTop:2}}>I have read and agreed with the TC.</Text>
                </View>
                <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <TouchableOpacity 
                disabled={!check}
                onPress={(e)=>{
                    // setLoader(true)
                    // setTimeout(() => {
                    //     setLoader(false)
                    // }, 5000)

                    if(userData.username !==""&&userData.password !== ""){
                        // Alert.alert("login success")
                        setUserData({username:"",password:""})
                        AuthUser()
                        navigation.navigate("Home")
                    }else{
                        Alert.alert("username and password are incorrect")
                    }

                }}
                >
                    <View style={{...styles.submitBtm,backgroundColor:check?"#a0eaff":"white"}}>

                        <Text>Login</Text>
                    </View>
                </TouchableOpacity>
                </View>
            </View></>}
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "#74195b",
        fontSize: 37,
        textAlign: "left",
        marginTop: 25,
        // backgroundColor:"green",
        // paddingLeft: 20,
        // borderRadius:30
        textAlign:"center",
        fontWeight:'700'
    },
    textlogin: {
        color: "white",
        fontSize: 37,
        textAlign: "left",
        marginTop: 25,
        // backgroundColor:"green",
        // paddingLeft: 20,
        // borderRadius:30
        textAlign:"center",
        fontWeight:'400'
    },
    ptext: {
        color: "white",
        fontSize: 18,
        textAlign: "left",
        marginTop: 10,
        // backgroundColor:"green",
        // paddingLeft: 20,
        textAlign:"center",
        padding:10
    },
    textinput: {
        backgroundColor: "white",
        // width:"100%",
        // justifyContent:"center",
        marginTop: 20,
        padding: 20,
        borderRadius: 8,
        borderColor: "#ebebebdb",
        borderWidth: 0.6,
        borderColor:"black",
        color: "black",
        // placeholderTextColor:"grey" 
    },
    submitBtm: {
        color: "white",
        fontSize: 18,
        backgroundColor: "green",
        // width: "30%",
        // marginLeft: 20,
        borderRadius: 50,
        // borderColor: "#ebebebdb",
        // borderWidth: 0.6,
        paddingLeft: 80,
        paddingRight: 80,
        paddingTop: 15,
        paddingBottom: 15,
        textAlign:"center",
        justifyContent:"center"
    },
    loader:{
        minHeight:"100%",
        // display:'flex',
        // flex:1,
        justifyContent:"center",
        // alignItems:"center",
        position:"absolute",
        // textAlign:"center",
        alignSelf:"center",
        textAlignVertical:"center",
        marginTop:"50%",
        // backgroundColor:"white"


    }
})

export default LoginForm;
