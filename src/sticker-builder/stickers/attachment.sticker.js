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
exports.AttachmentSticker = void 0;
var insta_sticker_1 = require("./insta-sticker");
var AttachmentSticker = /** @class */ (function (_super) {
    __extends(AttachmentSticker, _super);
    function AttachmentSticker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.width = 0.8;
        _this.height = 0.67;
        return _this;
    }
    Object.defineProperty(AttachmentSticker.prototype, "id", {
        get: function () {
            return "media_simple_".concat(this.mediaId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AttachmentSticker.prototype, "key", {
        get: function () {
            return 'attached_media';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AttachmentSticker.prototype, "additionalConfigureProperties", {
        get: function () {
            return {
                reshared_media_id: this.mediaId,
            };
        },
        enumerable: false,
        configurable: true
    });
    return AttachmentSticker;
}(insta_sticker_1.InstaSticker));
exports.AttachmentSticker = AttachmentSticker;
