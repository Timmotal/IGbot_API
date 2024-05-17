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
exports.IgNoCheckpointError = void 0;
var ig_client_error_1 = require("./ig-client.error");
var IgNoCheckpointError = /** @class */ (function (_super) {
    __extends(IgNoCheckpointError, _super);
    function IgNoCheckpointError(message) {
        if (message === void 0) { message = 'No checkpoint data available'; }
        return _super.call(this, message) || this;
    }
    return IgNoCheckpointError;
}(ig_client_error_1.IgClientError));
exports.IgNoCheckpointError = IgNoCheckpointError;
