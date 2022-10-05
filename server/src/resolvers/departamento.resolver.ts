import { Context } from "./../types/context";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { DptoService } from "./../services/departamento.service";
import {
  CreateDepartamentoInput,
  Departamento,
} from "./../entities/Departamento";

@Resolver()
export class DptoResolver {
  constructor(private dptoService: DptoService) {
    this.dptoService = new DptoService();
  }

  @Query(() => [Departamento])
  departamentos(@Ctx() { em }: Context) {
    return this.dptoService.departamentos(em);
  }

  @Mutation(() => Departamento)
  createDepartamento(
    @Ctx() { em }: Context,
    @Arg("input") input: CreateDepartamentoInput
  ) {
    return this.dptoService.createDepartamento(em, input);
  }
}
