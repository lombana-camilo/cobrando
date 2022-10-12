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
exports.CreateDepartamentoInput = exports.Departamento = void 0;
const core_1 = require("@mikro-orm/core");
const type_graphql_1 = require("type-graphql");
let Departamento = class Departamento {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", Number)
], Departamento.prototype, "codigo", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, core_1.Property)({ type: "text" }),
    __metadata("design:type", String)
], Departamento.prototype, "nombre", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Number),
    (0, core_1.Property)({ type: "double" }),
    __metadata("design:type", Number)
], Departamento.prototype, "presupuesto", void 0);
Departamento = __decorate([
    (0, core_1.Entity)(),
    (0, type_graphql_1.ObjectType)()
], Departamento);
exports.Departamento = Departamento;
let CreateDepartamentoInput = class CreateDepartamentoInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], CreateDepartamentoInput.prototype, "codigo", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateDepartamentoInput.prototype, "nombre", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], CreateDepartamentoInput.prototype, "presupuesto", void 0);
CreateDepartamentoInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreateDepartamentoInput);
exports.CreateDepartamentoInput = CreateDepartamentoInput;
