import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Messages() {
  return (
    <View style={styles.container}>
      <Text style={styles.msg}>Message 2</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  msg: {
    color: '#f00',
    fontSize: 20,
  },
})
