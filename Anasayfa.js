import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const AnaSayfa = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome! AnaSayfa</Text>
      <TouchableOpacity style={{ marginTop: 20, padding: 10, backgroundColor: 'blue', borderRadius: 5 }}>
        <Text style={{ color: 'white' }}>Take Exam 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: 10, padding: 10, backgroundColor: 'blue', borderRadius: 5 }}>
        <Text style={{ color: 'white' }}>Take Exam 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: 10, padding: 10, backgroundColor: 'blue', borderRadius: 5 }}>
        <Text style={{ color: 'white' }}>Take Exam 3</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AnaSayfa;
