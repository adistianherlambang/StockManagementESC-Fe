import {View, Text, TextInput, TouchableOpacity} from "react-native";
import styles from "./style";

//Components
import Profile from "../../components/Profile"

export default function FlPage() {
	return(
		<View style={styles.container}>
			<Profile />
			<Text>Flight Page</Text>
			<TextInput placeholder="Enter flight details" />
			<TouchableOpacity>
				<Text>Search Flights</Text>
			</TouchableOpacity>
		</View>
	)
}