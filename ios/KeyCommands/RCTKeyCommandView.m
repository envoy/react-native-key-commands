//
//  RCTKeyCommandsView.m
//  Envoy
//
//  Created by Fang-Pen Lin on 3/13/18.
//  Copyright © 2018 Envoy Inc. All rights reserved.
//

#import "RCTKeyCommandsView.h"

@implementation RCTKeyCommandsView

-(instancetype) init {
    self = [super init];
    if (self) {
        _currentKeyCommands = @[];
    }
    return self;
}

-(instancetype) initWithCoder:(NSCoder *)aDecoder {
    self = [super initWithCoder:aDecoder];
    if (self) {
        _currentKeyCommands = @[];
    }
    return self;
}

-(instancetype) initWithFrame:(CGRect)frame {
    self = [super initWithFrame:frame];
    if (self) {
        _currentKeyCommands = @[];
    }
    return self;
}

- (BOOL)canBecomeFirstResponder {
    return YES;
}

- (NSArray<UIKeyCommand *> *)keyCommands {
    return self.currentKeyCommands;
}

@end
