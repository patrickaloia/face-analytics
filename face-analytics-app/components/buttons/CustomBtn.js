import React from 'react'
import {
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const styles = StyleSheet.create({
  touchable: {
    alignSelf: 'flex-end'
  }
})

const selectIcon = (icon) => {

}

const TakeSnapBtn = ({iconName, onPress}) => {
  return (
    <TouchableOpacity style={styles.touchable} onPress={onPress}>
      <MaterialIcons  name={iconName} size={45} color="white" />      
    </TouchableOpacity>
  )
}

export default TakeSnapBtn