import React from 'react';
import { View, Button, Text, StyleSheet, Image, Pressable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const MainPage = ({route} : any) => {
    const {restaurantName} = route.params
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, padding: 10  }}>
            <View style={styles.headerLogin}>
                <View style={styles.buttons}>
                    <Image source={require("./assets/iconSignUp.jpg")} style={{width: 50, height: 50, borderRadius: 50}} />
                    <View>
                        <Text style={styles.SignupText}>Sign Up / Log In</Text>
                        <Text>User must login here.</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#ff6537', '#ff0403']} style={{padding: 10, borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: 'white'}}>Log In</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                <View style={styles.bodyMainView}>
                    <Text style={styles.Texttitle}>Food</Text>
                    <Image source={require("./assets/Food.png")} style={{width: 100, height: 150}} />
                </View>
                <View style={{gap: 7, width: '49%'}}>
                    <View style={styles.bodyView}>
                        <Text style={styles.Texttitle}>Grocery</Text>
                        <Image source={require("./assets/Grocery.png")} style={{width: 100, height: 75}} />
                    </View>
                    <View style={styles.bodyView}>
                        <Text style={styles.Texttitle}>Pharma</Text>
                        <Image source={require("./assets/Pharma.png")} style={{width: 100, height: 75}} />
                    </View>
                </View>
            </View>
            <Button title={restaurantName} onPress={() => navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    Texttitle: {
        color: 'black',
        fontSize: 17,
        fontWeight: 'bold',
    },
    headerLogin: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: '100%',
        borderWidth: 1.5,
        borderColor: '#d7d7d7',
        borderRadius: 40,
        gap: 10,
        marginBottom: 10,
    },
    bodyMainView: {
        width: '49%',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderWidth: 1.5,
        borderColor: '#d7d7d7',
        borderRadius: 20,
        gap: 5,
    },
    bodyView: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderWidth: 1.5,
        borderColor: '#d7d7d7',
        borderRadius: 20,
        gap: 5,
    },
    SignupText: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    button: {
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: "orange",
    }
})

export default MainPage;