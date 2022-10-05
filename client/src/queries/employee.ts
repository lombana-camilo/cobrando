import { gql } from "@apollo/client";
import { Departamento } from "./department";

export interface Empleado {
  codigo: number;
  nombre: string;
  nif: string;
  apellido1: string;
  apellido2: string;
  codigo_departamento: Departamento;
}

export interface Empleados {
  empleados: Empleado[];
}

export interface UpdateEmpleado {
  codigo: number;
  nombre?: string;
  nif?: string;
  apellido1?: string;
  apellido2?: string;
  codigo_departamento?: number;
}

export interface DeleteEmpleado {
  codigo: number;
}

export const createEmpleadoMutation = gql`
  mutation createEmpleado($input: CreateEmpleadoInput!) {
    createEmpleado(input: $input) {
      nombre
      codigo
      nif
      apellido1
      apellido2
    }
  }
`;

export const getEmpleadosQuery = gql`
  query empleados {
    empleados {
      nombre
      codigo
      nif
      apellido1
      apellido2
      codigo_departamento {
        codigo
      }
    }
  }
`;

export const updateEmpleadoMutation = gql`
  mutation updateEmpleado($input: UpdateEmpleadoInput!) {
    updateEmpleado(input: $input) {
      nombre
      nif
      codigo
      apellido1
      apellido2
    }
  }
`;

export const deleteEmpleadoMutation = gql`
mutation deleteEmpleado($input: DeleteEmpleadoInput!) {
  deleteEmpleado(input: $input)
}
`
