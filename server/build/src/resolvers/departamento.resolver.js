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
exports.DptoResolver = void 0;
const type_graphql_1 = require("type-graphql");
const departamento_service_1 = require("./../services/departamento.service");
const Departamento_1 = require("./../entities/Departamento");
let DptoResolver = class DptoResolver {
    constructor(dptoService) {
        this.dptoService = dptoService;
        this.dptoService = new departamento_service_1.DptoService();
    }
    departamentos({ em }) {
        return this.dptoService.departamentos(em);
    }
    createDepartamento({ em }, input) {
        return this.dptoService.createDepartamento(em, input);
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Departamento_1.Departamento]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DptoResolver.prototype, "departamentos", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Departamento_1.Departamento),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Departamento_1.CreateDepartamentoInput]),
    __metadata("design:returntype", void 0)
], DptoResolver.prototype, "createDepartamento", null);
DptoResolver = __decorate([
    (0, type_graphql_1.Resolver)(),
    __metadata("design:paramtypes", [departamento_service_1.DptoService])
], DptoResolver);
exports.DptoResolver = DptoResolver;
