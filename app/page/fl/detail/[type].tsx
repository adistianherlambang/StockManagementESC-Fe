// // frontend/fe1/app/page/fl/detail/[type].tsx
// import { View, Text, Button } from 'react-native';
// import { useLocalSearchParams, router } from 'expo-router';
// import produkList from './data';

// export default function DetailPage() {
//   const { type } = useLocalSearchParams();

//   // Filter produk sesuai type
//   const produkTampil = produkList.filter(p => p.type === type);

//   return (
//     <View style={{ padding: 20 }}>
//       <Text style={{ fontSize: 20, marginBottom: 10 }}>
//         Halaman {type}
//       </Text>

//       {produkTampil.length > 0 ? (
//         produkTampil.map(item => (
//           <Text key={item.id}>
//             {item.nama} - Rp{item.harga}
//           </Text>
//         ))
//       ) : (
//         <Text>Data tidak ditemukan</Text>
//       )}
//       <Button title='back' onPress={() => router.back()}/>
//     </View>
//   );
// }

import { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function DetailPage() {

  const {type} = useLocalSearchParams()

  const [json, setJson] = useState<any[]>([])

  useEffect(() => {
    const ambilData = async () => {
      try {
        const res = await fetch("https://755d5a95cf3a.ngrok-free.app/data")
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