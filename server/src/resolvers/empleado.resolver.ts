import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Context } from "./../types/context";
import { EmpleadoService } from "./../services/empleado.service";
import { Departamento } from "./../entities/Departamento";
import {
  CreateEmpleadoInput,
  DeleteEmpleadoInput,
  Empleado,
  EmpleadoInput,
  UpdateEmpleadoInput,
} from "./../entities/Empleado";

@Resolver()
export class EmpleadoResolver {
  constructor(private empleadoService: EmpleadoService) {
    this.empleadoService = new EmpleadoService();
  }

  @Query(() => [Empleado])
  empleados(@Ctx() { em }: Context) {
    return this.empleadoService.empleados(em);
  }

  @Query(() => Empleado, { nullable: true })
  empleado(@Ctx() { em }: Context, @Arg("input") input: EmpleadoInput) {
    return this.empleadoService.empleado(em, input);
  }

  @Mutation(() => Empleado)
  createEmpleado(
    @Ctx() { em }: Context,
    @Arg("input") input: CreateEmpleadoInput
  ) {
    return this.empleadoService.createEmpleado(em, input);
  }

  @Mutation(() => Empleado, { nullable: true })
  updateEmpleado(@Ctx() { em }: Context, @Arg("input") input: UpdateEmpleadoInput) {
    return this.empleadoService.updateEmpleado(em, input);
  }

  @Mutation(() => String, {nullable:true})
  deleteEmpleado(@Ctx() { em }: Context, @Arg("input") input: DeleteEmpleadoInput) {
    return this.empleadoService.deleteEmpleado(em, input);
  }
}
