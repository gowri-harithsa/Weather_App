import * as React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

export const ScrollBar = () => {
  const data = useSelector(state => state.WeatherDataList.list);

  return (
    <View style={styles.scrollView}>
      <ScrollView horizontal={true}>
        <View style={styles.bottomView}>
          <View style={styles.temperatureView}>
            <Image source={require('../assets/images/temperatureInfo.png')} />
            <View style={styles.descriptionTextView}>
              <Text style={styles.descriptionText}>Min - Max</Text>
              <Text style={styles.textDegree}>22° -{data.current?.temp_c}°</Text>
            </View>
          </View>
          <View style={styles.precipitationView}>
            <Image source={require('../assets/images/precipitationInfo.png')} />
            <View style={styles.descriptionTextView}>
              <Text style={styles.descriptionText}>Precipitation</Text>
              <Text style={styles.textDegree}>0%</Text>
            </View>
          </View>
          <View style={styles.humidityView}>
            <Image source={require('../assets/images/humidityInfo.png')} />
            <View style={styles.descriptionTextView}>
              <Text style={styles.descriptionText}>Humidity</Text>
              <Text style={styles.textDegree}>
                {data.current?.humidity}
                %</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    borderColor: '#ffffff',
    height: 100,
    backgroundColor: 'rgba(255,255,255,0.1)',
    width: '100%',
  },
  bottomView: {
    flexDirection: 'row',
  },
  temperatureView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  precipitationView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 35,
  },
  humidityView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  descriptionTextView: {
    flexDirection: 'column',
    marginLeft: 15,
  },
  descriptionText: {
    height: 15,
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: 'Roboto-Regular'

  },
  textDegree: {
    height: 21,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Roboto-Medium'

  },
});
