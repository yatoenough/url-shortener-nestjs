import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const DatabaseConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'src/db/db.db',
  entities: ['dist/**/*.entity.js'],
};
