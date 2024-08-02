import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Ingredients from '../assets/Ingredient'
import { useNavigation, useRoute } from '@react-navigation/native'

const Detail = () => {
  const navigation = useNavigation();
  const route = useRoute(); // All item get NewItem
  // useEffect(()=>{
  //   console.warn(route.params.name)
  // })


  //For Counting Value
  const [value, setValue] = useState(1);
  /*
  const incrementValue = () => {
    setValue(value + 1);
  };
  const decrementValue = () => {
    setValue ((prevValue) => Math.max(prevValue - 1, 1));
  };
  */

  return (
    <View>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: responsiveWidth(4),
            paddingTop: responsiveHeight(2)
            // marginTop:responsiveHeight(2),
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()} //for back button
          >
            <Image source={require('../images/2.png')}
              style={{
                height: responsiveHeight(6),
                width: responsiveWidth(10),
                tintColor: 'black',
              }}
            />
          </TouchableOpacity>


          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            //marginLeft:10,
            // width: responsiveWidth(25),
            gap: responsiveHeight(2),


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
              fontSize: responsiveFontSize(2.5),
              fontWeight: 'bold',
              color: 'black'
            }}>
              290 Calories
            </Text>
          </View>

          <View>
            <Image source={require('../images/heart1.png')}
              style={{
                resizeMode: 'contain',
                height: responsiveHeight(4),
                width: responsiveWidth(8),
                tintColor: '#eda35a'
              }}
            />
          </View>
        </View>

        <Image source={route.params.image}// All New Product image
          style={{
            resizeMode: 'contain',
            height: responsiveHeight(40),
            width: responsiveWidth(70),
            justifyContent: 'center',
            flexDirection: 'row',
            marginLeft: responsiveWidth(16)
          }}
        />

        <View style={{
          justifyContent: 'center',
          flexDirection: 'row',
          backgroundColor: '#d2eaee',
          borderRadius: 100,
          marginLeft: responsiveWidth(35),
          marginRight: responsiveWidth(35),
          padding: responsiveHeight(0.6)
          // fontWeight:responsiveWidth(80),

        }}>

          {/* <TouchableOpacity onPress={incrementValue}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}> +  </Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            {value} </Text>
          <TouchableOpacity onPress={decrementValue}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}> - </Text>
          </TouchableOpacity> */}

          <TouchableOpacity onPress={()=>setValue(value+1)}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}> +  </Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            {value} </Text>
          <TouchableOpacity onPress={()=> value>1 ? setValue(value-1) : 1}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}> - </Text>
          </TouchableOpacity>
        </View>
        
        <View
          style={{
            marginTop: responsiveHeight(2),
            marginHorizontal: responsiveWidth(2),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',

          }}>
          <View >
            <Text style={{
              fontWeight: 'bold',
              fontSize: responsiveFontSize(3),
              color: 'black',
            }}>
              {/* Get All Products Name */}
              {route.params.des}
            </Text>
            <Text style={{
              fontWeight: 'bold',
              fontSize: responsiveFontSize(1.5),
              marginTop: responsiveHeight(1)
            }}>
              Beef Burger
            </Text>
          </View>
          <Text style={{ fontSize: responsiveFontSize(2.8) }}>

            {/* Get All Products Price */}
            ${route.params.price}
          </Text>

        </View>


        <Text style={{
          fontWeight: 'bold',
          fontSize: responsiveFontSize(3),
          color: 'black',
          marginTop: responsiveHeight(2),
          marginLeft: responsiveWidth(2)
        }}>Ingredients</Text>

        <Ingredients />

        <Text style={{
          fontWeight: 'bold',
          fontSize: responsiveFontSize(3),
          color: 'black',
          marginTop: responsiveHeight(2),
          marginLeft: responsiveWidth(2)
        }}>Details
        </Text>
        <Text style={{
          fontSize: responsiveFontSize(2),
          color: 'black',
          marginTop: responsiveHeight(1),
          marginLeft: responsiveWidth(2)
        }}>
          {/*  Get All Products  Details*/}
          {route.params.details}
        </Text>
      </ScrollView>

      <TouchableOpacity style={{
        backgroundColor: 'black',
        borderRadius: responsiveWidth(6),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        bottom: responsiveHeight(9),
        height: responsiveWidth(17),
        width: responsiveWidth(17),
      }}>
        <Image source={require('../images/cart.png')}
          style={{
            position: 'absolute',
            height: responsiveHeight(6.5),
            width: responsiveWidth(13),
            resizeMode: 'contain',
            tintColor: 'white'
          }} />
      </TouchableOpacity>


    </View>

  )
}

export default Detail

const styles = StyleSheet.create({})