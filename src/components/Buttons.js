import * as React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';

export const TemperatureUnitSwitch = () => {
  return (
     <View style={styles.units}>
      <Pressable style={styles.celcius}>
        <Text style={styles.celciusText}>°C</Text>
      </Pressable>
      <Pressable style={styles.farenheit}>
        <Text style={styles.farenheitText}>°F</Text>
      </Pressable>
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
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#FFFFFF',
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
  celciusText: {
    height: 19,
    color: '#E32843',
    fontSize: 16,
    textAlign: 'center'
  },
  farenheitText: {
    height: 19,
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center'

  },
});
