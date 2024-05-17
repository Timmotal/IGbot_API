"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountdownSticker = void 0;
var insta_sticker_1 = require("./insta-sticker");
var CountdownSticker = /** @class */ (function (_super) {
    __extends(CountdownSticker, _super);
    function CountdownSticker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.textColor = '#ffffff';
        _this.startBackgroundColor = '#ca2ee1';
        _this.endBackgroundColor = '#5eb1ff';
        _this.digitColor = '#7e0091';
        _this.digitCardColor = '#ffffffcc';
        _this.followingEnabled = true;
        _this.width = 0.703125;
        _this.height = 0.26013514;
        return _this;
    }
    Object.defineProperty(CountdownSticker.prototype, "endTs", {
        get: function () {
            return this._endTs;
        },
        set: function (value) {
            if (typeof value === 'number') {
                this._endTs = value;
            }
            else {
                this._endTs = Math.floor(value.toUTC().toSeconds());
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CountdownSticker.prototype, "id", {
        get: function () {
            return 'countdown_sticker_time';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CountdownSticker.prototype, "key", {
        get: function () {
            return 'story_countdowns';
        },
        enumerable: false,
        configurable: true
    });
    return CountdownSticker;
}(insta_sticker_1.InstaSticker));
exports.CountdownSticker = CountdownSticker;
