import React, {useState, useEffect} from 'react';

import axios from 'axios';
import { Text, View, Image, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = () => {
    const navigation = useNavigation();
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [selectLanguage, setSelectLanugage] = useState("English");
    useEffect(() => {
        let STORAGE_KEY = '@selectLanguageKey';
        const fetchData = async () => {
            const value = await AsyncStorage.getItem(STORAGE_KEY);
            console.log(value);
        }
        fetchData();
    }, [])
    const onLogin = async () => {
        axios.post('http://10.0.2.2:5000/user/login', {
            userEmail: userEmail,
            userPassword: userPassword,
        })
        .then((response) => {
            if(response.data.message === 'success') {
                navigation.navigate("RegisterPage");
            }
        })
    }
    return(
        <View style={styles.container}>
            <ImageBackground source={require("./assets/background.png")} resizeMode="cover" style={{flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require("./assets/logo.png")} style={{width: 200, height: 100}} />
                    <Text style={{color: 'white', fontSize: 30, fontFamily: 'Segoe Print'}}> / Log In</Text>
                </View>
                <TextInput onChangeText = {newText => setUserEmail(newText)} style={styles.textinput} placeholder='Email...' placeholderTextColor={"white"}></TextInput>
                <TextInput onChangeText = {newText => setUserPassword(newText)} style={styles.textinput} placeholder='Password...' placeholderTextColor={"white"}></TextInput>
                <TouchableOpacity onPress={() => navigation.navigate("RegisterPage")}><Text style={{color: 'white', marginTop: 20}}>If you have no account yet, please register</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => onLogin()} style={{width: '70%', marginTop: 20, marginBottom: 40}}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#ff6537', '#ff0403']} style={{padding: 10, borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: 'white'}}> Log In </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textinput: {
        paddingHorizontal: 20,
        width: '70%',
        borderWidth: 1.5,
        borderColor: 'white',
        color: 'white',
        padding: 8,
        borderRadius: 20,
        marginBottom: 10,
        marginTop: 10,
    }
})

export default LoginPage;