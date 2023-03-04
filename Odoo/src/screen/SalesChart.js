import {View, Text, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  // ContributionGraph,
  // StackedBarChart,
} from 'react-native-chart-kit';
const SalesChart = () => {
  return (
    <View>
      <ScrollView>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Text style={{fontSize: 15}}>Sales Chart screen 1 </Text>
          <Text style={{fontSize: 15}}>Sales Chart screen 2 </Text>
        </View>
        <View
          style={{padding: '1%', alignContent: 'center', alignItems: 'center'}}>
          <LineChart
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={380} // from react-native
            height={300}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: '#33ccff',
              backgroundGradientFrom: '#ff99cc',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 10,
            }}
          />
          <ProgressChart
            data={{
              labels: ['Swim', 'Bike', 'Run', 'Fly'], // optional
              data: [0.7, 0.4, 0.8, 0.9],
            }}
            width={380}
            height={220}
            strokeWidth={16}
            radius={32}
            chartConfig={{
              backgroundColor: '#33ccff',
              backgroundGradientFrom: '#ff99cc',
              backgroundGradientTo: '#33c',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 10,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 10,
            }}
          />
          <PieChart
            data={[
              {
                name: 'Seoul',
                population: 215,
                color: 'rgba(131, 167, 234, 1)',
                legendFontColor: '#000',
                legendFontSize: 15,
              },
              {
                name: 'Toronto',
                population: 180,
                color: '#F00',
                legendFontColor: '#000',
                legendFontSize: 15,
              },
              {
                name: 'Beijing',
                population: 127,
                color: 'red',
                legendFontColor: '#000',
                legendFontSize: 15,
              },
              {
                name: 'New York',
                population: 108,
                color: '#ffffff',
                legendFontColor: '#000',
                legendFontSize: 15,
              },
              {
                name: 'Moscow',
                population: 119,
                color: 'rgb(0, 0, 255)',
                legendFontColor: '#000',
                legendFontSize: 15,
              },
            ]}
            width={380}
            height={220}
            chartConfig={{
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            }}
            accessor={'population'}
            backgroundColor={'lightgrey'}
            padding={'10'}
            center={[0, 0]}
            absolute
            style={{
              marginVertical: 4,
              borderRadius: 10,
            }}
          />

          <BarChart
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={380}
            height={300}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: '#33ccff',
              backgroundGradientFrom: '#000',
              backgroundGradientTo: '#33ccff',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 1,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '1',
                stroke: '#ffa726',
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 10,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SalesChart;
