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
exports.DeleteEmpleadoInput = exports.UpdateEmpleadoInput = exports.CreateEmpleadoInput = exports.EmpleadoInput = exports.Empleado = void 0;
const core_1 = require("@mikro-orm/core");
const type_graphql_1 = require("type-graphql");
const Departamento_1 = require("./Departamento");
let Empleado = class Empleado {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", Number)
], Empleado.prototype, "codigo", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, core_1.Property)({ type: "text" }),
    __metadata("design:type", String)
], Empleado.prototype, "nif", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, core_1.Property)({ type: "text" }),
    __metadata("design:type", String)
], Empleado.prototype, "nombre", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, core_1.Property)({ type: "text" }),
    __metadata("design:type", String)
], Empleado.prototype, "apellido1", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, core_1.Property)({ type: "text" }),
    __metadata("design:type", String)
], Empleado.prototype, "apellido2", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Departamento_1.Departamento),
    (0, core_1.ManyToOne)(() => Departamento_1.Departamento),
    __metadata("design:type", Departamento_1.Departamento)
], Empleado.prototype, "codigo_departamento", void 0);
Empleado = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, core_1.Entity)()
], Empleado);
exports.Empleado = Empleado;
let EmpleadoInput = class EmpleadoInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], EmpleadoInput.prototype, "codigo", void 0);
EmpleadoInput = __decorate([
    (0, type_graphql_1.InputType)()
], EmpleadoInput);
exports.EmpleadoInput = EmpleadoInput;
let CreateEmpleadoInput = class CreateEmpleadoInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateEmpleadoInput.prototype, "nif", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateEmpleadoInput.prototype, "nombre", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateEmpleadoInput.prototype, "apellido1", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateEmpleadoInput.prototype, "apellido2", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Departamento_1.Departamento)
], CreateEmpleadoInput.prototype, "codigo_departamento", void 0);
CreateEmpleadoInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreateEmpleadoInput);
exports.CreateEmpleadoInput = CreateEmpleadoInput;
let UpdateEmpleadoInput = class UpdateEmpleadoInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], UpdateEmpleadoInput.prototype, "codigo", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UpdateEmpleadoInput.prototype, "nif", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UpdateEmpleadoInput.prototype, "nombre", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UpdateEmpleadoInput.prototype, "apellido1", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UpdateEmpleadoInput.prototype, "apellido2", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Departamento_1.Departamento)
], UpdateEmpleadoInput.prototype, "codigo_departamento", void 0);
UpdateEmpleadoInput = __decorate([
    (0, type_graphql_1.InputType)()
], UpdateEmpleadoInput);
exports.UpdateEmpleadoInput = UpdateEmpleadoInput;
let DeleteEmpleadoInput = class DeleteEmpleadoInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], DeleteEmpleadoInput.prototype, "codigo", void 0);
DeleteEmpleadoInput = __decorate([
    (0, type_graphql_1.InputType)()
], DeleteEmpleadoInput);
exports.DeleteEmpleadoInput = DeleteEmpleadoInput;
