import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {
  View,
  Text,
  TextInput,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import Background from '../components/Background';
import WhiteLogo from '../components/WhiteLogo';
import { useForm } from '../hooks/useForm';
import { loginStyles } from '../theme/loginTheme';

interface Props extends StackScreenProps<any, any> {}

export default function LoginScreen({ navigation }: Props) {
  const { email, password, onChange } = useForm({
    email: '',
    password: '',
  });

  const onLogin = () => {
    console.log({ email, password });
    Keyboard.dismiss();
  };

  return (
    <>
      {/* Background */}
      <Background />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
            onChangeText={value => onChange(value, 'email')}
            value={email}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={loginStyles.label}>Password:</Text>
          <TextInput
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="rgba(255,255,255,.4)"
            keyboardType="default"
            underlineColorAndroid="#fff"
            style={[
              loginStyles.inputField,
              Platform.OS === 'ios' && loginStyles.inputFieldIOS,
            ]}
            selectionColor="#fff"
            onChangeText={value => onChange(value, 'password')}
            value={password}
            autoCapitalize="none"
            autoCorrect={false}
          />

          {/* Login Button */}
          <View style={loginStyles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={loginStyles.button}
              onPress={onLogin}>
              <Text style={loginStyles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>

          {/* Create an account */}
          <View style={loginStyles.newUserContainer}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.replace('RegisterScreen')}>
              <Text style={loginStyles.buttonText}>New Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
