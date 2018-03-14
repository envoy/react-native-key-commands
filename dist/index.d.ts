/// <reference types="react" />
import { NativeSyntheticEvent, ViewStyle } from 'react-native';
import React from 'react';
export declare const constants: {
    keyModifierShift: number;
    keyModifierControl: number;
    keyModifierAlternate: number;
    keyModifierCommand: number;
    keyModifierNumericPad: number;
    keyInputUpArrow: string;
    keyInputDownArrow: string;
    keyInputLeftArrow: string;
    keyInputRightArrow: string;
    keyInputEscape: string;
};
export interface KeyCommand {
    input: string;
    keyModifier?: number;
    discoverabilityTitle?: string;
}
export interface Props {
    style?: ViewStyle;
    keyCommands: Array<KeyCommand>;
    onKeyCommand?: (event: NativeSyntheticEvent<KeyCommand>) => void;
    testID?: string;
}
export default class KeyCommands extends React.Component<Props> {
    render(): JSX.Element;
}
