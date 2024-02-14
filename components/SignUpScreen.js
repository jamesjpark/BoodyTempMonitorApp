// SignUpScreen.js

import React, { useState } from 'react';
import axios from 'axios';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';

const SignUpScreen = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bodyPart, setBodyPart] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [sex, setSex] = useState('');


    const handleSignUp = async () => {
        try {
        const response = await axios.post("http://10.0.2.2:8000/register/", {
            username: username,
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            phone_number: phoneNumber,
            weight: weight !== '' ? parseInt(weight, 10) : 0, // Convert weight to an integer
            height: height !== '' ? parseInt(height, 10) : 0, // Convert height to an integer
            body_part: bodyPart,
            sex: sex
        });
        console.log(response.data);
        // Handle success, e.g., navigate to another screen, show success message
        } catch (error) {
        console.error(error.response ? error.response.data : error.message);
        // Handle errors, e.g., show error message to the user
        }
    };

    return (
        <View style={styles.container}>
            <CustomTextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
            />
            <CustomTextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                style={styles.input}
            />
            <CustomTextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            <CustomTextInput
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
                style={styles.input}
                />
            <CustomTextInput
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
                style={styles.input}
            />
            <CustomTextInput
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
                style={styles.input}
            />
            <CustomTextInput
                placeholder="Weight"
                value={weight}
                onChangeText={text => setWeight(text)}
                keyboardType="numeric"
                style={styles.input}
            />
            <CustomTextInput
                placeholder="Height"
                value={height}
                onChangeText={text => setHeight(text)}
                keyboardType="numeric"
                style={styles.input}
            />
            <CustomTextInput
                placeholder="Affected Body Part"
                value={bodyPart}
                onChangeText={setBodyPart}
                style={styles.input}
            />
            <CustomTextInput
                placeholder="Sex"
                value={sex}
                onChangeText={setSex}
                style={styles.input}
            />
            <TouchableOpacity onPress={handleSignUp} style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

    const theme = {
        colors: {
        primary: '#4CAF50', // Green shade
        secondary: '#FFFFFF', // White
        accent: '#2196F3', // Blue shade
        text: '#263238', // Almost black
        error: '#f44336', // Red
        },
        spacing: {
        small: 8,
        medium: 16,
        large: 24,
        },
        borderRadius: {
        small: 4,
        medium: 8,
        large: 12,
        }
    };

    const CustomTextInput = ({placeholder, value, onChangeText, keyboardType = 'default'}) => {
        return (
          <TextInput
            placeholder={placeholder}
            placeholderTextColor='#4CAF50' // Assuming a placeholder color; adjust as needed
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            style={styles.input}
          />
        );
      };
    

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#FFFFFF', // White background
            padding: 20,
        },
        input: {
            height: 40,
            marginBottom: 12,
            borderWidth: 1,
            borderColor: '#4CAF50', // Green border
            backgroundColor: '#E8F5E9', // Light green background for input
            padding: 10,
            color: '#4CAF50', // Green text
        },
        button: {
            backgroundColor: '#4CAF50', // Green background for the button
            padding: 15,
            borderRadius: 5,
            alignItems: 'center',
        },
        buttonText: {
            color: '#FFFFFF', // White text for the button
            fontSize: 16,
        },
    });

    

export default SignUpScreen;
