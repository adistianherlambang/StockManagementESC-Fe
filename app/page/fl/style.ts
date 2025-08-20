import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        gap: 32,
    },
    stockTitle: {
        fontSize: 24,
        fontWeight: 600
    },
    stockContainer: {
        gap: 24
    },
    brandButton: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 16,
        justifyContent: 'flex-start'
    }
})

export default styles