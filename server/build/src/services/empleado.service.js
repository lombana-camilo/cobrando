"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadoService = void 0;
const Empleado_1 = require("./../entities/Empleado");
class EmpleadoService {
    async empleados(em) {
        try {
            return em.find(Empleado_1.Empleado, {});
        }
        catch (e) {
            return e;
        }
    }
    async empleado(em, { codigo }) {
        try {
            const empleado = em.findOne(Empleado_1.Empleado, { codigo });
            return empleado;
        }
        catch (e) {
            return e;
        }
    }
    async createEmpleado(em, input) {
        try {
            const empleado = em.create(Empleado_1.Empleado, input);
            await em.persistAndFlush(empleado);
            return empleado;
        }
        catch (e) {
            return e;
        }
    }
    async updateEmpleado(em, input) {
        try {
            await em.nativeUpdate(Empleado_1.Empleado, { codigo: input.codigo }, input);
            const empleado = await em.findOne(Empleado_1.Empleado, { codigo: input.codigo });
            if (!empleado) {
                return null;
            }
            await em.persistAndFlush(empleado);
            return empleado;
        }
        catch (e) {
            return e;
        }
    }
    async deleteEmpleado(em, { codigo }) {
        try {
            const empleado = await em.findOne(Empleado_1.Empleado, { codigo });
            if (!empleado) {
                return `No se encontro el empleado`;
            }
            await em.nativeDelete(Empleado_1.Empleado, { codigo });
            return `Empleado ${empleado.nombre} eliminado exitosamente`;
        }
        catch (e) {
            return e;
        }
    }
}
exports.EmpleadoService = EmpleadoService;
