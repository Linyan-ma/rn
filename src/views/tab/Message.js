import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Messages({ navigation }) {
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate('Demo')}>Message</Text>
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
})
