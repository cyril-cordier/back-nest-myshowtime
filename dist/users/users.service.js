"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const common_2 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(createUserDto) {
        if ((await this.userModel.findOne({ email: createUserDto.email }))) {
            throw new common_2.ConflictException('Email already taken');
        }
        if ((await this.userModel.findOne({ phone: createUserDto.phone }))) {
            throw new common_2.ConflictException('Phone already taken');
        }
        if (createUserDto.password != createUserDto.password_confirmation) {
            throw new common_2.ConflictException('Password must be identical');
        }
        let createdUser = new this.userModel(createUserDto);
        return await createdUser.save();
    }
    async findOneByEmail(email) {
        return await this.userModel.findOne({ email: email });
    }
    async findAll() {
        return await this.userModel.find();
    }
    async findOneById(id) {
        return await this.userModel.findOne({ _id: id });
    }
    async delete(id) {
        return await this.userModel.findOneAndDelete({ _id: id });
    }
    async update(id, user) {
        if ((await this.userModel.findOne({ email: user.email }))) {
            throw new common_2.ConflictException('Email already taken');
        }
        return await this.userModel.findOneAndUpdate({ _id: id }, user, { new: true });
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('User')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map