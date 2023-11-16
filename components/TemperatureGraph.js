import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { View, Dimensions } from 'react-native';

const TemperatureGraph = () => {
    const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
            data: [98, 98.5, 97.8, 98.5, 99.2, 99, 98.5] // Placeholder 
        }]
    };

    return (
        <View>
            <LineChart
                data={data}
                width={Dimensions.get('window').width - 20} // Adjust based on your styling
                height={220}
                chartConfig={{
                    backgroundGradientFrom: 'green',
                    backgroundGradientTo: '#8B8000',
                    decimalPlaces: 1,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                }}
                style={{
                    marginVertical: 30,
                    borderRadius: 15
                }}
            />
        </View>
    );
};

export default TemperatureGraph;