//
//  RCTKeyCommandView.h
//  Envoy
//
//  Created by Fang-Pen Lin on 3/13/18.
//  Copyright © 2018 Envoy Inc. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <React/RCTComponent.h>

@interface RCTKeyCommandsView : UIView

@property (nullable, copy) RCTBubblingEventBlock onKeyCommand;

- (void) setKeyCommandsWithJSON:(id _Nullable)json;

@end
