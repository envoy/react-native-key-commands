//
//  RCTKeyCommandsView.h
//  Envoy
//
//  Created by Fang-Pen Lin on 3/13/18.
//  Copyright © 2018 Envoy Inc. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface RCTKeyCommandsView : UIView

@property (readwrite) NSArray<UIKeyCommand *> *currentKeyCommands;

@end
