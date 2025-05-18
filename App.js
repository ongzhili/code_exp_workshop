import {
  Text,
  View,
  StyleSheet,
  Button,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import CounterText from './components/CounterText';
import { useState } from 'react';

export default function App() {
  const [num, setNum] = useState(0);

  function increment() {
    console.log('Pressed');
    setNum(num + 1);
  }

  function decrement() {
    console.log('Pressed');
    setNum(num - 1);
  }

  function reset() {
    console.log('Pressed');
    setNum(0);
  }

  function renderEncouragingText() {
    if (num >= 30) {
      return 'Wow!';
    }
    if (num >= 20) {
      return 'Amazing!';
    }
    if (num >= 10) {
      return 'Keep Going!!';
    }
  }

  return (
    <TouchableOpacity style={styles.container} onPress={increment}>
      <View style={styles.container}>
        <CounterText color="pink" fontSize={10}>
          {num}
        </CounterText>
        <CounterText color="red" fontSize={20}>
          {num}
        </CounterText>
        <CounterText color="purple" fontSize={30}>
          {num}
        </CounterText>
        <Pressable onPress={increment}>
          <Text style={styles.button}>Increment!</Text>
        </Pressable>
        <Pressable onPress={decrement}>
          <Text style={styles.button}>Decrement!</Text>
        </Pressable>
        <Pressable onPress={reset}>
          <Text style={styles.button}>Reset!</Text>
        </Pressable>
        <Text style={styles.encouragingText}> {renderEncouragingText()} </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal',
  },
  text: {
    fontSize: 40,
    padding: 20,
    textAlign: 'center',
  },
  encouragingText: {
    fontSize: 10,
    color: 'red',
    margin: 20,
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'yellow',
    color: 'blue',
    borderRadius: 20,
    userSelect: 'none',
  },
});
