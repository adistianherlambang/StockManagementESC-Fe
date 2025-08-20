import { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { AnimatePresence, MotiView } from "moti";
import {Svg, Path} from "react-native-svg";
import AddStock from "@/app/components/fl/AddStock";

import styles from "./style";

//State
import State from "@/app/hooks/toogleState";

import BaseView from "@/app/style/BaseView";

export default function DetailPage() {

  const toogleAddStock = State(state => state.toogleAddStock)
  const setToogleAddStock = State(state => state.setToogleAddStock)

  const {type} = useLocalSearchParams()

  const [json, setJson] = useState<any[]>([])
  const [searchQuery, setSearchQuery] = useState<any>('')

  useEffect(() => {
    const ambilData = async () => {
      try {
        const res = await fetch("https://125b67597373.ngrok-free.app/data")
        const data = await res.json()
        const filtered = data.filter((p : any) => p.brand === type)
        setJson(filtered)
      }
      catch (err) {console.error(err)}
    }
    ambilData()
  }, [type]) 

  const handleButton = () => {
    console.log(json)
    router.back()
  }

  return(
    <BaseView>
      <View>
        <Text>sssupisdfiwe</Text>
        <View>
          <View style={styles.searchContainer}>
            <View style={styles.searchWrapper}>
              <Svg width="16" height="16" viewBox="0 0 21 21" fill="none">
                <Path d="M20 20L15.514 15.506M18 9.5C18 11.7543 17.1045 13.9163 15.5104 15.5104C13.9163 17.1045 11.7543 18 9.5 18C7.24566 18 5.08365 17.1045 3.48959 15.5104C1.89553 13.9163 1 11.7543 1 9.5C1 7.24566 1.89553 5.08365 3.48959 3.48959C5.08365 1.89553 7.24566 1 9.5 1C11.7543 1 13.9163 1.89553 15.5104 3.48959C17.1045 5.08365 18 7.24566 18 9.5Z" stroke="#B6B6B6" stroke-width="2" stroke-linecap="round"/>
              </Svg>
              <TextInput placeholder="Cari Stok" placeholderTextColor={'#B6B6B6'} style={styles.searchBar}/>
            </View>
            <TouchableOpacity onPress={setToogleAddStock} style={styles.addButton}>
              <MotiView
                from={{rotate: '0deg'}}
                animate={{rotate: toogleAddStock? '135deg' : '0'}}
                transition={{default: {type: 'timing', duration: 0}}}
              >
                <Svg width={16} height={16} viewBox="0 0 29 29" fill="none">
                  <Path d="M28.8594 16.86H16.8594V28.86H12.8594V16.86H0.859375V12.86H12.8594V0.859985H16.8594V12.86H28.8594V16.86Z" fill="white"/>
                </Svg>
              </MotiView>
            </TouchableOpacity>
          </View>
        </View>
        <AnimatePresence>
          {toogleAddStock &&
            <AddStock/>
          }
        </AnimatePresence>
        {json.length > 0 ?
          (json.map((item : any, index) => (
            <Text key={index}>{item.pmt}</Text>
          )))
          :
          <Text>ga ada data</Text>
        }
        <Button title="bla" onPress={handleButton} />
      </View>
    </BaseView>
  )
}