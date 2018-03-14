var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import { NativeModules, StyleSheet, requireNativeComponent } from 'react-native';
import React from 'react';
const { KeyCommandConstants } = NativeModules;
const RCTKeyCommands = requireNativeComponent('RCTKeyCommands');
const defaultStyles = StyleSheet.create({
    main: {
        backgroundColor: 'transparent'
    }
});
export const constants = {
    keyModifierShift: KeyCommandConstants.keyModifierShift,
    keyModifierControl: KeyCommandConstants.keyModifierControl,
    keyModifierAlternate: KeyCommandConstants.keyModifierAlternate,
    keyModifierCommand: KeyCommandConstants.keyModifierCommand,
    keyModifierNumericPad: KeyCommandConstants.keyModifierNumericPad,
    keyInputUpArrow: KeyCommandConstants.keyInputUpArrow,
    keyInputDownArrow: KeyCommandConstants.keyInputDownArrow,
    keyInputLeftArrow: KeyCommandConstants.keyInputLeftArrow,
    keyInputRightArrow: KeyCommandConstants.keyInputRightArrow,
    keyInputEscape: KeyCommandConstants.keyInputEscape,
};
export default class KeyCommands extends React.Component {
    render() {
        const _a = this.props, { style } = _a, props = __rest(_a, ["style"]);
        return (<RCTKeyCommands {...Object.assign({}, props, { style: [defaultStyles.main, style] })}/>);
    }
}
