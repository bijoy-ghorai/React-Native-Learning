import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const ingredientsIteam = [
  {
    id: 1,
    image: require('../images/11.png')
  },
  {
    id: 2,
    image: require('../images/13.png')
  },
  {
    id: 3,
    image: require('../images/12.png')
  },
  {
    id: 4,
    image: require('../images/8.png')
  },
  {
    id: 5,
    image: require('../images/bl.png')
  }
]
const Ingredients = () => {
  return (
    <FlatList
      data={ingredientsIteam}
      horizontal
      showsHorizontalScrollIndicator={false}

      renderItem={({ item, index }) => {
        return (

          <View
            key={index}
            style={{
              // flexDirection: 'row',
              // alignItems: 'center',
              // backgroundColor: item.color,
              borderRadius: responsiveWidth(4),
              borderWidth: responsiveWidth(0.1),
              marginLeft: responsiveWidth(4),
              marginTop: responsiveHeight(2),
              paddingHorizontal: responsiveWidth(2),
              paddingVertical: responsiveWidth(1)
            }}>
            <Image source={item.image}
              style={{
                resizeMode: 'contain',
                // justifyContent: 'space-between',
                height: responsiveHeight(6),
                width: responsiveWidth(11),
              }} />
          </View>  
        )    
      }} />
    
  )
    
}

export default Ingredients

const styles = StyleSheet.create({})