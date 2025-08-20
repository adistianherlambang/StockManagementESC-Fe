import { Button, View, Text, TextInput, TouchableOpacity, Dimensions, Animated, ScrollView, RefreshControl} from "react-native";
import styles from "./style";
import Svg, { Circle, Path, Rect} from "react-native-svg"
import { AnimatePresence,MotiView } from "moti";
import { router } from "expo-router";
import { useState, useEffect } from "react";

//Components
import Profile from "@/app/components/Profile"
import AddStock from "@/app/components/fl/AddStock";
import FLStock from "@/app/components/fl/Stock";
import { SamsungButton, XiaomiButton, VivoButton, OppoButton, RealmeButton, TecnoButton, IphoneButton, InfinixButton } from "@/app/components/fl/BrandButton"
import DetailPage from "./detail/[type]";

//State
import State from "@/app/hooks/toogleState";

export default function FlPage() {

	//State
	const toogleAddStock = State(state => state.toogleAddStock)
	const setToogleAddStock = State(state => state.setToogleAddStock)

	const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    setRefreshing(false);
  };

	const screenWidth = Dimensions.get('window').width;
	const gapValue = screenWidth * 0.05;
	const width = screenWidth / 3.8

	return(
		<ScrollView contentContainerStyle={{ paddingBottom: 50 }} nestedScrollEnabled showsVerticalScrollIndicator={false} refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
			<View style={styles.container}>
				<Profile />
				<View style={styles.stockContainer}>
					<Text style={styles.stockTitle}>Pilih Brand</Text>
					<View style={styles.brandButton}>
						<SamsungButton route="/page/fl/detail/samsung"/>
						<XiaomiButton route="/page/fl/detail/xiaomi"/>
						<VivoButton route="/page/fl/detail/vivo"/>
						<OppoButton route="/page/fl/detail/oppo"/>
						<RealmeButton route="/page/fl/detail/realme"/>
						<InfinixButton route="/page/fl/detail/infinix"/>
						<TecnoButton route="/page/fl/detail/tecno"/>
						<IphoneButton route="/page/fl/detail/iphone"/>
						<Button title="screen" onPress={() => console.log(screenWidth)}/>
						<Button title="gap" onPress={() => console.log(gapValue)}/>
						<Button title="width" onPress={() => console.log(width)}/>
					</View>
				</View>
				<Text>Samsung</Text>
				<FLStock/>
				<DetailPage/>
			</View>
		</ScrollView>
	)
}