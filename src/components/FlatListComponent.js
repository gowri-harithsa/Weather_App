import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {deleteCity} from '../redux/FavouritesListSlice';
import {useDispatch} from 'react-redux';
import {setFavourite} from '../redux/FavouritesListSlice';
import { deleteRecentSearchCity } from '../redux/FavouritesListSlice';

export const FavouriteLists = () => {
  const list = useSelector(state => state.favouritesListDetail.favList);

  const activeFav = require('../assets/images/icon_favourite_active.png');
  const dispatch = useDispatch();

  return (
    <View>
      <FlatList
        data={list}
        renderItem={({item}) => (
          <Pressable
            onLongPress={() => {
              dispatch(deleteCity({id: item.city}));
              dispatch(setFavourite(false));
            }}>
            <>
              <View style={styles.flatView}>
                <View style={styles.subView}>
                  <Text style={styles.cityText}>
                    {item.city}, {item.region}
                  </Text>
                  <View style={styles.climateView}>
                    <Image
                      source={item.weatherImage}
                      style={styles.weatherImage}
                    />
                    <Text style={styles.textTemperature}>
                      {item.temperature}°c
                    </Text>
                    <Text style={styles.textDetail}>{item.detail}</Text>
                  </View>
                </View>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(deleteCity({id: item.city}));
                    dispatch(setFavourite(false));
                  }}>
                  <Image source={activeFav} style={styles.imageFav} />
                </TouchableOpacity>
              </View>
            </>
          </Pressable>
        )}
        keyExtractor={item => item.city}
      />
    </View>
  );
};

export const RecentLists = () => {
  const list2 = useSelector(state => state.favouritesListDetail.recent);
  const dispatch = useDispatch();


  return (
    <View style={styles.container}>
      <FlatList
        data={list2}
        renderItem={({item}) => (
          <Pressable onLongPress = {() => dispatch(deleteRecentSearchCity({id: item.city}))} >
            <>
            <View style={styles.flatView}>
              <View style={styles.subView}>
                <Text style={styles.cityText}>{item.city},  {item.region}</Text>
                <View style={styles.climateView}>
                  <Image
                    source={item.weatherImage}
                    style={styles.weatherImage}
                  />
                  <Text style={styles.textTemperature}>{item.temperature}°C</Text>
                  <Text style={styles.textDetail}>{item.detail}</Text>
                </View>
              </View>
            </View>
            <View>
              <Image source={item.favourite} style={styles.imageFav} />
            </View>
          </>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatView: {
    // height: 80,
    backgroundColor: 'rgba(255,255,255,0.1)',
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 1,
  },
  cityText: {
    color: '#FFE539',
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Roboto-Medium'
  },
  subView: {
    flexDirection: 'column',
    marginLeft: 15,
    marginVertical: 15,
  },
  climateView: {
    flexDirection: 'row',
    marginVertical: 8,
    alignItems: 'center',
  },
  weatherImage: {
    height: 25,
    width: 25,
  },
  textTemperature: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
    marginHorizontal: 9,
    fontFamily: 'Roboto-Medium'
  },
  textDetail: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    marginHorizontal: 9,
    fontFamily: 'Roboto-Regular'
  },
  imageFav: {
    marginHorizontal: '85%',
    marginTop: -50,
    height: 17,
    width: 18,
  },
});
