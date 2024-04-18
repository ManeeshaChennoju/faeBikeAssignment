import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { colors } from '../styles/colors';

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulate login functionality
    if (phoneNumber.trim() !== '') {
      setIsLoggedIn(true);
      navigation.navigate('MainHome'); // Navigate to Home screen
      Alert.alert('Login Successful', 'You are now logged in.');
    } else {
      Alert.alert('Invalid Phone Number', 'Please enter a valid phone number.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPhoneNumber('');
    Alert.alert('Logout Successful', 'You are now logged out.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Maneesha's Swiggy Clone</Text>
      <View style={styles.card}>
        {isLoggedIn ? (
          <>
            <Text style={styles.loggedInText}>You are logged in!</Text>
            <Button title="Logout" onPress={handleLogout} />
          </>
        ) : (
          <>
            <Text style={styles.title}>Enter your phone number:</Text>
            <TextInput
              style={styles.input}
              placeholder="Phone number"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              maxLength={10}
            />
            <Text style={styles.title}>Enter OTP:</Text> {/* Static OTP field */}
            <TextInput
              style={styles.input}
              placeholder="Enter OTP"
              keyboardType="numeric"
              maxLength={6}
            />
            <Button title="Login" onPress={handleLogin} />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  card: {
    width: '80%',
    backgroundColor: colors.cardBackground,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'left',
    color: '#fff',
  },
  loggedInText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: colors.inputBackground,
    color: colors.text,
  },
});

export default LoginScreen;
