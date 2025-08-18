import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get('window').width;
const gapValue = screenWidth * 0.05;

const styles = StyleSheet.create({
    container: {
        gap: 32
    },
    stockTitle: {
        fontSize: 24,
        fontWeight: 600
    },
    stockContainer: {
        gap: 24
    },
    searchContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    searchWrapper: {
        height: 40,
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#F6F6F6',
        borderRadius: 100,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 8
    },
    searchBar: {
        flex: 1,
        color: '#B6B6B6',
        height: '100%',
        width: '100%'
    }, 
    addButton: {
        backgroundColor: '#773FF9',
        width: 36,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100
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