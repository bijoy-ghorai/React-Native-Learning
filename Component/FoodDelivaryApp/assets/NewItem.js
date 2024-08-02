import { SafeAreaView, ScrollView, StyleSheet, Text, Image, TouchableOpacity, View, FlatList, } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native'

const newProductItem = [
  {
    id: 1,
    name: 'Beef Burger',
    des: 'Smokehouse',
    price: 12.99,
    image: require('../images/4.png'),
    details: "The most unique fire grilled patty, flame grilled, charred, seared, well- done All natural beef, grass - feed beef, Fiery, juicy, greacy.delicous moist The most unique fire grilled patty, flame grilled, charred, seared, well - done All natural beef, grass - feed beef,Fiery, juicy, greacy.delicous moist"
  },
  {
    id: 2,
    name: 'Beef Burger',
    des: 'Honey Chilli',
    price: 13.12,
    image: require('../images/9.png'),
    details: "The most unique fire grilled patty, flame grilled, charred, seared, well- done All natural beef, grass - feed beef, Fiery, juicy, greacy.delicous moist The most unique fire grilled patty, flame grilled, charred, seared, well - done All natural beef, grass - feed beef,Fiery, juicy, greacy.delicous moist"
  },
  {
    id: 3,
    name: 'Pizza',
    des: 'Adios Pizza',
    price: 10.01,
    image: require('../images/6.png'),
    details: "The most unique fire grilled patty, flame grilled, charred, seared, well- done All natural beef, grass - feed beef, Fiery, juicy, greacy.delicous moist The most unique fire grilled patty, flame grilled, charred, seared, well - done All natural beef, grass - feed beef,Fiery, juicy, greacy.delicous moist"
  },
  {
    id: 4,
    name: 'Beef Burger',
    des: 'Burrito',
    price: 11,
    image: require('../images/10.png'),
    details: "The most unique fire grilled patty, flame grilled, charred,  seared, well- done All natural beef, grass - feed beef, Fiery, juicy, greacy.delicous moist The most unique fire grilled patty, flame grilled, charred, seared, well - done All natural beef, grass - feed beef,Fiery, juicy, greacy.delicous moist"
  }
]


const NewProducts = () => {
  const navigation=useNavigation()
  return (
    <FlatList
      data={newProductItem}
      numColumns={2}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
          onPress={()=>navigation.navigate('Details',item)}
            key={index}
            style={{
              justifyContent: 'center',
              // alignItems: 'center',
              backgroundColor: '#eeeee4',
              height: responsiveHeight(40),
              width: responsiveWidth(46),
              marginBottom: responsiveHeight(1),
              borderRadius: responsiveWidth(8),
              marginLeft: responsiveWidth(2.5),
              marginTop: index % 2 == 1 ? responsiveHeight(4) : 0,
              paddingHorizontal: responsiveWidth(3)
            }}>

            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              //marginLeft:10,
              // width: responsiveWidth(25),
              justifyContent: 'space-around',
              marginBottom: responsiveHeight(2),

            }}>
              <Image
                source={require('../images/3.png')}
                style={{
                  resizeMode: 'contain',
                  height: responsiveHeight(3),
                  width: responsiveWidth(5)
                }}
              />
              <Text style={{
                fontSize: responsiveFontSize(2),
                fontWeight: 'bold',
                color: 'black'
              }}>
                290 Calories
              </Text>
            </View>

            {/* New PRODUCT Image */}
            <Image source={item.image}
              style={{
                height: responsiveHeight(15),
                width: responsiveHeight(20),
                resizeMode: 'contain'
              }}
            />

            <View style={{
              marginTop: responsiveHeight(2),
              marginLeft: responsiveWidth(2)
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: responsiveFontSize(2),
                color: 'black',
              }}>

              {/* All New Product Name Get */}
                {item.des}
              </Text>
              
              <Text style={{
                fontWeight: 'bold',
                fontSize: responsiveFontSize(1.5),
                marginTop: responsiveHeight(1)
              }}>
                Beef Burger
              </Text>
            </View>

          </TouchableOpacity>
        )
      }}
    />
  )
}

export default NewProducts

const styles = StyleSheet.create({})
//ei plus minus a touch korle 