import { View, Text, StyleSheet, TextInput, TouchableOpacity, Animated } from 'react-native'
import React, {useEffect, useState, useRef} from 'react'
import { Svg, Rect, Path } from 'react-native-svg'

//State
import State from '@/app/hooks/toogleState'

const AddStock = () => {

  const radio = ["Samsung", "Xiaomi", "Vivo", "Oppo", "Realme", "Tecno", "Infinix", "Itel", "IPhone"]

  //State Function
  const addStockIncrement = State(state => state.addStockIncrement)
  const setAddStockIncrementPlus = State(state => state.setAddStockIncrementPlus)
  const setAddStockIncrementMin = State(state => state.setAddStockIncrementMin)
  const toogleAddStock = State(state => state.toogleAddStock) 

  if(!toogleAddStock) return null


  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.titleContainer}>
          <Text style={[styles.textColor, {fontWeight: 'bold', fontSize: 16}]}>Put your text here</Text>
          <View style={styles.colorWrapper}>
            <Text style={{color: '#BEA2FF'}}>Warna: </Text>
            <TextInput style={styles.textColor} placeholderTextColor='#773FF9' placeholder='Put your text here'/>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={setAddStockIncrementPlus}>
            <Svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <Rect width="15" height="15" rx="7.5" fill="#773FF9"/>
              <Path d="M12 8.14286H8.14286V12H6.85714V8.14286H3V6.85714H6.85714V3H8.14286V6.85714H12V8.14286Z" fill="white"/>
            </Svg>
          </TouchableOpacity>
          <Text>{addStockIncrement}</Text>
          <TouchableOpacity onPress={setAddStockIncrementMin}>
            <Svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <Rect width="15" height="15" rx="7.5" fill="#773FF9"/>
              <Path d="M12 8.15833H3V6.8418H12V8.15833Z" fill="white"/>
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
      <TextInput placeholder='imput' keyboardType='numeric'/>
    </View>
  )
}

export default AddStock

const styles = StyleSheet.create({
  container: {
    borderColor: '#773FF9',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#F8F5FF',
  },
  textColor: {
    color: '#773FF9'
  },
  topContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleContainer: {
    gap: 4
  },
  colorWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
