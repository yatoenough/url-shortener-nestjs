import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'url_pair' })
export class Url {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  originalUrl: string;

  @Column()
  shortUrl: string;
}
