import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>You clicked {count} times</Text>
      <Button title="Click Me" onPress={() => setCount(count + 1)} />
    </View>
  );
}
