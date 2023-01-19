import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
const [result, setResult] = useState('');
const [input, setInput] = useState('');
const [input1, setInput1] = useState('');

const add = () => {
setResult(parseInt(input) + parseInt(input1));
}

const subtract = () => {
setResult(parseInt(input) - parseInt(input1))
}

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Result: {result}</Text>
      <View>
<TextInput keyboardType='number-pad' style={styles.input} onChangeText={setInput}></TextInput>
<TextInput keyboardType='number-pad' style={styles.input} onChangeText={setInput1}></TextInput>
      </View>
      <View style={styles.operators}>
      <View style={styles.buttons}>
        <Button onPress={add} title="+"/>
        </View>
        <View style={styles.buttons}>
        <Button onPress={subtract} title="-"/>
        </View>
        </View>
<StatusBar style='auto'/>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    borderWidth: 1,
    height: 30,
    width: 120,
borderColor: 'black',
padding: 5
},
 buttons: {
  width: '15%',
marigin: 10,
borderColor: 'black',
borderWidth: 1,
marginTop: 10
 },
 operators: {
flexDirection: 'row',
justifyContent: 'space-evenly'
 },
 text: {
  marginBottom: 10
 }
});
