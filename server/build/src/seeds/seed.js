"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seed = void 0;
const seeder_1 = require("@mikro-orm/seeder");
const Departamento_1 = require("./../entities/Departamento");
const initialDepartamentos = [
    { codigo: 111, nombre: "Departamento1", presupuesto: 500 },
    { codigo: 222, nombre: "Departamento2", presupuesto: 800 },
    { codigo: 333, nombre: "Departamento3", presupuesto: 1000 },
];
class Seed extends seeder_1.Seeder {
    async run(em) {
        await em.nativeDelete(Departamento_1.Departamento, {});
        initialDepartamentos.forEach(async (dep) => {
            let newDepartamento = em.create(Departamento_1.Departamento, dep);
        });
    }
}
exports.Seed = Seed;
