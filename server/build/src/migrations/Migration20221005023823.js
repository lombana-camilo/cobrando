"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20221005023823 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20221005023823 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "departamento" ("codigo" serial primary key, "nombre" text not null, "presupuesto" double precision not null);');
        this.addSql('create table "empleado" ("codigo" serial primary key, "nif" text not null, "nombre" text not null, "apellido1" text not null, "apellido2" text not null, "codigo_departamento_codigo" int not null);');
        this.addSql('alter table "empleado" add constraint "empleado_codigo_departamento_codigo_foreign" foreign key ("codigo_departamento_codigo") references "departamento" ("codigo") on update cascade;');
    }
}
exports.Migration20221005023823 = Migration20221005023823;
