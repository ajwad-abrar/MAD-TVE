import React, { useState } from 'react';
import { View, Button } from 'react-native';

export default function App() {
  const [color, setColor] = useState('lightblue');

  const changeColor = () => {
    setColor(color === 'lightblue' ? 'lightgreen' : 'lightblue');
  };

  return (
    <View style={{ flex:1, backgroundColor:color, justifyContent:'center', alignItems:'center' }}>
      <Button title="Change Background" onPress={changeColor} />
    </View>
  );
}
