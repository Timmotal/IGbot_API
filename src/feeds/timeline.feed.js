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
exports.TimelineFeed = void 0;
var class_transformer_1 = require("class-transformer");
var lodash_1 = require("lodash");
var feed_1 = require("../core/feed");
var TimelineFeed = function () {
    var _a;
    var _classSuper = feed_1.Feed;
    var _nextMaxId_decorators;
    var _nextMaxId_initializers = [];
    var _nextMaxId_extraInitializers = [];
    return _a = /** @class */ (function (_super) {
            __extends(TimelineFeed, _super);
            function TimelineFeed() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.nextMaxId = __runInitializers(_this, _nextMaxId_initializers, void 0);
                _this.reason = (__runInitializers(_this, _nextMaxId_extraInitializers), (0, lodash_1.sample)(['pull_to_refresh', 'warm_start_fetch', 'cold_start_fetch']));
                return _this;
            }
            Object.defineProperty(TimelineFeed.prototype, "state", {
                set: function (body) {
                    this.moreAvailable = body.more_available;
                    this.nextMaxId = body.next_max_id;
                },
                enumerable: false,
                configurable: true
            });
            TimelineFeed.prototype.request = function () {
                return __awaiter(this, arguments, void 0, function (options) {
                    var form, body;
                    if (options === void 0) { options = {}; }
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                form = {
                                    is_prefetch: '0',
                                    feed_view_info: '',
                                    seen_posts: '',
                                    phone_id: this.client.state.phoneId,
                                    is_pull_to_refresh: '0',
                                    battery_level: this.client.state.batteryLevel,
                                    timezone_offset: this.client.state.timezoneOffset,
                                    _csrftoken: this.client.state.cookieCsrfToken,
                                    client_session_id: this.client.state.clientSessionId,
                                    device_id: this.client.state.uuid,
                                    _uuid: this.client.state.uuid,
                                    is_charging: Number(this.client.state.isCharging),
                                    is_async_ads_in_headload_enabled: 0,
                                    rti_delivery_backend: 0,
                                    is_async_ads_double_request: 0,
                                    will_sound_on: 0,
                                    is_async_ads_rti: 0,
                                    recovered_from_crash: options.recoveredFromCrash,
                                    push_disabled: options.pushDisabled,
                                    latest_story_pk: options.latestStoryPk,
                                };
                                if (this.nextMaxId) {
                                    form = Object.assign(form, {
                                        max_id: this.nextMaxId,
                                        reason: options.reason || 'pagination',
                                    });
                                }
                                else {
                                    form = Object.assign(form, {
                                        reason: options.reason || this.reason,
                                        is_pull_to_refresh: this.reason === 'pull_to_refresh' ? '1' : '0',
                                    });
                                }
                                return [4 /*yield*/, this.client.request.send({
                                        url: "/api/v1/feed/timeline/",
                                        method: 'POST',
                                        headers: {
                                            'X-Ads-Opt-Out': 0,
                                            'X-Google-AD-ID': this.client.state.adid,
                                            'X-DEVICE-ID': this.client.state.uuid,
                                            'X-FB': 1,
                                        },
                                        form: form,
                                    })];
                            case 1:
                                body = (_b.sent()).body;
                                this.state = body;
                                return [2 /*return*/, body];
                        }
                    });
                });
            };
            TimelineFeed.prototype.items = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var response;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, this.request()];
                            case 1:
                                response = _b.sent();
                                return [2 /*return*/, response.feed_items.filter(function (i) { return i.media_or_ad; }).map(function (i) { return i.media_or_ad; })];
                        }
                    });
                });
            };
            return TimelineFeed;
        }(_classSuper)),
        (function () {
            var _b;
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_b = _classSuper[Symbol.metadata]) !== null && _b !== void 0 ? _b : null) : void 0;
            _nextMaxId_decorators = [(0, class_transformer_1.Expose)()];
            __esDecorate(null, null, _nextMaxId_decorators, { kind: "field", name: "nextMaxId", static: false, private: false, access: { has: function (obj) { return "nextMaxId" in obj; }, get: function (obj) { return obj.nextMaxId; }, set: function (obj, value) { obj.nextMaxId = value; } }, metadata: _metadata }, _nextMaxId_initializers, _nextMaxId_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.TimelineFeed = TimelineFeed;
