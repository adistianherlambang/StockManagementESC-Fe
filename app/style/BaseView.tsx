import React, { ReactNode } from "react";
import {
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  StatusBar,
  Text,
  StyleProp,
  TextStyle,
  View
} from "react-native";

import { padding } from "./styles";

interface BaseLayoutProps {
  children: ReactNode;
  padding?: number;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <View style={{ flex: 1 }}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              paddingHorizontal: padding,
              backgroundColor: "white",
            }}
            keyboardShouldPersistTaps="handled"
          >
            {children}
          </ScrollView>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const TitleText = ({ children }: BaseLayoutProps) => {
  return(
    <Text style={{fontSize: 24, fontWeight: "600"}}>{children}</Text>
  )
}

export {TitleText}