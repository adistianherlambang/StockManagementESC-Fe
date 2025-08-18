import { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function DetailPage() {

  const {type} = useLocalSearchParams()

  const [json, setJson] = useState<any[]>([])
  const [searchQuery, setSearchQuery] = useState<any>('')

  useEffect(() => {
    const ambilData = async () => {
      try {
        const res = await fetch("https://f53d3d7b446f.ngrok-free.app/data")
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
    <View style={{alignItems: 'center', justifyContent: 'center', height: '100%'}}>
      <Text>sasoupisdfiwe</Text>
      {json.length > 0 ?
        (json.map((item : any, index) => (
          <Text key={index}>{item.pmt}</Text>
        )))
        :
        <Text>ga ada data</Text>
      }
      <Button title="bla" onPress={handleButton} />
    </View>
  )

}