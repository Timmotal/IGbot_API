"use strict";
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
exports.State = void 0;
var _ = require("lodash");
var Bluebird = require("bluebird");
var Chance = require("chance");
var request_1 = require("request");
var tough_cookie_1 = require("tough-cookie");
var devices = require("../samples/devices.json");
var builds = require("../samples/builds.json");
var supportedCapabilities = require("../samples/supported-capabilities.json");
var Constants = require("./constants");
var errors_1 = require("../errors");
var decorators_1 = require("../decorators");
var debug_1 = require("debug");
var AUTHORIZATION_TAG = Symbol('authorization-tag');
var State = function () {
    var _a;
    var _constants_decorators;
    var _constants_initializers = [];
    var _constants_extraInitializers = [];
    var _proxyUrl_decorators;
    var _proxyUrl_initializers = [];
    var _proxyUrl_extraInitializers = [];
    var _cookieStore_decorators;
    var _cookieStore_initializers = [];
    var _cookieStore_extraInitializers = [];
    var _cookieJar_decorators;
    var _cookieJar_initializers = [];
    var _cookieJar_extraInitializers = [];
    var _checkpoint_decorators;
    var _checkpoint_initializers = [];
    var _checkpoint_extraInitializers = [];
    var _challenge_decorators;
    var _challenge_initializers = [];
    var _challenge_extraInitializers = [];
    var _parsedAuthorization_decorators;
    var _parsedAuthorization_initializers = [];
    var _parsedAuthorization_extraInitializers = [];
    return _a = /** @class */ (function () {
            function State() {
                this.constants = __runInitializers(this, _constants_initializers, Constants);
                this.supportedCapabilities = (__runInitializers(this, _constants_extraInitializers), supportedCapabilities);
                this.language = 'en_US';
                this.timezoneOffset = String(new Date().getTimezoneOffset() * -60);
                this.radioType = 'wifi-none';
                this.capabilitiesHeader = '3brTv10=';
                this.connectionTypeHeader = 'WIFI';
                this.isLayoutRTL = false;
                this.euDCEnabled = undefined;
                this.adsOptOut = false;
                this.thumbnailCacheBustingValue = 1000;
                this.proxyUrl = __runInitializers(this, _proxyUrl_initializers, void 0);
                this.cookieStore = (__runInitializers(this, _proxyUrl_extraInitializers), __runInitializers(this, _cookieStore_initializers, new tough_cookie_1.MemoryCookieStore()));
                this.cookieJar = (__runInitializers(this, _cookieStore_extraInitializers), __runInitializers(this, _cookieJar_initializers, (0, request_1.jar)(this.cookieStore)));
                this.checkpoint = (__runInitializers(this, _cookieJar_extraInitializers), __runInitializers(this, _checkpoint_initializers, null));
                this.challenge = (__runInitializers(this, _checkpoint_extraInitializers), __runInitializers(this, _challenge_initializers, null));
                this.clientSessionIdLifetime = (__runInitializers(this, _challenge_extraInitializers), 1200000);
                this.pigeonSessionIdLifetime = 1200000;
                this.parsedAuthorization = __runInitializers(this, _parsedAuthorization_initializers, void 0);
                __runInitializers(this, _parsedAuthorization_extraInitializers);
            }
            Object.defineProperty(State.prototype, "signatureKey", {
                get: function () {
                    return this.constants.SIGNATURE_KEY;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(State.prototype, "signatureVersion", {
                get: function () {
                    return this.constants.SIGNATURE_VERSION;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(State.prototype, "userBreadcrumbKey", {
                get: function () {
                    return this.constants.BREADCRUMB_KEY;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(State.prototype, "appVersion", {
                get: function () {
                    return this.constants.APP_VERSION;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(State.prototype, "appVersionCode", {
                get: function () {
                    return this.constants.APP_VERSION_CODE;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(State.prototype, "fbAnalyticsApplicationId", {
                get: function () {
                    return this.constants.FACEBOOK_ANALYTICS_APPLICATION_ID;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(State.prototype, "fbOtaFields", {
                get: function () {
                    return this.constants.FACEBOOK_OTA_FIELDS;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(State.prototype, "fbOrcaApplicationId", {
                get: function () {
                    return this.constants.FACEBOOK_ORCA_APPLICATION_ID;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(State.prototype, "loginExperiments", {
                get: function () {
                    return this.constants.LOGIN_EXPERIMENTS;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(State.prototype, "experiments", {
                get: function () {
                    return this.constants.EXPERIMENTS;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(State.prototype, "bloksVersionId", {
                get: function () {
                    return this.constants.BLOKS_VERSION_ID;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(State.prototype, "clientSessionId", {
                /**
                 * The current application session ID.
                 *
                 * This is a temporary ID which changes in the official app every time the
                 * user closes and re-opens the Instagram application or switches account.
                 *
                 * We will update it once an hour
                 */
                get: function () {
                    return this.generateTemporaryGuid('clientSessionId', this.clientSessionIdLifetime);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(State.prototype, "pigeonSessionId", {
                get: function () {
                    return this.generateTemporaryGuid('pigeonSessionId', this.pigeonSessionIdLifetime);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(State.prototype, "appUserAgent", {
                get: function () {
                    return "Instagram ".concat(this.appVersion, " Android (").concat(this.deviceString, "; ").concat(this.language, "; ").concat(this.appVersionCode, ")");
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(State.prototype, "webUserAgent", {
                get: function () {
                    return "Mozilla/5.0 (Linux; Android ".concat(this.devicePayload.android_release, "; ").concat(this.devicePayload.model, " Build/").concat(this.build, "; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36 ").concat(this.appUserAgent);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(State.prototype, "devicePayload", {
                get: function () {
                    var deviceParts = this.deviceString.split(';');
                    var _b = deviceParts[0].split('/'), android_version = _b[0], android_release = _b[1];
                    var manufacturer = deviceParts[3].split('/')[0];
                    var model = deviceParts[4];
                    return {
                        android_version: android_version,
                        android_release: android_release,
                        manufacturer: manufacturer,
                        model: model,
                    };
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(State.prototype, "batteryLevel", {
                get: function () {
                    var chance = new Chance(this.deviceId);
                    var percentTime = chance.integer({ min: 200, max: 600 });
                    return 100 - (Math.round(Date.now() / 1000 / percentTime) % 100);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(State.prototype, "isCharging", {
                get: function () {
                    var chance = new Chance("".concat(this.deviceId).concat(Math.round(Date.now() / 10800000)));
                    return chance.bool();
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(State.prototype, "challengeUrl", {
                get: function () {
                    if (!this.checkpoint) {
                        throw new errors_1.IgNoCheckpointError();
                    }
                    return "/api/v1".concat(this.checkpoint.challenge.api_path);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(State.prototype, "cookieCsrfToken", {
                get: function () {
                    try {
                        return this.extractCookieValue('csrftoken');
                    }
                    catch (_b) {
                        _a.stateDebug('csrftoken lookup failed, returning "missing".');
                        return 'missing';
                    }
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(State.prototype, "cookieUserId", {
                get: function () {
                    var cookie = this.extractCookie('ds_user_id');
                    if (cookie !== null) {
                        return cookie.value;
                    }
                    this.updateAuthorization();
                    if (!this.parsedAuthorization) {
                        _a.stateDebug('Could not find ds_user_id');
                        throw new errors_1.IgCookieNotFoundError('ds_user_id');
                    }
                    return this.parsedAuthorization.ds_user_id;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(State.prototype, "cookieUsername", {
                get: function () {
                    return this.extractCookieValue('ds_user');
                },
                enumerable: false,
                configurable: true
            });
            State.prototype.isExperimentEnabled = function (experiment) {
                return this.experiments.includes(experiment);
            };
            State.prototype.extractCookie = function (key) {
                var cookies = this.cookieJar.getCookies(this.constants.HOST);
                return _.find(cookies, { key: key }) || null;
            };
            State.prototype.extractCookieValue = function (key) {
                var cookie = this.extractCookie(key);
                if (cookie === null) {
                    _a.stateDebug("Could not find ".concat(key));
                    throw new errors_1.IgCookieNotFoundError(key);
                }
                return cookie.value;
            };
            State.prototype.extractUserId = function () {
                try {
                    return this.cookieUserId;
                }
                catch (e) {
                    if (this.challenge === null || !this.challenge.user_id) {
                        throw new errors_1.IgUserIdNotFoundError();
                    }
                    return String(this.challenge.user_id);
                }
            };
            State.prototype.deserializeCookieJar = function (cookies) {
                return __awaiter(this, void 0, void 0, function () {
                    var _b, _c;
                    var _this = this;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0:
                                _b = this.cookieJar;
                                _c = '_jar';
                                return [4 /*yield*/, Bluebird.fromCallback(function (cb) { return tough_cookie_1.CookieJar.deserialize(cookies, _this.cookieStore, cb); })];
                            case 1:
                                _b[_c] = _d.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            };
            State.prototype.serializeCookieJar = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_b) {
                        return [2 /*return*/, Bluebird.fromCallback(function (cb) { return _this.cookieJar['_jar'].serialize(cb); })];
                    });
                });
            };
            State.prototype.serialize = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var obj, _b, _c, _i, _d, _e, key, value;
                    var _f;
                    return __generator(this, function (_g) {
                        switch (_g.label) {
                            case 0:
                                _f = {
                                    constants: this.constants
                                };
                                _c = (_b = JSON).stringify;
                                return [4 /*yield*/, this.serializeCookieJar()];
                            case 1:
                                obj = (_f.cookies = _c.apply(_b, [_g.sent()]),
                                    _f);
                                for (_i = 0, _d = Object.entries(this); _i < _d.length; _i++) {
                                    _e = _d[_i], key = _e[0], value = _e[1];
                                    obj[key] = value;
                                }
                                return [2 /*return*/, obj];
                        }
                    });
                });
            };
            State.prototype.deserialize = function (state) {
                return __awaiter(this, void 0, void 0, function () {
                    var obj, _i, _b, _c, key, value;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0:
                                _a.stateDebug("Deserializing state of type ".concat(typeof state));
                                obj = typeof state === 'string' ? JSON.parse(state) : state;
                                if (typeof obj !== 'object') {
                                    _a.stateDebug("State deserialization failed, obj is of type ".concat(typeof obj, " (object expected)"));
                                    throw new TypeError("State isn't an object or serialized JSON");
                                }
                                _a.stateDebug("Deserializing ".concat(Object.keys(obj).join(', ')));
                                if (obj.constants) {
                                    this.constants = obj.constants;
                                    delete obj.constants;
                                }
                                if (!obj.cookies) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.deserializeCookieJar(obj.cookies)];
                            case 1:
                                _d.sent();
                                delete obj.cookies;
                                _d.label = 2;
                            case 2:
                                for (_i = 0, _b = Object.entries(obj); _i < _b.length; _i++) {
                                    _c = _b[_i], key = _c[0], value = _c[1];
                                    this[key] = value;
                                }
                                return [2 /*return*/];
                        }
                    });
                });
            };
            State.prototype.generateDevice = function (seed) {
                var chance = new Chance(seed);
                this.deviceString = chance.pickone(devices);
                var id = chance.string({
                    pool: 'abcdef0123456789',
                    length: 16,
                });
                this.deviceId = "android-".concat(id);
                this.uuid = chance.guid();
                this.phoneId = chance.guid();
                this.adid = chance.guid();
                this.build = chance.pickone(builds);
            };
            State.prototype.generateTemporaryGuid = function (seed, lifetime) {
                return new Chance("".concat(seed).concat(this.deviceId).concat(Math.round(Date.now() / lifetime))).guid();
            };
            State.prototype.hasValidAuthorization = function () {
                return this.parsedAuthorization && this.parsedAuthorization[AUTHORIZATION_TAG] === this.authorization;
            };
            State.prototype.updateAuthorization = function () {
                var _b;
                var _c;
                if (!this.hasValidAuthorization()) {
                    if ((_c = this.authorization) === null || _c === void 0 ? void 0 : _c.startsWith('Bearer IGT:2:')) {
                        try {
                            this.parsedAuthorization = __assign(__assign({}, JSON.parse(Buffer.from(this.authorization.substring('Bearer IGT:2:'.length), 'base64').toString())), (_b = {}, _b[AUTHORIZATION_TAG] = this.authorization, _b));
                        }
                        catch (e) {
                            _a.stateDebug("Could not parse authorization: ".concat(e));
                            this.parsedAuthorization = undefined;
                        }
                    }
                    else {
                        this.parsedAuthorization = undefined;
                    }
                }
            };
            return State;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _constants_decorators = [(0, decorators_1.Enumerable)(false)];
            _proxyUrl_decorators = [(0, decorators_1.Enumerable)(false)];
            _cookieStore_decorators = [(0, decorators_1.Enumerable)(false)];
            _cookieJar_decorators = [(0, decorators_1.Enumerable)(false)];
            _checkpoint_decorators = [(0, decorators_1.Enumerable)(false)];
            _challenge_decorators = [(0, decorators_1.Enumerable)(false)];
            _parsedAuthorization_decorators = [(0, decorators_1.Enumerable)(false)];
            __esDecorate(null, null, _constants_decorators, { kind: "field", name: "constants", static: false, private: false, access: { has: function (obj) { return "constants" in obj; }, get: function (obj) { return obj.constants; }, set: function (obj, value) { obj.constants = value; } }, metadata: _metadata }, _constants_initializers, _constants_extraInitializers);
            __esDecorate(null, null, _proxyUrl_decorators, { kind: "field", name: "proxyUrl", static: false, private: false, access: { has: function (obj) { return "proxyUrl" in obj; }, get: function (obj) { return obj.proxyUrl; }, set: function (obj, value) { obj.proxyUrl = value; } }, metadata: _metadata }, _proxyUrl_initializers, _proxyUrl_extraInitializers);
            __esDecorate(null, null, _cookieStore_decorators, { kind: "field", name: "cookieStore", static: false, private: false, access: { has: function (obj) { return "cookieStore" in obj; }, get: function (obj) { return obj.cookieStore; }, set: function (obj, value) { obj.cookieStore = value; } }, metadata: _metadata }, _cookieStore_initializers, _cookieStore_extraInitializers);
            __esDecorate(null, null, _cookieJar_decorators, { kind: "field", name: "cookieJar", static: false, private: false, access: { has: function (obj) { return "cookieJar" in obj; }, get: function (obj) { return obj.cookieJar; }, set: function (obj, value) { obj.cookieJar = value; } }, metadata: _metadata }, _cookieJar_initializers, _cookieJar_extraInitializers);
            __esDecorate(null, null, _checkpoint_decorators, { kind: "field", name: "checkpoint", static: false, private: false, access: { has: function (obj) { return "checkpoint" in obj; }, get: function (obj) { return obj.checkpoint; }, set: function (obj, value) { obj.checkpoint = value; } }, metadata: _metadata }, _checkpoint_initializers, _checkpoint_extraInitializers);
            __esDecorate(null, null, _challenge_decorators, { kind: "field", name: "challenge", static: false, private: false, access: { has: function (obj) { return "challenge" in obj; }, get: function (obj) { return obj.challenge; }, set: function (obj, value) { obj.challenge = value; } }, metadata: _metadata }, _challenge_initializers, _challenge_extraInitializers);
            __esDecorate(null, null, _parsedAuthorization_decorators, { kind: "field", name: "parsedAuthorization", static: false, private: false, access: { has: function (obj) { return "parsedAuthorization" in obj; }, get: function (obj) { return obj.parsedAuthorization; }, set: function (obj, value) { obj.parsedAuthorization = value; } }, metadata: _metadata }, _parsedAuthorization_initializers, _parsedAuthorization_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a.stateDebug = (0, debug_1.default)('ig:state'),
        _a;
}();
exports.State = State;
