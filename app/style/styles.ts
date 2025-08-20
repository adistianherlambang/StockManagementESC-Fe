import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const padding = width * 0.05

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: padding,
    },
});

export default styles;
export {padding}