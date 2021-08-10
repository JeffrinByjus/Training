window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  GameManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a82eeZJrFNLXoGzHE4md99e", "GameManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameManager = function(_super) {
      __extends(GameManager, _super);
      function GameManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.star = null;
        _this.starPrefab = null;
        return _this;
      }
      GameManager.prototype.onLoad = function() {
        var collisionManager = cc.director.getCollisionManager();
        collisionManager.enabled = true;
        collisionManager.enabledDrawBoundingBox = true;
      };
      GameManager.prototype.start = function() {};
      GameManager.prototype.SpawnStar = function() {};
      GameManager.prototype.OnStarCollided = function() {};
      __decorate([ property(cc.Prefab) ], GameManager.prototype, "star", void 0);
      __decorate([ property ], GameManager.prototype, "starPrefab", void 0);
      GameManager = __decorate([ ccclass ], GameManager);
      return GameManager;
    }(cc.Component);
    exports.default = GameManager;
    cc._RF.pop();
  }, {} ],
  Helloworld: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1b90/rohdEk4SdmmEZANaD", "Helloworld");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Helloworld = function(_super) {
      __extends(Helloworld, _super);
      function Helloworld() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      Helloworld.prototype.start = function() {
        this.label.string = this.text;
      };
      __decorate([ property(cc.Label) ], Helloworld.prototype, "label", void 0);
      __decorate([ property ], Helloworld.prototype, "text", void 0);
      Helloworld = __decorate([ ccclass ], Helloworld);
      return Helloworld;
    }(cc.Component);
    exports.default = Helloworld;
    cc._RF.pop();
  }, {} ],
  KeyPad: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "27fa7nuNBlHF4Dzp0x2GVHx", "KeyPad");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var KeyPad = function(_super) {
      __extends(KeyPad, _super);
      function KeyPad() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.keyPad = null;
        _this.buttons = [];
        return _this;
      }
      KeyPad.prototype.start = function() {
        var _this = this;
        this.label.string = "";
        for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
          var button = _a[_i];
          button.node.on("click", function(button) {
            _this.UpdateLabelValue(button.getComponentInChildren(cc.Label).string);
          }, this);
        }
      };
      KeyPad.prototype.OnKeyClicked = function(event, customData) {
        this.UpdateLabelValue(customData);
      };
      KeyPad.prototype.UpdateLabelValue = function(value) {
        this.label.string += value;
      };
      KeyPad.prototype.Delete = function() {
        if (this.label.string.length <= 0) return;
        this.label.string = this.label.string.slice(0, -1);
      };
      KeyPad.prototype.Submit = function() {
        this.keyPad.active = false;
      };
      __decorate([ property(cc.Label) ], KeyPad.prototype, "label", void 0);
      __decorate([ property(cc.Node) ], KeyPad.prototype, "keyPad", void 0);
      __decorate([ property([ cc.Button ]) ], KeyPad.prototype, "buttons", void 0);
      KeyPad = __decorate([ ccclass ], KeyPad);
      return KeyPad;
    }(cc.Component);
    exports.default = KeyPad;
    cc._RF.pop();
  }, {} ],
  Player: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fe5b6Ay2RxF0oMlYfrrY2JZ", "Player");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Player = function(_super) {
      __extends(Player, _super);
      function Player() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        _this.jumpHeight = 0;
        _this.jumpDuration = 0;
        _this.maxMoveSpeed = 0;
        _this.acceleration = 0;
        _this.speed = 0;
        return _this;
      }
      Player.prototype.onLoad = function() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.ScaleEffect, this);
      };
      Player.prototype.start = function() {};
      Player.prototype.onKeyDown = function(event) {
        switch (event.keyCode) {
         case cc.macro.KEY.space:
          this.Jump();
          console.log("Pressed Space key");
          break;

         case cc.macro.KEY.left:
          this.isLeftClicked = true;
          break;

         case cc.macro.KEY.right:
          this.isRightClicked = true;
        }
      };
      Player.prototype.onKeyUp = function(event) {
        switch (event.keyCode) {
         case cc.macro.KEY.left:
          this.isLeftClicked = false;
          break;

         case cc.macro.KEY.right:
          this.isRightClicked = false;
        }
      };
      Player.prototype.GetJumpSequence = function() {
        var _this = this;
        var moveUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
        var moveDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
        var callback = cc.callFunc(function() {
          return _this.isJumping = false;
        });
        var seq = cc.sequence(moveUp, moveDown, callback);
        return seq;
      };
      Player.prototype.Jump = function() {
        if (true == this.isJumping) return;
        this.isJumping = true;
        this.node.runAction(this.GetJumpSequence());
      };
      Player.prototype.ScaleEffect = function(event) {
        cc.log("Mouse Button Clicked: {0}", event.getButton());
        var scaleUp = cc.scaleTo(this.jumpDuration, 1.3, 1.3).easing(cc.easeCubicActionOut());
        var scaleDown = cc.scaleTo(this.jumpDuration, 1, 1).easing(cc.easeCubicActionIn());
        var seq = cc.sequence(scaleUp, scaleDown);
        var spawn = cc.spawn(this.GetJumpSequence(), seq);
        this.node.runAction(spawn);
      };
      Player.prototype.Clone = function() {
        var action = this.GetJumpSequence();
        this.node.runAction(action);
        this.label.node.runAction(action.clone());
      };
      Player.prototype.update = function(dt) {
        if (this.isRightClicked) this.speed += this.acceleration * dt; else {
          if (!this.isLeftClicked) {
            this.speed = 0;
            return;
          }
          this.speed += this.acceleration * -dt;
        }
        Math.abs(this.speed) > this.maxMoveSpeed && (this.speed = this.maxMoveSpeed * Math.sign(this.speed));
        this.node.x += this.speed * dt;
      };
      Player.prototype.onDestroy = function() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.node.off(cc.Node.EventType.MOUSE_DOWN, this.ScaleEffect, this);
      };
      __decorate([ property(cc.Label) ], Player.prototype, "label", void 0);
      __decorate([ property ], Player.prototype, "text", void 0);
      __decorate([ property() ], Player.prototype, "jumpHeight", void 0);
      __decorate([ property() ], Player.prototype, "jumpDuration", void 0);
      __decorate([ property() ], Player.prototype, "maxMoveSpeed", void 0);
      __decorate([ property ], Player.prototype, "acceleration", void 0);
      Player = __decorate([ ccclass ], Player);
      return Player;
    }(cc.Component);
    exports.default = Player;
    cc._RF.pop();
  }, {} ],
  Star: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "49741z2Gc1A6IrOZA0jMFM3", "Star");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Star = function(_super) {
      __extends(Star, _super);
      function Star() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.minMaxX = cc.Vec2.ZERO;
        _this.minMaxY = cc.Vec2.ZERO;
        return _this;
      }
      Star.prototype.start = function() {};
      Star.prototype.onCollisionEnter = function(other, self) {
        cc.log("Collided with {0}", other.name);
        this.node.active = false;
      };
      __decorate([ property ], Star.prototype, "minMaxX", void 0);
      __decorate([ property ], Star.prototype, "minMaxY", void 0);
      Star = __decorate([ ccclass ], Star);
      return Star;
    }(cc.Component);
    exports.Star = Star;
    cc._RF.pop();
  }, {} ],
  TimerUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "df09bKkPpNK6aSsiZ/qWiY3", "TimerUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TimerUI = function(_super) {
      __extends(TimerUI, _super);
      function TimerUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.timerText = null;
        _this.timerHighlighter = null;
        return _this;
      }
      TimerUI.prototype.start = function() {
        this.timerText.string = "0";
        this.timerHighlighter.active = false;
      };
      TimerUI.prototype.UpdateTimerValue = function(value) {
        this.timerText.string = value.toFixed();
        console.log("TImer Updated" + value);
      };
      TimerUI.prototype.Blink = function(value) {
        this.timerHighlighter.active = true;
        var blinkTween = cc.tween(this.timerHighlighter).blink(1, 1);
        blinkTween.start();
        console.log("Blinking");
      };
      TimerUI.prototype.Reset = function() {
        this.timerHighlighter.active = false;
      };
      __decorate([ property(cc.Label) ], TimerUI.prototype, "timerText", void 0);
      __decorate([ property(cc.Node) ], TimerUI.prototype, "timerHighlighter", void 0);
      TimerUI = __decorate([ ccclass ], TimerUI);
      return TimerUI;
    }(cc.Component);
    exports.default = TimerUI;
    cc._RF.pop();
  }, {} ],
  Timer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "52039XDl8VOmb5t08CoSS2j", "Timer");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Timer = function(_super) {
      __extends(Timer, _super);
      function Timer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.timerUIUpdateCallback = null;
        _this.timerExpiredCallback = null;
        _this.timerExpiry = 5;
        _this.timerStartValue = 20;
        _this.timer = 0;
        return _this;
      }
      Timer.prototype.start = function() {
        this.timer = this.timerStartValue;
      };
      Timer.prototype.update = function(dt) {
        this.TimerUpdate(dt);
      };
      Timer.prototype.TimerUpdate = function(dt) {
        if (this.timer <= 0) return;
        if (this.timer % 1 <= dt) {
          this.timerUIUpdateCallback.emit([ this.timer ]);
          this.timer <= this.timerExpiry + dt && this.timerExpiredCallback.emit([ this.timer ]);
        }
        this.timer -= dt;
      };
      Timer.prototype.TimerReset = function() {
        this.timer = this.timerStartValue;
      };
      __decorate([ property(cc.Component.EventHandler) ], Timer.prototype, "timerUIUpdateCallback", void 0);
      __decorate([ property(cc.Component.EventHandler) ], Timer.prototype, "timerExpiredCallback", void 0);
      __decorate([ property ], Timer.prototype, "timerExpiry", void 0);
      __decorate([ property ], Timer.prototype, "timerStartValue", void 0);
      Timer = __decorate([ ccclass ], Timer);
      return Timer;
    }(cc.Component);
    exports.default = Timer;
    cc._RF.pop();
  }, {} ]
}, {}, [ "GameManager", "Helloworld", "Player", "Star", "Timer", "TimerUI", "KeyPad" ]);