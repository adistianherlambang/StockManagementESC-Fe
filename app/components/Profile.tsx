import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.pp}>
        <Text style={styles.ppText}>FL</Text>
      </View>
      <View>
        <Text>Halo <Text>FL!</Text></Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
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
  }
})

export default Profile