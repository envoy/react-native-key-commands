# react-native-key-commands
iOS [UIKeyCommand](https://developer.apple.com/documentation/uikit/uikeycommand) native component for React Native

## Install

```
npm install @envoy/react-native-key-commands
```

or 

```
yarn add @envoy/react-native-key-commands
```

then

```
react-native link
```

## Usage

```JSX
import React from 'react'
import { NativeSyntheticEvent } from 'react-native'
import KeyCommands, {
  KeyCommand,
  constants,
} from '@envoy/react-native-key-commands'


export default class MyComponent: React.Component {
  render () {
    return (
      <KeyCommands
        style={styles.myStyle}
        keyCommands={[
          {
            input: "1",
            keyModifier: constants.keyModifierCommand,
            discoverabilityTitle: "Do something cool"
          }
        ]}
        onKeyCommand={this.onKeyCommand}>
        <View>
          {/* .. other views.. */}
        </View>
      </KeyCommands>
    )
  }
  
  private onKeyCommand = (event: NativeSyntheticEvent<KeyCommand>) => {
    if (event.nativeEvent.input === '1' && event.keyModifiers === constants.keyModifierCommand) {
      // do something here
    }
  }
}
```

To combine key modifiers, you can use `|` (bit-wise OR) operator, for example, you can define a shortcut `CMD + ALT + C` like this

```JSON
{
  input: "c",
  keyModifier: constants.keyModifierCommand | constants.,keyModifierAlternate
  discoverabilityTitle: "Do something cool"
}
```

## Constants

Constants are exposed as `constatns` under the package. You can import it via

```
import { constants } from '@envoy/react-native-key-commands'
```

Here's the value mapping from `constants` to iOS constant values

 - keyModifierShift: UIKeyModifierShift
 - keyModifierControl: UIKeyModifierControl
 - keyModifierAlternate: UIKeyModifierAlternate
 - keyModifierCommand: UIKeyModifierCommand
 - keyModifierNumericPad: UIKeyModifierNumericPad
 - keyInputUpArrow: UIKeyInputUpArrow
 - keyInputDownArrow: UIKeyInputDownArrow
 - keyInputLeftArrow: UIKeyInputLeftArrow
 - keyInputRightArrow: UIKeyInputRightArrow
 - keyInputEscape: UIKeyInputEscape
 
