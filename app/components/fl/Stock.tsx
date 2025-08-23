import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import { Svg, Rect, Path } from "react-native-svg"

type Item = {
  tipe: string
  warna: string
  jumlah: number
}

type ItemList = {
  data: Item[]
  onIncrement: (tipe: string) => void
  onDecrement: (tipe: string) => void
}

export default function FLStock({data, onIncrement, onDecrement}: ItemList) {
  return (
    <View style={{gap: 8}}>
      {data.map((item, index) => (
        <View style={styles.container} key={index}>
          <View style={styles.tipe}>
            <Text style={[styles.color, styles.title]}>{item.tipe}</Text>
            <Text style={[{color: '#dabaffff'}, styles.colorType]}>
              Warna <Text style={[styles.color, {fontWeight: 700}]}>{item.warna}</Text>
            </Text>
          </View>
          <View style={{width: 72, justifyContent: 'space-between', flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => onDecrement(item.tipe)}>
              <Svg width="16" height="16" viewBox="0 0 15 15" fill="none">
                <Rect width="15" height="15" rx="7.5" fill="#FFF1FF"/>
                <Path d="M12 8.15833H3V6.8418H12V8.15833Z" fill="#6538CD"/>
              </Svg>
            </TouchableOpacity>
            <Text style={[styles.color, {fontWeight: 700, fontSize: 16}]}>{item.jumlah}</Text>
            <TouchableOpacity onPress={() => onIncrement(item.tipe)}>
              <Svg width="16" height="16" viewBox="0 0 15 15" fill="none">
                <Rect width="15" height="15" rx="7.5" fill="#FFF1FF"/>
                <Path d="M12 8.14286H8.14286V12H6.85714V8.14286H3V6.85714H6.85714V3H8.14286V6.85714H12V8.14286Z" fill="#6538CD"/>
              </Svg>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#773FF9',
    paddingVertical: 24,
    paddingHorizontal: 16,
    width: '100%',
    color: 'white',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tipe: {
    gap: 4
  },
  color: {
    color: 'white'
  },
  title: {
    fontWeight: 700,
    fontSize: 16
  },
  colorType: {
    fontSize: 12
  }
})