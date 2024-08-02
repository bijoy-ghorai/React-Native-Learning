import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { Picker } from '@react-native-picker/picker'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Catagories from '../assets/Catagories'
import NewProducts from '../assets/NewItem'

const HomeScreen = () => {
  const [selectCityName, setSelectCityName] = useState("Delhi")
  const [cityName] = useState(
    ['Delhi',
      'Mumbai',
      'Kolkata',
      'Pune',
      'Chennai',
      'Hyderabad',
      'Bangalore',
      'Kochi']).sort()
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: 'white' }}>
      <SafeAreaView style={{}}>
        <View>
          {/* search and menu Bar */}
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              padding: responsiveWidth(3),
              marginLeft: responsiveWidth(10)
            }}
          >
            <TouchableOpacity>
              <Image
                source={require('../images/1.png')}
                style={{
                  height: responsiveWidth(8),
                  width: responsiveWidth(11),
                  tintColor: 'black'
                }}
              />
            </TouchableOpacity>

            <Picker selectedValue={selectCityName}
              onValueChange={(item) => {
                setSelectCityName(item)
              }}
            >
              {
                cityName.map((l) => (
                  <Picker.Item key={1} label='l' value={l} />
                ))
              }
            </Picker>
            <TouchableOpacity>
              <Image
                source={require('../images/search.png')}
                style={{
                  height: heightPercentageToDP(3),
                  width: widthPercentageToDP(7),
                  tintColor: 'black',
                  margin: responsiveWidth(2)
                }}
              />
            </TouchableOpacity>
          </View>

          {/* front text */}
          <View style={{
            marginTop: responsiveHeight(0),
            marginLeft: responsiveWidth(4.3)
          }}>
            <Text style={styles.textStyle}>Food that </Text>
            <Text style={styles.textStyle}>meet your needs</Text>
          </View>

          {/* catagories */}
          <Catagories />
        </View>

        {/* NewProducts  Text*/}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: responsiveWidth(5),
            marginTop: responsiveHeight(5),
            marginBottom: responsiveHeight(4)
          }}
        >
          <Text
            style={{
              fontSize: responsiveFontSize(3),
              fontWeight: '900',
              color: 'black'
            }}>New Product</Text>
          <Image
            source={require('../images/threeDot.png')}
            style={{
              resizeMode: 'contain',
              height: responsiveHeight(2),
              width: responsiveWidth(5),
            }}
          />
        </View>

        <NewProducts />

      </SafeAreaView>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black'
  }
})