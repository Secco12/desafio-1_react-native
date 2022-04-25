import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function FlatButton({text}){
    return(
        <TouchableOpacity>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        width: 150,
        height: 60,
    },
    buttonText: {
        color: '#00008B',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    }
})