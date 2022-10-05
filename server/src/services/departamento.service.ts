import { EntityManager } from "@mikro-orm/postgresql";
import bcrypt from "bcrypt";
import { ApolloError } from "apollo-server";
import { Ctx } from "type-graphql";
import { Context } from "./../types/context";
import {
  CreateDepartamentoInput,
  Departamento,
} from "./../entities/Departamento";

export class DptoService {
  async departamentos(em: EntityManager) {
    return em.find(Departamento, {});
  }

  async createDepartamento(em: EntityManager, input: CreateDepartamentoInput) {
    const departamento = em.create(Departamento, input);
    await em.persistAndFlush(departamento);
    return departamento;
  }
}
