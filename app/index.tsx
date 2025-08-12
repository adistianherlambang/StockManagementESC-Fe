import { Text, TextInput, View, SafeAreaView, StatusBar, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Link } from "expo-router";

//Page
import FlPage from "./page/fl/page";

export default function Index() {
  return (
    <SafeAreaView style={{
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
        <View style={{flex: 1, paddingHorizontal: 24, backgroundColor: 'white'}}>
          <FlPage/>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
