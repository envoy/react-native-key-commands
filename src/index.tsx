import {
  StyleSheet,
  ViewStyle,
  requireNativeComponent
} from 'react-native'

import React from 'react'

const RCTKeyCommands = requireNativeComponent('RCTRCTKeyCommands')
const defaultStyles = StyleSheet.create({
  main: {
    backgroundColor: 'transparent'
  }
})

export interface Props {
  style?: ViewStyle
  // TODO: add children
  // TODO: add props here
  /// ID for UI automatic testing
  testID?: string
}

export default class KeyCommands extends React.Component<Props> {
  render () {
    const { style, ...props } = this.props
    return (
      <RCTKeyCommands
        {...{...props, style: [defaultStyles.main, style]}}
      />
    )
  }
}
