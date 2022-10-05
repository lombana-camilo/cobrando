import { EntityManager } from "@mikro-orm/postgresql";
import { Seeder } from "@mikro-orm/seeder";
import { Departamento } from "./../entities/Departamento";

const initialDepartamentos: Departamento[] = [
  { codigo: 111, nombre: "Departamento1", presupuesto: 500 },
  { codigo: 222, nombre: "Departamento2", presupuesto: 800 },
  { codigo: 333, nombre: "Departamento3", presupuesto: 1000 },
];

export class Seed extends Seeder {
  async run(em: EntityManager) {
    await em.nativeDelete(Departamento, {});
    initialDepartamentos.forEach(async (dep) => {
      let newDepartamento = em.create(Departamento, dep);
    });
  }
}
