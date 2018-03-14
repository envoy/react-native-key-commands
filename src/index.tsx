import {
  NativeModules,
  StyleSheet,
  ViewStyle,
  requireNativeComponent
} from 'react-native'

import React from 'react'

const { KeyCommandConstants } = NativeModules
const RCTKeyCommands = requireNativeComponent('RCTRCTKeyCommands')
const defaultStyles = StyleSheet.create({
  main: {
    backgroundColor: 'transparent'
  }
})

export const constants = {
  keyModifierShift: KeyCommandConstants.keyModifierShift as number,
  keyModifierControl: KeyCommandConstants.keyModifierControl as number,
  keyModifierAlternate: KeyCommandConstants.keyModifierAlternate as number,
  keyModifierCommand: KeyCommandConstants.keyModifierCommand as number,
  keyModifierNumericPad: KeyCommandConstants.keyModifierNumericPad as number,
  keyInputUpArrow: KeyCommandConstants.keyInputUpArrow as string,
  keyInputDownArrow: KeyCommandConstants.keyInputDownArrow as string,
  keyInputLeftArrow: KeyCommandConstants.keyInputLeftArrow as string,
  keyInputRightArrow: KeyCommandConstants.keyInputRightArrow as string,
  keyInputEscape: KeyCommandConstants.keyInputEscape as string,
}

export interface KeyCommand {
  /// The input key, could be something like '1' stands for '1' key,
  /// constatns like keyInputUpArrow and others can also be used here
  input: string
  /// Key modifier to be used along with the key press, like Command + Alt
  /// can be passed like
  ///
  ///     constatns.keyModifierCommand | constants.keyModifierAlternate
  ///
  keyModifier?: number
  /// Title of discoverability to display, leave it as undefined means we
  /// don't want the key command to be displayed in discoverability overlayer
  /// UI
  discoverabilityTitle?: string
}

export interface Props {
  style?: ViewStyle
  /// Key commands
  keyCommands: Array<KeyCommand>
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
