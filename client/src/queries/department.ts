import { gql } from "@apollo/client";

export interface Departamento {
  codigo: number;
  nombre: string;
  presupuesto: number;
}

export interface Departamentos {
  departamentos: Departamento[];
}

export const getDepartamentosQuery = gql`
  query {
    departamentos {
      nombre
      codigo
      presupuesto
    }
  }
`;
