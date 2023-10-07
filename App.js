import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Reminder from './components/Reminder';
import AddReminder from './components/AddReminder';
import AddReminderDialog from './components/AddReminderDialog';
import SafeViewAndroid from "./components/SafeViewAndroid";

export default function App() {
  actualDate = new Date();
  let dayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  let monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const toggleDialogVisibility = () => {
    setIsDialogVisible(!isDialogVisible);
  };

  const [reminders, setReminders] = useState([]);

  const addReminder = (reminderText) => {
    setReminders([...reminders, reminderText]);
  };


  return (
    <View style={styles.container}>
      {isDialogVisible && <AddReminderDialog onClose={toggleDialogVisibility} addReminder={addReminder} />}

      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>

        <View style={{ flex: 0.1, justifyContent: "center" }}>
          <Text style={{ fontSize: 28, fontWeight: "bold", color: "#2e2e2e", paddingLeft: "5%" }}>{dayNames[actualDate.getDay()]}, {actualDate.getDate()} de {monthNames[actualDate.getMonth()]}</Text>
        </View>

        <View style={{ flex: 0.8, alignItems: "center" }}>
          {reminders.map((reminder, index) => (
            <Reminder name={reminder}/>
          ))}
          <AddReminder onPress={toggleDialogVisibility}></AddReminder>
        </View>

        <View style={{ flex: 0.1 }}>

        </View>

        <StatusBar style="auto" />

      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
