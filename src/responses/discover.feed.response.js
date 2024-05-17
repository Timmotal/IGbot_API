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
exports.DiscoverFeedResponseUser = void 0;
var entities_1 = require("../entities");
var DiscoverFeedResponseUser = /** @class */ (function (_super) {
    __extends(DiscoverFeedResponseUser, _super);
    function DiscoverFeedResponseUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DiscoverFeedResponseUser;
}(entities_1.ProfileEntity));
exports.DiscoverFeedResponseUser = DiscoverFeedResponseUser;
