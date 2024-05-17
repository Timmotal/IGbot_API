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
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MentionSticker = void 0;
var insta_sticker_1 = require("./insta-sticker");
var decorators_1 = require("../../decorators");
var MentionSticker = function () {
    var _a;
    var _classSuper = insta_sticker_1.InstaSticker;
    var _mediaId_decorators;
    var _mediaId_initializers = [];
    var _mediaId_extraInitializers = [];
    return _a = /** @class */ (function (_super) {
            __extends(MentionSticker, _super);
            function MentionSticker() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.displayType = 'mention_username';
                _this.mediaId = __runInitializers(_this, _mediaId_initializers, void 0);
                _this.width = (__runInitializers(_this, _mediaId_extraInitializers), 0.64);
                _this.height = 0.125;
                return _this;
            }
            Object.defineProperty(MentionSticker.prototype, "id", {
                get: function () {
                    return 'mention_sticker_vibrant';
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(MentionSticker.prototype, "key", {
                get: function () {
                    return 'reel_mentions';
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(MentionSticker.prototype, "additionalConfigureProperties", {
                get: function () {
                    return this.displayType === 'mention_reshare' ? { reshared_media_id: this.mediaId } : null;
                },
                enumerable: false,
                configurable: true
            });
            return MentionSticker;
        }(_classSuper)),
        (function () {
            var _b;
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_b = _classSuper[Symbol.metadata]) !== null && _b !== void 0 ? _b : null) : void 0;
            _mediaId_decorators = [(0, decorators_1.Enumerable)(false)];
            __esDecorate(null, null, _mediaId_decorators, { kind: "field", name: "mediaId", static: false, private: false, access: { has: function (obj) { return "mediaId" in obj; }, get: function (obj) { return obj.mediaId; }, set: function (obj, value) { obj.mediaId = value; } }, metadata: _metadata }, _mediaId_initializers, _mediaId_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.MentionSticker = MentionSticker;
