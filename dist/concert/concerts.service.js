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
exports.ConcertsService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
let ConcertsService = class ConcertsService {
    constructor(concertModel) {
        this.concertModel = concertModel;
    }
    async create(createConcertDto) {
        let createdConcert = new this.concertModel(createConcertDto);
        return await createdConcert.save();
    }
    async findAll() {
        return await this.concertModel.find();
    }
    async findOneById(id) {
        return await this.concertModel.findOne({ _id: id });
    }
    async delete(id) {
        return await this.concertModel.findOneAndDelete({ _id: id });
    }
    async update(id, concert) {
        return await this.concertModel.findOneAndUpdate({ _id: id }, concert, { new: true });
    }
};
ConcertsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Concert')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], ConcertsService);
exports.ConcertsService = ConcertsService;
//# sourceMappingURL=concerts.service.js.map