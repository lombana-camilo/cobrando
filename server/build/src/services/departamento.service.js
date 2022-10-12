"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DptoService = void 0;
const Departamento_1 = require("./../entities/Departamento");
class DptoService {
    async departamentos(em) {
        return await em.find(Departamento_1.Departamento, {});
    }
    async createDepartamento(em, input) {
        const departamento = em.create(Departamento_1.Departamento, input);
        await em.persistAndFlush(departamento);
        return departamento;
    }
}
exports.DptoService = DptoService;
