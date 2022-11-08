import * as React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  Pressable,
} from 'react-native';
import {ScrollBar} from '../components/HorizontalScrollbarView';
import {TemperatureUnitSwitch} from '../components/Buttons';

const Home = ({navigation}) => {
  const handleHamburgerMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/backgroundImage.png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.headerView}>
          <View style={styles.logo_menu}>
            <Pressable onPress={handleHamburgerMenu}>
              <Image
                source={require('../assets/images/hamburgerMenu.png')}
                style={styles.menuImage}
              />
            </Pressable>
            <Image
              source={require('../assets/images/appLogo.png')}
              style={styles.logoImage}
            />
          </View>
          <Image
            source={require('../assets/images/search.png')}
            style={styles.searchImage}
          />
        </View>
        <ScrollView>
          <View style={styles.secondView}>
            <Text style={styles.calendar}>WED, 28 NOV 2018, 11:35 AM </Text>
            <Text style={styles.place}>Udupi, Karnataka</Text>
            <View style={styles.favouriteView}>
              <Image source={require('../assets/images/favourite.png')} />
              <Text style={styles.favouriteText}>Add to favourite</Text>
            </View>
          </View>
          <View style={styles.climateDetailView}>
            <Image
              source={require('../assets/images/mostlySunny.png')}
              style={styles.sunny}
            />
            <View style={styles.temperature}>
              <Text style={styles.text31}>31</Text>
              <TemperatureUnitSwitch />
            </View>
            <Text style={styles.textSunny}>Mostly Sunny</Text>
          </View>
        </ScrollView>
        <ScrollBar />
      </ImageBackground>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  headerView: {
    flexDirection: 'row',
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 3,
    paddingEnd: 20,
  },
  logo_menu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuImage: {
    height: 12,
    width: 18,
    marginLeft: 16,
  },
  logoImage: {
    height: 24,
    width: 113,
    marginLeft: 30,
  },
  searchImage: {
    height: 17.4,
    width: 17.4,
  },
  secondView: {
    flexDirection: 'column',
    marginVertical: 60,
  },
  calendar: {
    color: '#FFFFFF',
    opacity: 0.6,
    fontSize: 13,
    letterSpacing: 1.5,
    textAlign: 'center',
  },
  place: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: 10,
  },
  favouriteView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  favouriteText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: 20,
    marginHorizontal: 5,
  },
  climateDetailView: {
    marginVertical: 25,
  },
  sunny: {
    height: 67,
    width: 64,
    alignSelf: 'center',
  },
  temperature: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text31: {
    color: '#FFFFFF',
    fontSize: 52,
    fontWeight: '500',
    marginVertical: 5,
  },
  textSunny: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
  },
});
