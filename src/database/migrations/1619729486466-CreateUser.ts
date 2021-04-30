import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1619729486466 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(  
            new Table({
                name: "user",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        generationStrategy: "uuid",
                                                
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "username",
                        type: "varchar",                        
                    },
                    {
                        name: "password",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
