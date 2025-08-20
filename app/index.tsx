import { Text, TextInput, View, ScrollView, SafeAreaView, StatusBar, Platform, TouchableWithoutFeedback, Keyboard, Dimensions } from "react-native";
import { Link } from "expo-router";
import BaseLayout from "./style/BaseView";

//Page
import FlPage from "./page/fl/page";

export default function Index() {

  return (
    <BaseLayout>
      <FlPage/>
    </BaseLayout>
  );
}
