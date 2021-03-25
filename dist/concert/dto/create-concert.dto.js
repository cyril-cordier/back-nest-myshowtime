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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateConcertDto = void 0;
const class_validator_1 = require("class-validator");
class CreateConcertDto {
}
__decorate([
    class_validator_1.ValidateIf(dto => dto.date != null),
    __metadata("design:type", String)
], CreateConcertDto.prototype, "date", void 0);
__decorate([
    class_validator_1.ValidateIf(dto => dto.title != null),
    class_validator_1.IsNotEmpty(),
    class_validator_1.MinLength(3),
    __metadata("design:type", String)
], CreateConcertDto.prototype, "title", void 0);
__decorate([
    class_validator_1.ValidateIf(dto => dto.location != null),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateConcertDto.prototype, "location", void 0);
__decorate([
    class_validator_1.ValidateIf(dto => dto.price != null),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateConcertDto.prototype, "price", void 0);
__decorate([
    class_validator_1.ValidateIf(dto => dto.band != null),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateConcertDto.prototype, "band", void 0);
__decorate([
    class_validator_1.ValidateIf(dto => dto.description != null),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateConcertDto.prototype, "description", void 0);
__decorate([
    class_validator_1.ValidateIf(dto => dto.image != null),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateConcertDto.prototype, "image", void 0);
__decorate([
    class_validator_1.ValidateIf(dto => dto.genre != null),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateConcertDto.prototype, "genre", void 0);
exports.CreateConcertDto = CreateConcertDto;
//# sourceMappingURL=create-concert.dto.js.map