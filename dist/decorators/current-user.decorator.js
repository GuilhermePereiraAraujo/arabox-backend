"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUser = void 0;
const common_1 = require("@nestjs/common");
const AuthRequest_1 = require("../auth/model/AuthRequest");
const user_entity_1 = require("../user/entities/user.entity");
exports.CurrentUser = (0, common_1.createParamDecorator)((data, context) => {
    const request = context.switchToHttp().getRequest();
    return request.principal;
});
//# sourceMappingURL=current-user.decorator.js.map