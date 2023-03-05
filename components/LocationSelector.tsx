import React from 'react';
import { View, Image, Text,Button, Pressable, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const LocationSelector = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, padding: 20, justifyContent: 'space-between', backgroundColor: 'white' }}>
            <View>
                <Image
                source={require("./assets/mapMarker1.gif")}
                style={{width: 70, height: 150, marginTop: 30 }}
                />
                <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>Grant your location</Text>
                <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>access</Text>
                <Text>Cheetay needs your location to show available options in your area</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('CityList')}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#ff6537', '#ff0403']} style={{padding: 10, borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: 'white'}}>Use Current Location</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <Text style={{fontSize: 5}}></Text>
                <Pressable style={{justifyContent: 'center', alignItems: 'center'}} onPress={() => navigation.navigate('CityList')}><Text style={{color: '#fd702f'}}>Or Select Another Location</Text></Pressable>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    pressableView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default LocationSelector;