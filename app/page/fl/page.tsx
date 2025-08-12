import { View, Text, TextInput, TouchableOpacity, Animated } from "react-native";
import styles from "./style";
import Svg, { Circle, Path } from "react-native-svg"

//Components
import Profile from "../../components/Profile"
import AddStock from "../../components/fl/AddStock";

//State
import State from "@/app/hooks/toogleState";

export default function FlPage() {

	//State
	const setToogleAddStock = State(state => state.setToogleAddStock)

	return(
		<View style={styles.container}>
			<Profile />
			<View style={styles.stockContainer}>
				<Text style={styles.stockTitle}>Stok Barang</Text>
				<View style={styles.searchContainer}>
					<View style={styles.searchWrapper}>
						<Svg width="16" height="16" viewBox="0 0 21 21" fill="none">
							<Path d="M20 20L15.514 15.506M18 9.5C18 11.7543 17.1045 13.9163 15.5104 15.5104C13.9163 17.1045 11.7543 18 9.5 18C7.24566 18 5.08365 17.1045 3.48959 15.5104C1.89553 13.9163 1 11.7543 1 9.5C1 7.24566 1.89553 5.08365 3.48959 3.48959C5.08365 1.89553 7.24566 1 9.5 1C11.7543 1 13.9163 1.89553 15.5104 3.48959C17.1045 5.08365 18 7.24566 18 9.5Z" stroke="#B6B6B6" stroke-width="2" stroke-linecap="round"/>
						</Svg>
						<TextInput placeholder="Cari Stok" placeholderTextColor={'#B6B6B6'} style={styles.searchBar}/>
					</View>
					<TouchableOpacity onPress={setToogleAddStock} style={styles.addButton}>
						<Svg width={16} height={16} viewBox="0 0 29 29" fill="none">
							<Path d="M28.8594 16.86H16.8594V28.86H12.8594V16.86H0.859375V12.86H12.8594V0.859985H16.8594V12.86H28.8594V16.86Z" fill="white"/>
						</Svg>
					</TouchableOpacity>
				</View>
			</View>
			<AddStock/>
		</View>
	)
}