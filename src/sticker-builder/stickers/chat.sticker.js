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
exports.ChatSticker = void 0;
var insta_sticker_1 = require("./insta-sticker");
var ChatSticker = /** @class */ (function (_super) {
    __extends(ChatSticker, _super);
    function ChatSticker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startBackgroundColor = '#3897f0';
        _this.endBackgroundColor = '#27c4f5';
        _this.hasStartedChat = false;
        _this.width = 0.453125;
        _this.height = 0.1266892;
        return _this;
    }
    Object.defineProperty(ChatSticker.prototype, "id", {
        get: function () {
            return 'chat_sticker_id';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChatSticker.prototype, "key", {
        get: function () {
            return 'story_chats';
        },
        enumerable: false,
        configurable: true
    });
    return ChatSticker;
}(insta_sticker_1.InstaSticker));
exports.ChatSticker = ChatSticker;
