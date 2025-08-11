import { Text, View, SafeAreaView, StatusBar, Platform } from "react-native";
import { Link } from "expo-router";

//Page
import FlPage from "./page/fl/page";

export default function Index() {
  return (
    <SafeAreaView style={{
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }}>
      <View style={{paddingHorizontal: 24}}>
        <FlPage/>
      </View>
    </SafeAreaView>
  );
}
