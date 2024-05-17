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
exports.EntityFactory = void 0;
var repository_1 = require("./repository");
var entities_1 = require("../entities");
var EntityFactory = /** @class */ (function (_super) {
    __extends(EntityFactory, _super);
    function EntityFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EntityFactory.prototype.directThread = function (id) {
        var thread = new entities_1.DirectThreadEntity(this.client);
        if (id instanceof Array) {
            thread.userIds = id;
        }
        else {
            thread.threadId = id;
        }
        return thread;
    };
    EntityFactory.prototype.profile = function (pk) {
        var thread = new entities_1.ProfileEntity(this.client);
        thread.pk = pk;
        return thread;
    };
    return EntityFactory;
}(repository_1.Repository));
exports.EntityFactory = EntityFactory;
