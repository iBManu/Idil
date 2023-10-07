import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Reminder({name}) {
    return (
        <View style={styles.container}>
            <Text>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "8%",
        width: "90%",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 12,
        marginBottom: 16,
    },
});
