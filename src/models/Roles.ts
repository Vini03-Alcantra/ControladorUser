import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn} from "typeorm";

@Entity("roles")
class Roles{
    @PrimaryGeneratedColumn("uuid")
    id: string;    
    @Column()
    name: string;
    @Column()
    description: string;
    @CreateDateColumn()
    created_at: Date;
}

export default Roles;