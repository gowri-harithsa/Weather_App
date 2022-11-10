import {React, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Pressable,
  Alert,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {searchCity} from '../services/Auth';
import {getData} from '../redux/WeatherDataSlice';
import { setFavourite } from '../redux/FavouritesListSlice';
import { addCityRecent } from '../redux/FavouritesListSlice';

export const SearchComponent = ({setSearch, search, navigation}) => {

  const cityList = useSelector(state => state.WeatherDataList.list);

  const [close, setClose] = useState('');
  const [text, setText] = useState();
  const [data, setData] = useState('');

  const dispatch = useDispatch();

  const handleBackFav = () => {
    setSearch(!search);
  };
  const appearCloseButton = async value => {

    setText(value);
    setClose(require('../assets/images/icon_clear.png'));
    const Data = await searchCity(value);
    console.log(Data);
    setData(Data);
  };

  const handleRemove = () => {
    setText();
  };

  const handleSearchOperations = (city) =>  {

    const obj = {
      id: cityList.location?.name,
      city: cityList.location?.name,
      region: cityList.location?.region,
      temperature: cityList.current?.temp_c,
      detail: cityList.current?.condition.text,
      weatherImage: {uri: `https:${cityList.current?.condition.icon}`}
    };

    dispatch(getData(city));
    dispatch(setFavourite(false))
    dispatch(addCityRecent(obj));
    setSearch(false);
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeView}>
        <View style={styles.headerFav}>
          <View style={styles.leftHeader}>
            <Pressable onPress={handleBackFav}>
              <Image
                source={require('../assets/images/icon_back_black.png')}
                style={styles.backBtn}
              />
            </Pressable>
            <TextInput
              style={styles.textSearch}
              placeholder="Search for city"
              value={text}
              onChangeText={value => appearCloseButton(value)}
            />
          </View>

          {text ? (
            <TouchableOpacity onPress={handleRemove}>
              <Image source={close} style={styles.search} />
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
        <View style={styles.flatView}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <Pressable
                onPress={() => handleSearchOperations(item.name)}>
                <View style={styles.searchView}>
                  <Text style={styles.autoCompleteText}>{item.name}</Text>
                </View>
              </Pressable>
            )}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  safeView: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  autoCompleteText: {
    marginLeft: 20,
    fontFamily: 'Roboto-Regular'
  },
  searchView: {
    height: 54,
    width: '100%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    borderBottomColor: 'rgba(105,105,105,0.2)',
    borderBottomWidth: 1,
  },
  headerFav: {
    height: 56,
    width: '100%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'rgba(105,105,105,0.2)',
    borderBottomWidth: 1,
  },
  flatView: {
    flex: 1,
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtn: {
    height: 16,
    width: 16,
    marginLeft: 16,
  },
  textSearch: {
    color: 'black',
    fontSize: 14,
    marginLeft: 18,
    fontFamily: 'Roboto-Regular'

  },
  search: {
    tintColor: 'black',
    height: 14,
    width: 14,
    marginRight: 20,
  },
});
