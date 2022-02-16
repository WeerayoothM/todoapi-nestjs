import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Harrypotter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  subtitle: string;

  @Column()
  imageUrl: string;

  @Column({ length: 5000 })
  description: string;
}
