/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import DashboardScreen from './components/DashboardScreen';
import SignUpScreen from './components/SignUpScreen';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: 'blue'
  };

  useEffect(() => {
    checkForCrashAndFetchData();
}, []);

const checkForCrashAndFetchData = async () => {
    try {
        const hasCrashed = await AsyncStorage.getItem('hasCrashed');
        if (hasCrashed === 'true') {
            // The app crashed during the last session
            // Fetch client data from API here
        }
        // Setting 'hasCrashed' to true for the current session
        await AsyncStorage.setItem('hasCrashed', 'true');
    } catch (error) {
        console.error('Error checking crash status: ', error);
    }
};

// Function to be called when app is closing or going to background
const setAppCrashStatus = async () => {
    try {
        await AsyncStorage.setItem('hasCrashed', 'false');
    } catch (error) {
        console.error('Error setting crash status: ', error);
    }
};

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        <SignUpScreen />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
