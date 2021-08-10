window.__require=function t(e,o,r){function n(i,p){if(!o[i]){if(!e[i]){var s=i.split("/");if(s=s[s.length-1],!e[s]){var a="function"==typeof __require&&__require;if(!p&&a)return a(s,!0);if(c)return c(s,!0);throw new Error("Cannot find module '"+i+"'")}i=s}var u=o[i]={exports:{}};e[i][0].call(u.exports,function(t){return n(e[i][1][t]||t)},u,u.exports,t,e,o,r)}return o[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<r.length;i++)n(r[i]);return n}({GameManager:[function(t,e,o){"use strict";cc._RF.push(e,"a82eeZJrFNLXoGzHE4md99e","GameManager");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var p=t.length-1;p>=0;p--)(n=t[p])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,p=c.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.star=null,e.starPrefab=null,e}return r(e,t),e.prototype.onLoad=function(){var t=cc.director.getCollisionManager();t.enabled=!0,t.enabledDrawBoundingBox=!0},e.prototype.start=function(){},e.prototype.SpawnStar=function(){},e.prototype.OnStarCollided=function(){},n([p(cc.Prefab)],e.prototype,"star",void 0),n([p],e.prototype,"starPrefab",void 0),e=n([i],e)}(cc.Component);o.default=s,cc._RF.pop()},{}],Helloworld:[function(t,e,o){"use strict";cc._RF.push(e,"e1b90/rohdEk4SdmmEZANaD","Helloworld");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var p=t.length-1;p>=0;p--)(n=t[p])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,p=c.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e}return r(e,t),e.prototype.start=function(){this.label.string=this.text},n([p(cc.Label)],e.prototype,"label",void 0),n([p],e.prototype,"text",void 0),e=n([i],e)}(cc.Component);o.default=s,cc._RF.pop()},{}],KeyPad:[function(t,e,o){"use strict";cc._RF.push(e,"27fa7nuNBlHF4Dzp0x2GVHx","KeyPad");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var p=t.length-1;p>=0;p--)(n=t[p])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,p=c.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.keyPad=null,e.buttons=[],e}return r(e,t),e.prototype.start=function(){var t=this;this.label.string="";for(var e=0,o=this.buttons;e<o.length;e++){o[e].node.on("click",function(e){t.UpdateLabelValue(e.getComponentInChildren(cc.Label).string)},this)}},e.prototype.OnKeyClicked=function(t,e){this.UpdateLabelValue(e)},e.prototype.UpdateLabelValue=function(t){this.label.string+=t},e.prototype.Delete=function(){this.label.string.length<=0||(this.label.string=this.label.string.slice(0,-1))},e.prototype.Submit=function(){this.keyPad.active=!1},n([p(cc.Label)],e.prototype,"label",void 0),n([p(cc.Node)],e.prototype,"keyPad",void 0),n([p([cc.Button])],e.prototype,"buttons",void 0),e=n([i],e)}(cc.Component);o.default=s,cc._RF.pop()},{}],Player:[function(t,e,o){"use strict";cc._RF.push(e,"fe5b6Ay2RxF0oMlYfrrY2JZ","Player");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var p=t.length-1;p>=0;p--)(n=t[p])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,p=c.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e.jumpHeight=0,e.jumpDuration=0,e.maxMoveSpeed=0,e.acceleration=0,e.speed=0,e}return r(e,t),e.prototype.onLoad=function(){cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this),this.node.on(cc.Node.EventType.MOUSE_DOWN,this.ScaleEffect,this)},e.prototype.start=function(){},e.prototype.onKeyDown=function(t){switch(t.keyCode){case cc.macro.KEY.space:this.Jump(),console.log("Pressed Space key");break;case cc.macro.KEY.left:this.isLeftClicked=!0;break;case cc.macro.KEY.right:this.isRightClicked=!0}},e.prototype.onKeyUp=function(t){switch(t.keyCode){case cc.macro.KEY.left:this.isLeftClicked=!1;break;case cc.macro.KEY.right:this.isRightClicked=!1}},e.prototype.GetJumpSequence=function(){var t=this,e=cc.moveBy(this.jumpDuration,cc.v2(0,this.jumpHeight)).easing(cc.easeCubicActionOut()),o=cc.moveBy(this.jumpDuration,cc.v2(0,-this.jumpHeight)).easing(cc.easeCubicActionIn()),r=cc.callFunc(function(){return t.isJumping=!1});return cc.sequence(e,o,r)},e.prototype.Jump=function(){1!=this.isJumping&&(this.isJumping=!0,this.node.runAction(this.GetJumpSequence()))},e.prototype.ScaleEffect=function(t){cc.log("Mouse Button Clicked: {0}",t.getButton());var e=cc.scaleTo(this.jumpDuration,1.3,1.3).easing(cc.easeCubicActionOut()),o=cc.scaleTo(this.jumpDuration,1,1).easing(cc.easeCubicActionIn()),r=cc.sequence(e,o),n=cc.spawn(this.GetJumpSequence(),r);this.node.runAction(n)},e.prototype.Clone=function(){var t=this.GetJumpSequence();this.node.runAction(t),this.label.node.runAction(t.clone())},e.prototype.update=function(t){if(this.isRightClicked)this.speed+=this.acceleration*t;else{if(!this.isLeftClicked)return void(this.speed=0);this.speed+=this.acceleration*-t}Math.abs(this.speed)>this.maxMoveSpeed&&(this.speed=this.maxMoveSpeed*Math.sign(this.speed)),this.node.x+=this.speed*t},e.prototype.onDestroy=function(){cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this),this.node.off(cc.Node.EventType.MOUSE_DOWN,this.ScaleEffect,this)},n([p(cc.Label)],e.prototype,"label",void 0),n([p],e.prototype,"text",void 0),n([p()],e.prototype,"jumpHeight",void 0),n([p()],e.prototype,"jumpDuration",void 0),n([p()],e.prototype,"maxMoveSpeed",void 0),n([p],e.prototype,"acceleration",void 0),e=n([i],e)}(cc.Component);o.default=s,cc._RF.pop()},{}],Star:[function(t,e,o){"use strict";cc._RF.push(e,"49741z2Gc1A6IrOZA0jMFM3","Star");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var p=t.length-1;p>=0;p--)(n=t[p])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,p=c.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.minMaxX=cc.Vec2.ZERO,e.minMaxY=cc.Vec2.ZERO,e}return r(e,t),e.prototype.start=function(){},e.prototype.onCollisionEnter=function(t,e){cc.log("Collided with {0}",t.name),this.node.active=!1},n([p],e.prototype,"minMaxX",void 0),n([p],e.prototype,"minMaxY",void 0),e=n([i],e)}(cc.Component);o.Star=s,cc._RF.pop()},{}],TimerUI:[function(t,e,o){"use strict";cc._RF.push(e,"df09bKkPpNK6aSsiZ/qWiY3","TimerUI");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var p=t.length-1;p>=0;p--)(n=t[p])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,p=c.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.timerText=null,e.timerHighlighter=null,e}return r(e,t),e.prototype.start=function(){this.timerText.string="0",this.timerHighlighter.active=!1},e.prototype.UpdateTimerValue=function(t){this.timerText.string=t.toFixed(),console.log("TImer Updated"+t)},e.prototype.Blink=function(t){this.timerHighlighter.active=!0,cc.tween(this.timerHighlighter).blink(1,1).start(),console.log("Blinking")},e.prototype.Reset=function(){this.timerHighlighter.active=!1},n([p(cc.Label)],e.prototype,"timerText",void 0),n([p(cc.Node)],e.prototype,"timerHighlighter",void 0),e=n([i],e)}(cc.Component);o.default=s,cc._RF.pop()},{}],Timer:[function(t,e,o){"use strict";cc._RF.push(e,"52039XDl8VOmb5t08CoSS2j","Timer");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var p=t.length-1;p>=0;p--)(n=t[p])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,p=c.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.timerUIUpdateCallback=null,e.timerExpiredCallback=null,e.timerExpiry=5,e.timerStartValue=20,e.timer=0,e}return r(e,t),e.prototype.start=function(){this.timer=this.timerStartValue},e.prototype.update=function(t){this.TimerUpdate(t)},e.prototype.TimerUpdate=function(t){this.timer<=0||(this.timer%1<=t&&(this.timerUIUpdateCallback.emit([this.timer]),this.timer<=this.timerExpiry+t&&this.timerExpiredCallback.emit([this.timer])),this.timer-=t)},e.prototype.TimerReset=function(){this.timer=this.timerStartValue},n([p(cc.Component.EventHandler)],e.prototype,"timerUIUpdateCallback",void 0),n([p(cc.Component.EventHandler)],e.prototype,"timerExpiredCallback",void 0),n([p],e.prototype,"timerExpiry",void 0),n([p],e.prototype,"timerStartValue",void 0),e=n([i],e)}(cc.Component);o.default=s,cc._RF.pop()},{}]},{},["GameManager","Helloworld","Player","Star","Timer","TimerUI","KeyPad"]);