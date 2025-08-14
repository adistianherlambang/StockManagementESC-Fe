import { View, Text, StyleSheet, TextInput, TouchableOpacity, Animated } from 'react-native'
import React, {useEffect, useState, useRef} from 'react'
import { Svg, Rect, Path, Circle } from 'react-native-svg'
import { MotiView } from 'moti'

//State
import State from '@/app/hooks/toogleState'

const AddStock = () => {

  const radio = ["Samsung", "Xiaomi", "Vivo", "Oppo", "Realme", "Tecno", "Infinix", "Itel", "IPhone"]

  //State Function
  const addStockIncrement = State(state => state.addStockIncrement)
  const setAddStockIncrementPlus = State(state => state.setAddStockIncrementPlus)
  const setAddStockIncrementMin = State(state => state.setAddStockIncrementMin)
  const setToogleAddStock = State(state => state.setToogleAddStock)

  const [isSelected, setIsSelected] = useState<string | null>(null)

  return (
    <MotiView
      style={styles.container}
      from={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{
        opacity: { type: 'timing', duration: 200 },
        scale: { type: 'timing', duration: 200 }
      }}
    >
      <View style={styles.topContainer}>
        <View style={styles.titleContainer}>
          <TextInput style={[styles.textColor, {fontWeight: 'bold', fontSize: 16}]} placeholder='Put your text here' placeholderTextColor='#773FF9' />
          <View style={styles.colorWrapper}>
            <Text style={{color: '#BEA2FF'}}>Warna: </Text>
            <TextInput style={styles.textColor} placeholderTextColor='#773FF9' placeholder='Put your text here'/>
          </View>
        </View>
        <View style={styles.incrementWrapper}>
          <TouchableOpacity onPress={setAddStockIncrementMin}>
            <Svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <Rect width="15" height="15" rx="7.5" fill="#773FF9"/>
              <Path d="M12 8.15833H3V6.8418H12V8.15833Z" fill="white"/>
            </Svg>
          </TouchableOpacity>
          <Text style={[styles.textColor, styles.increment]}>{addStockIncrement}</Text>
          <TouchableOpacity onPress={setAddStockIncrementPlus}>
            <Svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <Rect width="15" height="15" rx="7.5" fill="#773FF9"/>
              <Path d="M12 8.14286H8.14286V12H6.85714V8.14286H3V6.85714H6.85714V3H8.14286V6.85714H12V8.14286Z" fill="white"/>
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.radio}>
        {radio.map((item, index) => (
          <TouchableOpacity style={styles.radioButton} key={index} onPress={() => setIsSelected(item)}>
            {isSelected == item ? 
              <Svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <Rect width="10" height="10" rx="5" fill="#773FF9"/>
                <Circle cx="5.00028" cy="5.00003" r="2.14286" fill="white"/>
              </Svg>
              :
              <Svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <Rect x="0.5" y="0.5" width="9" height="9" rx="4.5" stroke="#773FF9"/>
              </Svg>
            }
            <Text style={styles.textColor}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={[styles.button, styles.simpan]}>
          <Text style={{color: 'white', fontWeight: 600}}>Simpan</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={setToogleAddStock} style={[styles.button, styles.batal]}>
          <Text style={[styles.textColor, {fontWeight: 600}]}>Batal</Text>
        </TouchableOpacity>
      </View>
    </MotiView>
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
    gap: 16
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
    alignItems: 'center',
  },
  incrementWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  increment: {
    fontWeight: 700,
    fontSize: 16
  },
  radio: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  buttonWrapper: {
    gap: 8
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 8
  },
  simpan: {
    backgroundColor: '#773FF9',
  },
  batal: {
    borderColor: '#773FF9',
    borderWidth: 1
  }
})
