import {MigrationInterface, QueryRunner} from "typeorm";

export class excluirRolesPermissions1619808613065 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query("drop table permission_role")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
