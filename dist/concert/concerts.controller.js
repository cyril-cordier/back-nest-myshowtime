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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcertsController = void 0;
const common_1 = require("@nestjs/common");
const create_concert_dto_1 = require("./dto/create-concert.dto");
const concerts_service_1 = require("./concerts.service");
const passport_1 = require("@nestjs/passport");
let ConcertsController = class ConcertsController {
    constructor(concertsService) {
        this.concertsService = concertsService;
    }
    async findOne(id) {
        return this.concertsService.findOneById(id);
    }
    async findAll() {
        return this.concertsService.findAll();
    }
    async delete(id) {
        return this.concertsService.delete(id);
    }
    async create(createConcertDto) {
        return await this.concertsService.create(createConcertDto);
    }
    async update(updateConcertDto, id) {
        return await this.concertsService.update(id, updateConcertDto);
    }
};
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConcertsController.prototype, "findOne", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConcertsController.prototype, "findAll", null);
__decorate([
    common_1.Delete(':id'),
    common_1.UseGuards(passport_1.AuthGuard()),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConcertsController.prototype, "delete", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_concert_dto_1.CreateConcertDto]),
    __metadata("design:returntype", Promise)
], ConcertsController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    common_1.UseGuards(passport_1.AuthGuard()),
    __param(0, common_1.Body()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_concert_dto_1.CreateConcertDto, Object]),
    __metadata("design:returntype", Promise)
], ConcertsController.prototype, "update", null);
ConcertsController = __decorate([
    common_1.Controller('concerts'),
    __metadata("design:paramtypes", [concerts_service_1.ConcertsService])
], ConcertsController);
exports.ConcertsController = ConcertsController;
//# sourceMappingURL=concerts.controller.js.map