import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';

export default function App() {
  const [text, setText] = useState('');

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <TextInput 
        style={{ height:40, borderColor:'gray', borderWidth:1, width:200, marginBottom:10, padding:5 }}
        placeholder="Type something..."
        onChangeText={setText}
      />
      <Text>You typed: {text}</Text>
    </View>
  );
}
