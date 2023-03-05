import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet, ImageBackground, TextInput, TouchableOpacity, ScrollView, Alert, ToastAndroid } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import AwesomeAlert from 'react-native-awesome-alerts';
import * as defaults from './language';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const languages:any = {
    'English': {
        username: 'Username...',
        email: 'Email...',
        password: 'Password...',
        confirm_password: 'Confirm Password...',
        address: 'Address...',
        register_link_tip: 'If you have an account already, please log in.',
        registerLogo: 'Register',
        login_link_tip: 'If you have no account yet, please register.',
        log_in: 'Log In',
        arabic: 'Arabic',
        english: 'English',
        french: 'French',
        enter_your_username: 'Enter your UserName.',
        enter_your_email: 'Enter your Email.',
        enter_your_password: 'Enter your Password.',
        enter_your_confirm_password: 'Enter your Confirm Password.',
        enter_your_address: 'Enter your Address.',
        password_not_same: "Confirm password isn't correct."
    },
    'Arabic' : {
        username: 'اسم المستخدم...',
        email: 'بريد إلكتروني...',
        password: 'كلمة المرور...',
        confirm_password: 'تأكيد كلمة المرور...',
        address: 'عنوان...',
        register_link_tip: 'إذا كان لديك حساب بالفعل ، يرجى تسجيل الدخول.',
        registerLogo: 'يسجل',
        login_link_tip: 'إذا لم يكن لديك حساب بعد ، يرجى التسجيل.',
        log_in: 'تسجيل الدخول',
        arabic: 'عربي',
        english: 'إنجليزي',
        french: 'فرنسي',
        enter_your_username: 'أدخل اسم المستخدم الخاص بك.',
        enter_your_email: 'أدخل بريدك الإلكتروني.',
        enter_your_password: 'ادخل رقمك السري.',
        enter_your_confirm_password: 'أدخل تأكيد كلمة المرور الخاصة بك.',
        enter_your_address: 'أدخل عنوانك.',
        password_not_same: "تأكيد كلمة المرور غير صحيح."
    },
    'French' : {
        username: "Nom d'utilisateur...",
        email: 'E-mail...',
        password: 'Mot de passe...',
        confirm_password: 'Confirmez le mot de passe...',
        address: 'Adresse...',
        register_link_tip: 'Si vous avez déjà un compte, veuillez vous connecter.',
        registerLogo: 'Enregistrer',
        login_link_tip: "Si vous n'avez pas encore de compte, veuillez vous inscrire.",
        log_in: 'Connexion',
        arabic: 'Arabe',
        english: 'Anglaise',
        french: 'Français',
        enter_your_username: "Entrez votre nom d'utilisateur.",
        enter_your_email: 'Entrer votre Email.',
        enter_your_password: 'Tapez votre mot de passe.',
        enter_your_confirm_password: 'Saisissez votre mot de passe de confirmation.',
        enter_your_address: 'Entrez votre adresse.',
        password_not_same: "Le mot de passe de confirmation n'est pas correct."
    }
}

const RegisterPage = () => {
    const [selectLanguage, setSelectLanguage] = useState("English");
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userConfirmPassword, setUserConfirmPassword] = useState("");
    const [userAddress, setUserAddress] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const navigation = useNavigation();

    // useEffect(() => {
    //     let STORAGE_KEY:string = "cityData";
    //     const feach = async () => {
    //         const value = await AsyncStorage.getItem(STORAGE_KEY);
    //         console.log(value);
    //     }
    //     feach();
    // }, [])

    const onSelectLanguage =async (itemValue : any) => {
        setSelectLanguage(itemValue);
        let STORAGE_KEY = '@selectLanguageKey';
        try {
            await AsyncStorage.setItem(STORAGE_KEY, selectLanguage);
            console.log("Data successfully saved");
        } catch(err) {
            console.log("Data save failed");
        }
    }

    const onRegister = async () => {
        if(userName == '') {
            setShowAlert(true);
            setAlertMessage(languages[selectLanguage].enter_your_username);
            return;
        }
        if(userEmail == '') {
            setShowAlert(true); 
            setAlertMessage(languages[selectLanguage].enter_your_email);
            return;
        }
        if(userPassword == '') {
            setShowAlert(true);
            setAlertMessage(languages[selectLanguage].enter_your_password);
            return;
        }
        if(userConfirmPassword == '') {
            setShowAlert(true);
            setAlertMessage(languages[selectLanguage].enter_your_confirm_password);
            return;
        }
        if(userAddress == '') {
            setShowAlert(true);
            setAlertMessage(languages[selectLanguage].enter_your_address);
            return;
        }
        if(userPassword != '' && userConfirmPassword != '' && userPassword != userConfirmPassword) {
            setShowAlert(true);
            setAlertMessage(languages[selectLanguage].password_not_same);
            return;
        }
        await axios.post('http://10.0.2.2:5000/user/register', {
            userName: userName,
            userEmail: userEmail,
            userPassword: userPassword,
            userLanguage: selectLanguage,
            userAddress: userAddress,
        })
        .then(function(response) {
            if(response.data.message === 'success') {
                navigation.navigate("LoginPage", {languageType: selectLanguage});
            }
        })
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <ImageBackground source={require("./assets/background.png")} resizeMode="cover" style={{flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
                        <Image source={require("./assets/logo.png")} style={{width: 200, height: 100, marginRight: 15}} />
                        <Text style={{color: 'white', fontSize: 30, fontFamily: 'Segoe Print'}}>{languages[selectLanguage].registerLogo}</Text>
                    </View>
                    <TextInput value={userName} onChangeText = {newText => setUserName(newText)} style={styles.textinput} placeholder={languages[selectLanguage].username} placeholderTextColor={"white"}></TextInput>
                    <TextInput value={userEmail} autoComplete='email' onChangeText = {newText => setUserEmail(newText)} style={styles.textinput} placeholder={languages[selectLanguage].email} placeholderTextColor={"white"}></TextInput>
                    <TextInput value={userPassword} secureTextEntry={true} onChangeText = {newText => setUserPassword(newText)} style={styles.textinput} placeholder={languages[selectLanguage].password} placeholderTextColor={"white"}></TextInput>
                    <TextInput value={userConfirmPassword} secureTextEntry={true} onChangeText = {newText => setUserConfirmPassword(newText)} style={styles.textinput} placeholder={languages[selectLanguage].confirm_password} placeholderTextColor={"white"}></TextInput>
                    <View
                        style={{ flex: 1,
                        width: '70%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1.5,
                        borderRadius: 20,
                        borderColor: 'white',
                        marginTop: 10,
                        marginBottom: 10,
                    }}>
                        <Picker
                            selectedValue={selectLanguage}
                            style={{ color: 'white', width: '100%' }}
                            onValueChange={(itemValue:any, itemIndex:number) => onSelectLanguage(itemValue)}
                        >
                            <Picker.Item style={{fontSize: 15}} label={languages[selectLanguage].english} value="English" />
                            <Picker.Item style={{fontSize: 15}} label={languages[selectLanguage].arabic} value="Arabic" />
                            <Picker.Item style={{fontSize: 15}} label={languages[selectLanguage].french} value="French" />
                        </Picker>
                    </View>
                    <TextInput value={userAddress} onChangeText = {newText => setUserAddress(newText)} style={styles.textinput} placeholder={languages[selectLanguage].address} placeholderTextColor={"white"}></TextInput>                    
                    <TouchableOpacity onPress={() => navigation.navigate("LoginPage")}><Text style={{color: 'white', marginTop: 20}}>{languages[selectLanguage].register_link_tip}</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => onRegister()} style={{width: '70%', marginTop: 20, marginBottom: 30}}>
                        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#ff6537', '#ff0403']} style={{padding: 10, borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: 'white'}}> {languages[selectLanguage].registerLogo} </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title="Warning"
                message={alertMessage}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                cancelButtonStyle = {{width: '60%', flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'}}
                cancelText="Okay"
                onCancelPressed={() => {
                    setShowAlert(false);
                }}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textinput: {
        flex: 1,
        paddingHorizontal: 20,
        width: '70%',
        borderWidth: 1.5,
        borderColor: 'white',
        color: 'white',
        fontSize: 15,
        padding: 8,
        borderRadius: 20,
        marginBottom: 10,
        marginTop: 10,
    }
})

export default RegisterPage;