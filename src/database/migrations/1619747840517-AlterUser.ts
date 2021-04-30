import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterUser1619747840517 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE user MODIFY COLUMN id int ")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
