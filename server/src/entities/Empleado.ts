import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, InputType, Int, ObjectType } from "type-graphql";
import { Departamento } from "./Departamento";

@ObjectType()
@Entity()
export class Empleado {
  @Field(() => Int)
  @PrimaryKey()
  codigo?: number;

  @Field(() => String)
  @Property({ type: "text" })
  nif!: string;

  @Field(() => String)
  @Property({ type: "text" })
  nombre!: string;

  @Field(() => String)
  @Property({ type: "text" })
  apellido1!: string;

  @Field(() => String)
  @Property({ type: "text" })
  apellido2!: string;

  @Field(()=>Departamento)
  @ManyToOne(() => Departamento)
  codigo_departamento!: Departamento;
}

@InputType()
export class EmpleadoInput {
  @Field(() => Int)
  codigo!: number;
}

@InputType()
export class CreateEmpleadoInput {
  @Field(() => String)
  nif!: string;

  @Field(() => String)
  nombre!: string;

  @Field(() => String)
  apellido1!: string;

  @Field(() => String)
  apellido2!: string;

  @Field(() => Int)
  codigo_departamento!: Departamento;
}

@InputType()
export class UpdateEmpleadoInput {
  @Field(() => Int)
  codigo!: number;

  @Field(() => String,{nullable:true})
  nif?: string;

  @Field(() => String,{nullable:true})
  nombre?: string;

  @Field(() => String,{nullable:true})
  apellido1?: string;

  @Field(() => String,{nullable:true})
  apellido2?: string;

  @Field(() => Int,{nullable:true})
  codigo_departamento?: Departamento;

}

@InputType()
export class DeleteEmpleadoInput {
  @Field()
  codigo!: number;
}
