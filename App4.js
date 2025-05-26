import React from 'react';
import { Text, View, FlatList } from 'react-native';

const DATA = [
  { id: '1', title: 'Apple' },
  { id: '2', title: 'Banana' },
  { id: '3', title: 'Orange' },
];

export default function App() {
  return (
    <View style={{ flex:1, padding:20 }}>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text style={{ padding:10, fontSize:18 }}>{item.title}</Text>
        )}
      />
    </View>
  );
}
