import { EntityManager } from "@mikro-orm/postgresql";
import {
  CreateEmpleadoInput,
  DeleteEmpleadoInput,
  Empleado,
  EmpleadoInput,
  UpdateEmpleadoInput,
} from "./../entities/Empleado";

export class EmpleadoService {
  // Find All
  async empleados(em: EntityManager) {
    try {
      return em.find(Empleado, {});
    } catch (e) {
      return e;
    }
  }

  // Find by Codigo
  async empleado(em: EntityManager, { codigo }: EmpleadoInput) {
    try {
      const empleado = em.findOne(Empleado, { codigo });
      return empleado;
    } catch (e) {
      return e;
    }
  }

  async createEmpleado(em: EntityManager, input: CreateEmpleadoInput) {
    try {
      const empleado = em.create(Empleado, input);
      await em.persistAndFlush(empleado);
      return empleado;
    } catch (e) {
      return e;
    }
  }

  async updateEmpleado(em: EntityManager, input: UpdateEmpleadoInput) {
    try {
      await em.nativeUpdate(Empleado, { codigo: input.codigo }, input);
      const empleado = await em.findOne(Empleado, { codigo: input.codigo });
      if (!empleado) {
        return null;
      }
      await em.persistAndFlush(empleado);
      return empleado;
    } catch (e) {
      return e;
    }
  }

  async deleteEmpleado(em: EntityManager, { codigo }: DeleteEmpleadoInput) {
    try {
      const empleado = await em.findOne(Empleado, { codigo });
      if (!empleado) {
        return `No se encontro el empleado`;
      }
      await em.nativeDelete(Empleado, { codigo });
      return `Empleado ${empleado.nombre} eliminado exitosamente`;
    } catch (e) {
      return e;
    }
  }
}
