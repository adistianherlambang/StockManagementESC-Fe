import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%",
        gap: 16
    },
    topContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#ff000',
        paddingVertical: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
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
})

export default styles