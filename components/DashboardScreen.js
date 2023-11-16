import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TemperatureGraph from './TemperatureGraph';


const DashboardScreen = () => {
    const patientInfo = {
        name: 'Joonha Park',
        dob: '02/17/2001',
        bodyPart: 'Forearm',
        normalTempThreshold: '100°F',
        weight: '175 lbs',
        height: "6'0 ft",
        phone: '123-456-7890',
        sex: 'Male'
    };

    const currentTemperature = '98.6°F'; // Placeholder for temperature

    return (
        <View style={styles.container}>
            <View style={styles.patientInfoContainer}>
                <View style={styles.column}>
                    <Text style={styles.keyText}>Name: <Text style={styles.valueText}>{patientInfo.name}</Text></Text>
                    <Text style={styles.keyText}>DOB: <Text style={styles.valueText}>{patientInfo.dob}</Text></Text>
                    <Text style={styles.keyText}>Body Part: <Text style={styles.valueText}>{patientInfo.bodyPart}</Text></Text>
                    <Text style={styles.keyText}>Alarm at: <Text style={styles.valueText}>{patientInfo.normalTempThreshold}</Text></Text>

                </View>
                <View style={styles.column}>
                    <Text style={styles.keyText}>Weight: <Text style={styles.valueText}>{patientInfo.weight}</Text></Text>
                    <Text style={styles.keyText}>Height: <Text style={styles.valueText}>{patientInfo.height}</Text></Text>
                    <Text style={styles.keyText}>Phone: <Text style={styles.valueText}>{patientInfo.phone}</Text></Text>
                    <Text style={styles.keyText}>Sex: <Text style={styles.valueText}>{patientInfo.sex}</Text></Text>
                </View>
            </View>
            <View style={styles.outerRing}>
                <View style={styles.temperatureCircle}>
                    <Text style={styles.temperatureText}>{currentTemperature}</Text>
                </View>
            </View>
            <TemperatureGraph />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#90EE90'
    },
    patientInfoContainer: {
        flexDirection: 'row',
        margin: 20,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10
    },
    column: {
        flex: 1,
    },
    keyText: {
        fontSize: 12,
        color: 'black',
        marginBottom: 5
    },
    valueText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'blue'
    },
    outerRing: {
        margin: 20,
        width: 160,
        height: 160,
        borderRadius: 80,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    temperatureCircle: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: '#4CAF50',
        justifyContent: 'center',
        alignItems: 'center'
    },
    temperatureText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff' // White
    },
    graphContainer: {
        height: 200,
        width: '90%',
        backgroundColor: 'white', // Light grey
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }
});

export default DashboardScreen;