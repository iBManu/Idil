import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

export default function AddReminderDialog({ onClose, addReminder }) {

    const [reminderText, setReminderText] = useState('');

    const handleAddReminder = () => {
        const text = reminderText;
        addReminder(text);
        onClose();
    };


    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <View style={{ flex: 0.2, justifyContent: "center" }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "#2e2e2e", marginTop: 16 }}>Añadir recordatorio</Text>
                </View>

                <View style={{ flex: 0.5, alignItems: "center", justifyContent: "center" }}>
                    <TextInput
                        style={styles.input}
                        placeholder="¿Qué quieres que te recuerde?"
                        onChangeText={(text) => setReminderText(text)}
                    />

                </View>

                <View style={{ flex: 0.3 }}>
                    <TouchableOpacity onPress={handleAddReminder} style={styles.addButton}>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>Añadir</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "25%",
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
    addButton: {
        height: "70%",
        minWidth: "90%",
        backgroundColor: '#0e0e0e',
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
        elevation: 8,
        marginBottom: 16,
    },
    input: {
        height: "50%",
        minWidth: "90%",
        maxWidth: "90%",
        backgroundColor: "#f3f3f3",
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 4,
        marginBottom: 16,
    },
    background: {
        position: "absolute",
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0e0e0e5e",
        zIndex: 1,
    }
});
