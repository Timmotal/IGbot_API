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
exports.IgRequestsLimitError = void 0;
var ig_client_error_1 = require("./ig-client.error");
var IgRequestsLimitError = /** @class */ (function (_super) {
    __extends(IgRequestsLimitError, _super);
    function IgRequestsLimitError() {
        return _super.call(this, 'You just made too many request to instagram API') || this;
    }
    return IgRequestsLimitError;
}(ig_client_error_1.IgClientError));
exports.IgRequestsLimitError = IgRequestsLimitError;
