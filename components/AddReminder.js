import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const AddReminder = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={{ fontSize: 32, fontWeight: "bold", color: "#fff" }}>+</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "8%",
    width: "90%",
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
    elevation: 12,
    marginBottom: 16,
  },
});

export default AddReminder;
