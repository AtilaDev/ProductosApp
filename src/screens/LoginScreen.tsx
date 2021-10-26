import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Background from '../components/Background';
import WhiteLogo from '../components/WhiteLogo';
import { loginStyles } from '../theme/loginTheme';

export default function LoginScreen() {
  return (
    <>
      {/* Background */}
      <Background />

      {/* Keyboard avoid view */}
      <WhiteLogo />
      <Text style={loginStyles.title}>Login</Text>

      <Text style={loginStyles.label}>Email:</Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor="rgba(255,255,255,.4)"
        keyboardType="email-address"
      />
    </>
  );
}
