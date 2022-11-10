import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import {ScrollBar} from '../components/HorizontalScrollbarView';
import {TemperatureUnitSwitch} from '../components/Buttons';
import {TemperatureUnitSwitch2} from '../components/Buttons';
import {SearchComponent} from '../components/Search';
import {useDispatch, useSelector} from 'react-redux';
import {getData} from '../redux/WeatherDataSlice';
import {addCity} from '../redux/FavouritesListSlice';

const Home = ({navigation}) => {
  const [date, setDate] = useState('');
  const currentDateTime = () => {
    const dateTimeMoment = moment()
      .utcOffset('+05:30')
      .format('ddd, DD MMM YY    hh:mm a')
      .toUpperCase();
    setDate(dateTimeMoment);
  };
  useEffect(() => {
    dispatch(getData());
    currentDateTime();
  }, []);

  const dispatch = useDispatch();

  const data = useSelector(state => state.WeatherDataList.list);

  const [search, setSearch] = useState(false);
  const [degree, setDegree] = useState(data.current?.temp_c);
  // const weatherIcon = data.current.condition.icon
  // const icon = require(weatherIcon);
  const handleHamburgerMenu = () => {
    navigation.openDrawer();
  };
  const handleSearch = () => {
    setSearch(!search);
  };

  return (
    <View style={styles.container}>
      {!search ? (
        <>
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
              <Pressable onPress={handleSearch}>
                <Image
                  source={require('../assets/images/search.png')}
                  style={styles.searchImage}
                />
              </Pressable>
            </View>
            <ScrollView>
              <View style={styles.secondView}>
                <Text style={styles.calendar}>{date} </Text>
                <View style={styles.cityNameView}>
                  <Text style={styles.place}>{data.location?.name},</Text>
                  <Text style={styles.place}>{data.location?.region}</Text>
                </View>
                <View style={styles.favouriteView}>
                  <TouchableOpacity
                    onPress={() => {
                      const obj = {
                        id: data.location?.name,
                        city: data.location?.name,
                        region: data.location?.region,
                        temperature: data.current?.temp_c,
                        detail: data.current?.condition.text,
                      };
                      dispatch(addCity(obj));
                    }}>
                    <Image source={require('../assets/images/favourite.png')} />
                  </TouchableOpacity>
                  <Text style={styles.favouriteText}>Add to favourite</Text>
                </View>
              </View>
              <View style={styles.climateDetailView}>
                <Image
                  source={require('../assets/images/mostlySunny.png')}
                  style={styles.sunny}
                />

                <View style={styles.temperature}>
                  {degree == data.current?.temp_c ? (
                    <>
                      <Text style={styles.text31}>{data.current?.temp_c}</Text>

                      <TemperatureUnitSwitch
                        onPressF={() => setDegree(data.current?.temp_f)}
                      />
                    </>
                  ) : (
                    <>
                      <Text style={styles.text31}>{data.current?.temp_f}</Text>

                      <TemperatureUnitSwitch2
                        onPressC={() => setDegree(data.current?.temp_c)}
                      />
                    </>
                  )}
                </View>

                <Text style={styles.textSunny}>
                  {data.current?.condition.text}
                </Text>
              </View>
            </ScrollView>
            <ScrollBar />
          </ImageBackground>
        </>
      ) : (
        <SearchComponent setSearch={setSearch} search={search} />
      )}
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
  cityNameView: {
    flexDirection: 'row',
    justifyContent: 'center',
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
