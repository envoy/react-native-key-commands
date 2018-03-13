//
//  RCTKeyCommandsManager.m
//  Envoy
//
//  Created by Fang-Pen Lin on 3/13/18.
//  Copyright © 2018 Envoy Inc. All rights reserved.
//

#import "RCTKeyCommandsManager.h"
#import "RCTKeyCommandsView.h"

@implementation RCTKeyCommandsManager

RCT_EXPORT_MODULE()

- (UIView *)view {
    return [[RCTKeyCommandView alloc] init];
}

@end
