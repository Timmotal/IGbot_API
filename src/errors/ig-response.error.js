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
exports.IgResponseError = void 0;
var ig_client_error_1 = require("./ig-client.error");
var decorators_1 = require("../decorators");
var IgResponseError = function () {
    var _a;
    var _classSuper = ig_client_error_1.IgClientError;
    var _text_decorators;
    var _text_initializers = [];
    var _text_extraInitializers = [];
    var _response_decorators;
    var _response_initializers = [];
    var _response_extraInitializers = [];
    return _a = /** @class */ (function (_super) {
            __extends(IgResponseError, _super);
            function IgResponseError(response) {
                var _this = _super.call(this, "".concat(response.request.method, " ").concat(response.request.uri.path, " - ").concat(response.statusCode, " ").concat(response.statusMessage, "; ").concat(response.body.message || '')) || this;
                _this.text = __runInitializers(_this, _text_initializers, void 0);
                _this.response = (__runInitializers(_this, _text_extraInitializers), __runInitializers(_this, _response_initializers, void 0));
                __runInitializers(_this, _response_extraInitializers);
                _this.response = response;
                if (response.body.message) {
                    _this.text = response.body.message;
                }
                return _this;
            }
            return IgResponseError;
        }(_classSuper)),
        (function () {
            var _b;
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_b = _classSuper[Symbol.metadata]) !== null && _b !== void 0 ? _b : null) : void 0;
            _text_decorators = [(0, decorators_1.Enumerable)(false)];
            _response_decorators = [(0, decorators_1.Enumerable)(false)];
            __esDecorate(null, null, _text_decorators, { kind: "field", name: "text", static: false, private: false, access: { has: function (obj) { return "text" in obj; }, get: function (obj) { return obj.text; }, set: function (obj, value) { obj.text = value; } }, metadata: _metadata }, _text_initializers, _text_extraInitializers);
            __esDecorate(null, null, _response_decorators, { kind: "field", name: "response", static: false, private: false, access: { has: function (obj) { return "response" in obj; }, get: function (obj) { return obj.response; }, set: function (obj, value) { obj.response = value; } }, metadata: _metadata }, _response_initializers, _response_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.IgResponseError = IgResponseError;
