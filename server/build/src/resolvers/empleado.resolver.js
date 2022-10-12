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
exports.EmpleadoResolver = void 0;
const type_graphql_1 = require("type-graphql");
const empleado_service_1 = require("./../services/empleado.service");
const Empleado_1 = require("./../entities/Empleado");
let EmpleadoResolver = class EmpleadoResolver {
    constructor(empleadoService) {
        this.empleadoService = empleadoService;
        this.empleadoService = new empleado_service_1.EmpleadoService();
    }
    empleados({ em }) {
        return this.empleadoService.empleados(em);
    }
    empleado({ em }, input) {
        return this.empleadoService.empleado(em, input);
    }
    createEmpleado({ em }, input) {
        return this.empleadoService.createEmpleado(em, input);
    }
    updateEmpleado({ em }, input) {
        return this.empleadoService.updateEmpleado(em, input);
    }
    deleteEmpleado({ em }, input) {
        return this.empleadoService.deleteEmpleado(em, input);
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Empleado_1.Empleado]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EmpleadoResolver.prototype, "empleados", null);
__decorate([
    (0, type_graphql_1.Query)(() => Empleado_1.Empleado, { nullable: true }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Empleado_1.EmpleadoInput]),
    __metadata("design:returntype", void 0)
], EmpleadoResolver.prototype, "empleado", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Empleado_1.Empleado),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Empleado_1.CreateEmpleadoInput]),
    __metadata("design:returntype", void 0)
], EmpleadoResolver.prototype, "createEmpleado", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Empleado_1.Empleado, { nullable: true }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Empleado_1.UpdateEmpleadoInput]),
    __metadata("design:returntype", void 0)
], EmpleadoResolver.prototype, "updateEmpleado", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String, { nullable: true }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Empleado_1.DeleteEmpleadoInput]),
    __metadata("design:returntype", void 0)
], EmpleadoResolver.prototype, "deleteEmpleado", null);
EmpleadoResolver = __decorate([
    (0, type_graphql_1.Resolver)(),
    __metadata("design:paramtypes", [empleado_service_1.EmpleadoService])
], EmpleadoResolver);
exports.EmpleadoResolver = EmpleadoResolver;
