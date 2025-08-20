import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.pp}>
          <Text style={styles.ppText}>A</Text>
        </View>
        <View style={styles.name}>
          <Text>Bismillah <Text style={styles.span}>USER👋</Text></Text>
          <Text style={styles.sub}>ESC Team</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16
  },
  pp: {
    backgroundColor: 'black',
    width: 58,
    height: 58,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ppText: {
    color: 'white',
    fontWeight: 700,
    fontSize: 20
  },
  name: {
    gap: 2
  },
  sub: {
    color: '#B6B6B6'
  },
  span: {
    fontWeight: 700,
    fontSize: 16
  },
  button: {
    backgroundColor: '#DA0909',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 100
  },
  buttonText: {
    color: 'white',
    fontWeight: 600,
    fontSize: 16
  }
})

export default Profile