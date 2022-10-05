import { BeforeCreate, Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, InputType, Int, ObjectType } from "type-graphql";


@Entity()
@ObjectType()
export class Departamento {
  @Field(() => Int)
  @PrimaryKey()
  codigo?: number;

  @Field(() => String)
  @Property({ type: "text" })
  nombre!: string;

  @Field(() => Number)
  @Property({ type: "double" })
  presupuesto!: number;

}

@InputType()
export class CreateDepartamentoInput{
  @Field(() => Int,{nullable:true})
  codigo?: number;

  @Field(() => String)
  nombre!: string;

  @Field(() => Number)
  presupuesto!: number;

}
