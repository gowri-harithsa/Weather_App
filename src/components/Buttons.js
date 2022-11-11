import * as React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export const TemperatureUnitSwitch = ({onPressF}) => {
  return (
    <View style={styles.units}>
      <TouchableOpacity style={styles.celcius}>
        <Text style={styles.celciusText}>°C</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.farenheit} onPress={onPressF}>
        <Text style={styles.farenheitText}>°F</Text>
      </TouchableOpacity>
    </View>
  );
};

export const TemperatureUnitSwitch2 = ({onPressC}) => {
  return (
    <View style={styles.units}>
      <TouchableOpacity style={styles.celcius2} onPress={onPressC}>
        <Text style={styles.celciusText2}>°C</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.farenheit2}>
        <Text style={styles.farenheitText2}>°F</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  units: {
    flexDirection: 'row',
    marginTop: 7,
    marginHorizontal: 8,
  },
  celcius: {
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: '#FFFFFF',
    height: 30,
    width: 28,
    justifyContent: 'center',
    borderBottomStartRadius: 2,
    borderTopStartRadius: 2,
  },
  celcius2: {
    borderWidth: 2,
    borderColor: 'white',
    height: 30,
    width: 28,
    justifyContent: 'center',
    borderBottomStartRadius: 2,
    borderTopStartRadius: 2,
  },
  farenheit: {
    borderWidth: 2,
    borderColor: 'white',
    height: 30,
    width: 28,
    justifyContent: 'center',
    borderBottomEndRadius: 2,
    borderTopEndRadius: 2,
  },
  farenheit2: {
    borderWidth: 2,
    borderColor: 'white',
    height: 30,
    width: 28,
    justifyContent: 'center',
    borderBottomEndRadius: 2,
    borderTopEndRadius: 2,
    backgroundColor: '#FFFFFF',
  },
  celciusText: {
    height: 19,
    color: '#E32843',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
  farenheitText: {
    height: 19,
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
  celciusText2: {
    height: 19,
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
  farenheitText2: {
    height: 19,
    color: '#E32843',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
});
