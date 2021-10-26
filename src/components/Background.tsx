import React from 'react';
import { View } from 'react-native';

export default function Background() {
  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: '#5856d6',
        top: -300,
        width: 1000,
        height: 1200,
        transform: [{ rotate: '-70deg' }],
      }}
    />
  );
}
