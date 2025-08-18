import { Text, TextInput, View, SafeAreaView, StatusBar, Platform, TouchableWithoutFeedback, Keyboard, Dimensions } from "react-native";
import { Link } from "expo-router";

//Page
import FlPage from "./page/fl/page";

export default function Index() {

  const {width, height} = Dimensions.get('window')
  const padding = width * 0.05
  return (
    <SafeAreaView style={{
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
        <View style={{flex: 1, paddingHorizontal: padding, backgroundColor: 'white'}}>
          <FlPage/>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
