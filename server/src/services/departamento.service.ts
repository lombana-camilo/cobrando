import { EntityManager } from "@mikro-orm/postgresql";
import {
  CreateDepartamentoInput,
  Departamento,
} from "./../entities/Departamento";

export class DptoService {
  async departamentos(em: EntityManager) {
    return await em.find(Departamento, {});
  }

  async createDepartamento(em: EntityManager, input: CreateDepartamentoInput) {
    const departamento = em.create(Departamento, input);
    await em.persistAndFlush(departamento);
    return departamento;
  }
}
