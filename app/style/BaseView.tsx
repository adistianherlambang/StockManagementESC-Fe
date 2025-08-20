import React, { ReactNode } from "react";
import {
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  StatusBar,
} from "react-native";

import { padding } from "./styles";

interface BaseLayoutProps {
  children: ReactNode;
  padding?: number;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
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
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}