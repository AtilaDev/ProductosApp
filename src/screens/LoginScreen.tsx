import React from 'react';
import {
  View,
  Text,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Background from '../components/Background';
import WhiteLogo from '../components/WhiteLogo';
import { loginStyles } from '../theme/loginTheme';

export default function LoginScreen() {
  return (
    <>
      {/* Background */}
      <Background />

      <View style={loginStyles.formContainer}>
        {/* Keyboard avoid view */}
        <WhiteLogo />
        <Text style={loginStyles.title}>Login</Text>

        <Text style={loginStyles.label}>Email:</Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor="rgba(255,255,255,.4)"
          keyboardType="email-address"
          underlineColorAndroid="#fff"
          style={[
            loginStyles.inputField,
            Platform.OS === 'ios' && loginStyles.inputFieldIOS,
          ]}
          selectionColor="#fff"
          // TODO: onChange, value

          autoCapitalize="none"
          autoCorrect={false}
        />

        <Text style={loginStyles.label}>Password:</Text>
        <TextInput
          placeholder="Password"
          placeholderTextColor="rgba(255,255,255,.4)"
          keyboardType="default"
          underlineColorAndroid="#fff"
          style={[
            loginStyles.inputField,
            Platform.OS === 'ios' && loginStyles.inputFieldIOS,
          ]}
          selectionColor="#fff"
          // TODO: onChange, value

          autoCapitalize="none"
          autoCorrect={false}
        />

        {/* Login Button */}
        <View style={loginStyles.buttonContainer}>
          <TouchableOpacity activeOpacity={0.7} style={loginStyles.button}>
            <Text style={loginStyles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* Create an account */}
        <View style={loginStyles.newUserContainer}>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={loginStyles.buttonText}>New Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
