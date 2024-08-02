import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const catagories = [
  {
    id: '1',
    name: 'Burgar',
    image: require('../images/5.png'),
    color: '#d4fabe',
  },
  {
    id: 2,
    name: 'Burrito',
    image: require('../images/6.png'),
    color: '#e6e9f5'
  },
  {
    id: 3,
    name: 'Salad',
    image: require('../images/7.png'),
    color: '#d4fabe'
  },
  {
    id: 4,
    name: 'Pizza',
    image: require('../images/6.png'),
    color: '#f5e6e9'
  }];


const Catagories = () => {
  return (
    <FlatList
      data={catagories}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => {

        return (
          <TouchableOpacity
            key={index}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: item.color,
              height: responsiveHeight(9),
              width: responsiveWidth(37),
              justifyContent: 'center',
              marginLeft: responsiveWidth(2),
              borderRadius: responsiveWidth(9),
              marginTop: responsiveWidth(2)
            }}>
            <Image source={item.image}
              style={{
                height: responsiveHeight(16),
                width: responsiveWidth(16),
                resizeMode: 'contain',
                marginLeft: responsiveWidth(-1)
              }}
            />
            <Text
              style={{
                fontSize: responsiveFontSize(2.1),
                color: 'black',
                fontWeight: 'bold'
              }}>
              {/* Food that meet your needs : name */}
              {item.name}
            </Text>

          </TouchableOpacity>
        )
      }}
    // keyExtractor={item => item.id}
    />
  )
}

export default Catagories

const styles = StyleSheet.create({})
