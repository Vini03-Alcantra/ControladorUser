import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterIDUser1619748065056 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DELETE FROM user")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
