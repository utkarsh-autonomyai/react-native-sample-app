import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter</Text>
      
      <View style={styles.display}>
        <Text style={styles.count}>{count}</Text>
      </View>

      <View style={styles.buttonGroup}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            styles.buttonDecrement,
            pressed && styles.buttonPressed,
          ]}
          onPress={decrement}
        >
          <Text style={styles.buttonText}>-</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            styles.buttonReset,
            pressed && styles.buttonPressed,
          ]}
          onPress={reset}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            styles.buttonIncrement,
            pressed && styles.buttonPressed,
          ]}
          onPress={increment}
        >
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  display: {
    marginBottom: 40,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
  },
  count: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 50,
  },
  buttonIncrement: {
    backgroundColor: '#34C759',
  },
  buttonDecrement: {
    backgroundColor: '#FF3B30',
  },
  buttonReset: {
    backgroundColor: '#8E8E93',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonPressed: {
    opacity: 0.7,
  },
});
