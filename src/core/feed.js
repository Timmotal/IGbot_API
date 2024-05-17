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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feed = void 0;
var rxjs_1 = require("rxjs");
var class_transformer_1 = require("class-transformer");
var attempt_1 = require("@lifeomic/attempt");
var Chance = require("chance");
var errors_1 = require("../errors");
var repository_1 = require("./repository");
var decorators_1 = require("../decorators");
var Feed = function () {
    var _a;
    var _classSuper = repository_1.Repository;
    var _moreAvailable_decorators;
    var _moreAvailable_initializers = [];
    var _moreAvailable_extraInitializers = [];
    var _chance_decorators;
    var _chance_initializers = [];
    var _chance_extraInitializers = [];
    var _rankToken_decorators;
    var _rankToken_initializers = [];
    var _rankToken_extraInitializers = [];
    return _a = /** @class */ (function (_super) {
            __extends(Feed, _super);
            function Feed() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.attemptOptions = {
                    delay: 60000,
                    factor: 1.5,
                    maxAttempts: 10,
                    minDelay: 60000,
                    maxDelay: 300000,
                    jitter: true,
                };
                _this.moreAvailable = __runInitializers(_this, _moreAvailable_initializers, void 0);
                _this.chance = (__runInitializers(_this, _moreAvailable_extraInitializers), __runInitializers(_this, _chance_initializers, new Chance()));
                _this.rankToken = (__runInitializers(_this, _chance_extraInitializers), __runInitializers(_this, _rankToken_initializers, _this.chance.guid()));
                __runInitializers(_this, _rankToken_extraInitializers);
                return _this;
            }
            Object.defineProperty(Feed.prototype, "items$", {
                get: function () {
                    return this.observable();
                },
                enumerable: false,
                configurable: true
            });
            Feed.prototype.observable = function (semaphore, attemptOptions) {
                var _this = this;
                return new rxjs_1.Observable(function (observer) {
                    var subscribed = true;
                    process.nextTick(function () { return __awaiter(_this, void 0, void 0, function () {
                        var e_1;
                        var _this = this;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _b.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, (0, attempt_1.retry)(function () { return __awaiter(_this, void 0, void 0, function () {
                                            var items;
                                            return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4 /*yield*/, this.items()];
                                                    case 1:
                                                        items = _b.sent();
                                                        observer.next(items);
                                                        if (!(typeof semaphore === 'function')) return [3 /*break*/, 3];
                                                        return [4 /*yield*/, semaphore()];
                                                    case 2:
                                                        _b.sent();
                                                        _b.label = 3;
                                                    case 3: return [2 /*return*/];
                                                }
                                            });
                                        }); }, __assign({ handleError: function (error, context) {
                                                // If instagram just tells us to wait - we are waiting.
                                                if (error instanceof errors_1.IgResponseError &&
                                                    [400, 429, 500, 502].includes(error.response.statusCode) &&
                                                    subscribed) {
                                                    return;
                                                }
                                                else {
                                                    context.abort();
                                                }
                                            } }, (attemptOptions || this.attemptOptions)))];
                                case 1:
                                    _b.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    e_1 = _b.sent();
                                    observer.error(e_1);
                                    return [3 /*break*/, 3];
                                case 3:
                                    if (this.isMoreAvailable() && subscribed) return [3 /*break*/, 0];
                                    _b.label = 4;
                                case 4:
                                    observer.complete();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return function unsubscribe() {
                        subscribed = false;
                    };
                });
            };
            Feed.prototype.serialize = function () {
                return (0, class_transformer_1.serialize)(this, { strategy: 'excludeAll' });
            };
            Feed.prototype.deserialize = function (data) {
                (0, class_transformer_1.plainToClassFromExist)(this, JSON.parse(data));
            };
            Feed.prototype.toPlain = function () {
                return (0, class_transformer_1.classToPlain)(this, { strategy: 'excludeAll' });
            };
            Feed.prototype.isMoreAvailable = function () {
                return !!this.moreAvailable;
            };
            return Feed;
        }(_classSuper)),
        (function () {
            var _b;
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_b = _classSuper[Symbol.metadata]) !== null && _b !== void 0 ? _b : null) : void 0;
            _moreAvailable_decorators = [(0, class_transformer_1.Expose)()];
            _chance_decorators = [(0, decorators_1.Enumerable)(false)];
            _rankToken_decorators = [(0, class_transformer_1.Expose)()];
            __esDecorate(null, null, _moreAvailable_decorators, { kind: "field", name: "moreAvailable", static: false, private: false, access: { has: function (obj) { return "moreAvailable" in obj; }, get: function (obj) { return obj.moreAvailable; }, set: function (obj, value) { obj.moreAvailable = value; } }, metadata: _metadata }, _moreAvailable_initializers, _moreAvailable_extraInitializers);
            __esDecorate(null, null, _chance_decorators, { kind: "field", name: "chance", static: false, private: false, access: { has: function (obj) { return "chance" in obj; }, get: function (obj) { return obj.chance; }, set: function (obj, value) { obj.chance = value; } }, metadata: _metadata }, _chance_initializers, _chance_extraInitializers);
            __esDecorate(null, null, _rankToken_decorators, { kind: "field", name: "rankToken", static: false, private: false, access: { has: function (obj) { return "rankToken" in obj; }, get: function (obj) { return obj.rankToken; }, set: function (obj, value) { obj.rankToken = value; } }, metadata: _metadata }, _rankToken_initializers, _rankToken_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.Feed = Feed;
