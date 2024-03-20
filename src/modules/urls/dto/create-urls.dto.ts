import { ApiProperty } from '@nestjs/swagger';
import { IsUrl } from 'class-validator';

export class CreateUrlsDto {
  @IsUrl()
  @ApiProperty()
  url: string;
}
