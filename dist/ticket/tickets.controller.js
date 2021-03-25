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
exports.TicketsController = void 0;
const common_1 = require("@nestjs/common");
const create_ticket_dto_1 = require("./dto/create-ticket.dto");
const tickets_service_1 = require("./tickets.service");
const passport_1 = require("@nestjs/passport");
let TicketsController = class TicketsController {
    constructor(ticketsService) {
        this.ticketsService = ticketsService;
    }
    async findOne(id) {
        return this.ticketsService.findOneById(id);
    }
    async findAll() {
        return this.ticketsService.findAll();
    }
    async delete(id) {
        return this.ticketsService.delete(id);
    }
    async create(createTicketDto) {
        return await this.ticketsService.create(createTicketDto);
    }
    async update(updateTicketDto, id) {
        return await this.ticketsService.update(id, updateTicketDto);
    }
};
__decorate([
    common_1.Get(':id'),
    common_1.UseGuards(passport_1.AuthGuard()),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TicketsController.prototype, "findOne", null);
__decorate([
    common_1.Get(),
    common_1.UseGuards(passport_1.AuthGuard()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TicketsController.prototype, "findAll", null);
__decorate([
    common_1.Delete(':id'),
    common_1.UseGuards(passport_1.AuthGuard()),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TicketsController.prototype, "delete", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ticket_dto_1.CreateTicketDto]),
    __metadata("design:returntype", Promise)
], TicketsController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    common_1.UseGuards(passport_1.AuthGuard()),
    __param(0, common_1.Body()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ticket_dto_1.CreateTicketDto, Object]),
    __metadata("design:returntype", Promise)
], TicketsController.prototype, "update", null);
TicketsController = __decorate([
    common_1.Controller('tickets'),
    __metadata("design:paramtypes", [tickets_service_1.TicketsService])
], TicketsController);
exports.TicketsController = TicketsController;
//# sourceMappingURL=tickets.controller.js.map