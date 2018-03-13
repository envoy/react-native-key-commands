//
//  RCTKeyCommandsView.m
//  Envoy
//
//  Created by Fang-Pen Lin on 3/13/18.
//  Copyright © 2018 Envoy Inc. All rights reserved.
//

#import "RCTKeyCommandsView.h"

@implementation RCTKeyCommandsView {
    NSArray<UIKeyCommand *> *currentKeyCommands;
}

-(instancetype) init {
    self = [super init];
    if (self) {
        currentKeyCommands = @[];
    }
    return self;
}

- (BOOL)canBecomeFirstResponder {
    return YES;
}

- (NSArray<UIKeyCommand *> *)keyCommands {
    return currentKeyCommands;
}

- (void) setKeyCommandsWithJSON:(id)json {
    if (!json) {
        currentKeyCommands = @[];
    }
    NSArray<NSDictionary *> *commandsArray = json;
    NSMutableArray<UIKeyCommand *> *keyCommands = [NSMutableArray array];
    for (NSDictionary *commandJSON in commandsArray) {
        NSString *input = commandJSON[@"input"];
        NSNumber *flags = commandJSON[@"modifierFlags"];
        NSString *discoverabilityTitle = commandJSON[@"discoverabilityTitle"];
        if (!flags) {
            flags = @0;
        }
        UIKeyCommand *command;
        if (discoverabilityTitle) {
            command = [UIKeyCommand keyCommandWithInput:input
                                          modifierFlags:[flags integerValue]
                                                 action:@selector(onKeyCommand:)
                                   discoverabilityTitle:discoverabilityTitle];
        } else {
            command = [UIKeyCommand keyCommandWithInput:input
                                          modifierFlags:[flags integerValue]
                                                 action:@selector(onKeyCommand:)];
        }
        [keyCommands addObject:command];
    }
    currentKeyCommands = keyCommands;
}

- (void) onKeyCommand:(UIKeyCommand *)keyCommand {
    if (self.onKeyCommand) {
        self.onKeyCommand(@{
            @"input": keyCommand.input,
            @"modifierFlags": [NSNumber numberWithInteger:keyCommand.modifierFlags],
            @"discoverabilityTitle": keyCommand.discoverabilityTitle ? keyCommand.discoverabilityTitle : [NSNull null]
        });
    }
}

@end
