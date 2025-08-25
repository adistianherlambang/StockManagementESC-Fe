import { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { AnimatePresence, MotiView } from "moti";
import {Svg, Path} from "react-native-svg";
import axios from 'axios'

//component
import FLStock from "@/app/components/fl/Stock";
import AddStock from "@/app/components/fl/AddStock";

//base component
import BaseView from "@/app/style/BaseView";
import { TitleText } from "@/app/style/BaseView";

// import styles from "./style";

//State
import State from "@/app/hooks/toogleState";

export default function DetailPage() {

  //State
  const toogleAddStock = State(state => state.toogleAddStock)
  const setToogleAddStock = State(state => state.setToogleAddStock)
  const [increment, setIncrement] = useState(0)

  const {type} = useLocalSearchParams()

  const [json, setJson] = useState<any[]>([])
  const [searchQuery, setSearchQuery] = useState<any>('')

  const link = "https://c0c1cad5f09b.ngrok-free.app/"

  useEffect(() => {
    const ambilData = async () => {
      try { 
        //fetch all data
        const res = await fetch(`${link}data`)
        const data = await res.json()

        //filter data (ambil sesuai tipe dari uselocalsearchparam expo router di page flpage)
        const filtered = data.filter((p : any) => p.brand === type)
        setJson(filtered)
      }
      catch (err) {console.error(err)}
    }
    ambilData()
  }, [type]) 

  // useEffect(() => {
  //   const ws = new WebSocket(`${link}`)
  //   ws.onopen = () => {
  //     console.log('websocket connected') 
  //   }
  //   ws.onmessage = (event) => {
  //     const data = JSON.parse(event.data)
  //     console.log('data realtine :', data)
  //     const filtered = data.filter((p : any) => p.brand === type)
  //   }
  //   ws.onerror = (err) => {
  //     console.error('ws failed :', err)
  //   }
  //   return () => {
  //     ws.close()
  //   }
  // }, [])

  const handleIncrement = async (tipe: string, amount: number) => {
    try {
      const res = await axios.post (`${link}increment`, {
        tipe,
        amount,
      })
      const updateItem = res.data
      setJson(prevJson => prevJson.map(item => item.tipe === updateItem.tipe ? updateItem : item))
      console.log(json.map((item, index) => item.tipe))
    }
    catch(err){
      console.error(err)
    }
  }

  return(
    <BaseView>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={() => router.back()}>
            <Svg width="10" height="17" viewBox="0 0 10 17" fill="none">
              <Path fill-rule="evenodd" clip-rule="evenodd" d="M2.41379 8.50001L9.48479 15.571L8.07079 16.985L0.292786 9.20701C0.105315 9.01949 0 8.76518 0 8.50001C0 8.23485 0.105315 7.98054 0.292786 7.79301L8.07079 0.0150146L9.48479 1.42901L2.41379 8.50001Z" fill="#773FF9"/>
            </Svg>
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{type}</Text>
          </View>
        </View>
        <View>
          <TitleText>Stok Barang</TitleText>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <Svg width="21" height="22" viewBox="0 0 21 22" fill="none">
              <Path d="M17 10C17 8.01088 16.2102 6.10281 14.8037 4.69629C13.3972 3.28977 11.4891 2.5 9.5 2.5C7.51088 2.5 5.60281 3.28977 4.19629 4.69629C2.78977 6.10281 2 8.01088 2 10C2 11.9891 2.78977 13.8972 4.19629 15.3037C5.60281 16.7102 7.51088 17.5 9.5 17.5C11.485 17.5 13.3883 16.7126 14.7939 15.3115L14.8184 15.2871C16.2151 13.8821 17 11.9818 17 10ZM19 10C19 12.1823 18.2473 14.2857 16.8887 15.9678L20.708 19.7939C21.0978 20.1848 21.0968 20.8179 20.7061 21.208C20.3152 21.5978 19.6821 21.5968 19.292 21.2061L15.4756 17.3828C13.7923 18.7454 11.6856 19.5 9.5 19.5C6.98044 19.5 4.56382 18.4994 2.78223 16.7178C1.00063 14.9362 0 12.5196 0 10C0 7.48044 1.00063 5.06382 2.78223 3.28223C4.56382 1.50063 6.98044 0.5 9.5 0.5C12.0196 0.5 14.4362 1.50063 16.2178 3.28223C17.9994 5.06382 19 7.48044 19 10Z" fill="#773FF9"/>
            </Svg>
            <TextInput placeholder="Cari Stok" placeholderTextColor={'#000000ff'} style={styles.searchBar}/>
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
        <AnimatePresence>
          {toogleAddStock &&
            <AddStock/>
          }
        </AnimatePresence>
        <View style={styles.itemContainer}>
          <FLStock data={json} onIncrement={(tipe) => handleIncrement(tipe, 1)} onDecrement={(tipe) => handleIncrement(tipe, -1)}/>
        </View>
      </View>
    </BaseView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      height: "100%",
      width: "100%",
      gap: 32
    },
    topContainer: {
      borderBottomWidth: 1,
      borderBottomColor: '#dfdfdfff',
      paddingVertical: 24,
      alignItems: 'center',
      flexDirection: 'row'
    },
    titleContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      left: 0,
      right: 0
    },
    title: {
      fontSize: 16,
      fontWeight: 700
    },
    searchContainer: {
      flexDirection: 'row',
      gap: 8,
    },
    searchWrapper: {
      height: 40,
      flex: 1,
      paddingHorizontal: 16,
      backgroundColor: '#F6F6F6',
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 100,
      alignItems: 'center',
      flexDirection: 'row',
      gap: 8
    },
    searchBar: {
      flex: 1,
      color: '#000000ff',
      height: '100%',
      width: '100%'
    }, 
    addButton: {
      backgroundColor: '#773FF9',
      width: 36,
      height: 36,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100
    },
    itemContainer: {
      gap: 16
    },
    itemWrapper: {
      backgroundColor: '#773FF9',
      borderRadius: 16,
      paddingHorizontal: 24,
      paddingVertical: 16
    }, 
    item: {
      gap: 2
    },
    itemType: {
      color: 'white',
      fontWeight: 700,
      fontSize: 16
    },
    itemWarna: {
      color: '#ead8ffff',
      fontSize: 12
    },
    itemWarnaSpan: {
      color: 'white',
      fontWeight: 700
    }
})