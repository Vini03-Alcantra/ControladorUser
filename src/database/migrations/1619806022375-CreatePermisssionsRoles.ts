import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreatePermisssionsRoles1619806022375 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query("drop table permission_roles")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(  
            "permissions_roles",
            "fk_roles_permissions"
        );
        await queryRunner.dropForeignKey(
            "permissions_roles",
            "fk_permissions_roles_"
        );
        await queryRunner.dropTable("permissions_roles")
    }

}
