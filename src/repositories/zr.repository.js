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
exports.ZrRepository = void 0;
var repository_1 = require("../core/repository");
var ZrRepository = /** @class */ (function (_super) {
    __extends(ZrRepository, _super);
    function ZrRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZrRepository.prototype.tokenResult = function () {
        return this.client.request.send({
            url: '/api/v1/zr/token/result/',
            qs: {
                device_id: this.client.state.deviceId,
                token_hash: '',
                custom_device_id: this.client.state.uuid,
                fetch_reason: 'token_expired',
            },
        });
    };
    return ZrRepository;
}(repository_1.Repository));
exports.ZrRepository = ZrRepository;
