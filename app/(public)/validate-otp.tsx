import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useSession } from '~/context/AuthContext';
import { trpc } from '~/trpc/react';

const ValidateOTP = () => {
  const [loginId, setLoginId] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpVisible, setOtpVisible] = useState(false);
  const {signIn} = useSession()
  const {mobileNumber} = useLocalSearchParams()
  const mutation = trpc.user.validateOTP.useMutation();

  const handleLogin = async () => {
    mutation.mutate({
      mobileNumber,
      otp,
    }, {
      onSuccess: (data) => {
        console.log(data.tokens.refreshToken)
        signIn(data.tokens.refreshToken)
      },
      onError: (error) => {
        console.log('Error:', error);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to Apollo Value Club</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            placeholderTextColor="#A1A1A1"
            secureTextEntry={!isOtpVisible}
            value={otp}
            onChangeText={setOtp}
            keyboardType="number-pad"
          />
          <TouchableOpacity onPress={() => setOtpVisible(!isOtpVisible)}>
            <Text style={styles.eyeIcon}>{isOtpVisible ? '👁️' : '🙈'}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.resendOtp}>Resend OTP</Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.checkboxContainer}>
          {/* <View style={[styles.checkbox, toggleCheckBox && styles.checkboxChecked]} /> */}
        </TouchableOpacity>
        <Text style={styles.termsText}>
          By signing up you indicate that you have read and agreed to the Terms & Conditions of
          Apollo Value Club Program.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#18252b',
    justifyContent: 'center',
  },
  logo: {
    width: '48%',
    height: '15%',
    alignSelf: 'center',
    marginBottom: 60,
  },
  title: {
    color: '#A1A1A1',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
    backgroundColor: '#4c4f4d',
    borderRadius:10,
    padding: 16,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A3A48',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    color: '#FFF',
    height: 50,
  },
  checkmark: {
    color: 'green',
    fontSize: 18,
  },
  eyeIcon: {
    fontSize: 18,
    color: 'gray',
  },
  resendOtp: {
    color: '#F3A83B',
    textAlign: 'right',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  newUserButton: {
    backgroundColor: '#4A4A4A',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  loginButton: {
    backgroundColor: '#F3A83B',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  newUserText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  checkboxContainer: {
    width: 20,
    height: 20,
    borderRadius: 3,
    backgroundColor: '#4A4A4A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    width: 14,
    height: 14,
  },
  checkboxChecked: {
    backgroundColor: '#F3A83B',
  },
  termsText: {
    color: '#A1A1A1',
    fontSize: 12,
    marginLeft: 10,
    flex: 1,
  },
});

export default ValidateOTP