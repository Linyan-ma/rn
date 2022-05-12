import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function Messages({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="back index" onPress={() => navigation.navigate('Demo')}></Button>
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
